<?php 

/**
 * Affiliation endpoint return affiliation information for a specfic author
 * @author Noorullah Niamatullah w18002720
 */
class Affiliation extends Endpoint
{
    public function __construct()
    {
  
  
      $db = new Database("db/chiplay.sqlite");
  
      //check the request method is GET
      $this->validateRequestMethod("GET");
  
      //check there is an author_id
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
      if (!isset($_GET['author_id'])) {
        throw new ClientException("Please supply author_id", 400);
      }
    }
    protected function initialiseSQL()
    {
      $sql = "SELECT paper_id, affiliation.author_id, author.first_name, author.last_name, country, state,
      city, institution, department
      FROM affiliation 
      join author on (author.author_id = affiliation.author_id)
      where affiliation.author_id=:author_id";
  
      $this->setSQL($sql);
      $this->setSQLParams(['author_id' => $_GET['author_id']]);
    }
}