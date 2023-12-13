<?php 

/**
 * AuthorSearhc endpoint return author information for a specfic author
 * @author Noorullah Niamatullah w18002720
 */
class AuthorSearch extends Endpoint
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
      $sql = "SELECT author_id, first_name, middle_initial, last_name
              FROM author where author_id =:author_id";
  
      $this->setSQL($sql);
      $this->setSQLParams(['author_id' => $_GET['author_id']]);
    }
}