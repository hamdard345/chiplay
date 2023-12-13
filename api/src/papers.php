<?php 

/**
 * Papper endpoint return information about all papers at the conference
 * @author Noorullah Niamatullah
 */
class Papers extends Endpoint
{
    public function __construct()
    {
  
  
      $db = new Database("db/chiplay.sqlite");
  
      //check the request method is GET
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
      $sql = "SELECT paper_id, title ,award , abstract ,name as trackFullname, short_name as trackShortname
              FROM track  left JOIN paper ON  paper.track_id=track.track_id";
  
      $this->setSQL($sql);
    }
}