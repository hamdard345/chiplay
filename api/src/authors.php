<?php

/**
 * Authors endpoint return information about all authors at the conference
 * @author Noorullah Niamatullah w18002720
 */
class Authors extends Endpoint
{
  
    public function __construct()
    {
  
  
      $db = new Database("db/chiplay.sqlite");
  
      //check the request method is Get
      $this->validateRequestMethod("GET");
  

      $this->initialiseSQL();
      $queryResult = $db->executeSQL($this->getSQL());
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
    protected function initialiseSQL()
    {
      $sql = "SELECT author_id, first_name, middle_initial, last_name FROM author ";
  
      $this->setSQL($sql);

    }
}
