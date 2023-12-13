<?php
/**
 * Instiitution endpoint return information about all affililation of a paper
 * @author Noorullah Niamatullah w18002720
 */
class Institution extends Endpoint
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
    if (!isset($_GET['author_id']) || !isset($_GET['paper_id'])) {
      throw new ClientException("Please supply author_id and paper_id", 400);
    }
  }
  protected function initialiseSQL()
  {
    $sql = "SELECT   distinct paper_id, author_id,country, state, city, institution
      FROM affiliation where author_id=:author_id and paper_id=:paper_id
      group by institution";

    $this->setSQL($sql);
    $this->setSQLParams(['author_id' => $_GET['author_id'], 'paper_id' => $_GET['paper_id']]);
  }
}
