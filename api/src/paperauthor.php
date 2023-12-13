<?php
/**
 * PapersAuthor endpoint return Author information of a specfic paper
 * @author Noorullah Niamatullah w18002720
 */
class PaperAuthor extends Endpoint
{

  public function __construct()
  {


    $db = new Database("db/chiplay.sqlite");

    //check the request method is GET
    $this->validateRequestMethod("GET");

    //check there is an author_id and paper_id parameter
    $this->validateParameters();
    $this->initialiseSQL();
    $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());
    $this->setData(array(
      "length" => count($queryResult),
      "message" => "succes",
      "data" => $queryResult
    ));
  }
  private function validateRequestMethod($method)
  {
    if ($_SERVER['REQUEST_METHOD'] != $method) {
      throw new ClientException("Invalid Request Method", 405);
    }
  }
  private function validateParameters()
  {
    if (!isset($_GET['paper_id'])) {
      throw new ClientException("Please supply paper_id", 400);
    }
  }
  protected function initialiseSQL()
  {
    $sql = "SELECT paper_has_author.paper_id as paper_id, paper_has_author.author_id as author_id,
            author.first_name, author.middle_initial, author.last_name, paper.title, paper.abstract
            FROM paper_has_author
            JOIN author on (author.author_id= paper_has_author.author_id)
            JOIN paper on ( paper_has_author.paper_id=paper.paper_id)
            WHERE paper_has_author.paper_id =:paper_id";

    $this->setSQL($sql);
    $this->setSQLParams(['paper_id' => $_GET['paper_id']]);
  }
}
