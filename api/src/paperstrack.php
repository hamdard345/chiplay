<?php
/**
 * PapersTrack endpoint return papers only associated to specific track
 * @author Noorullah Niamatullah w18002720
 */
class PapersTrack extends Endpoint
{

  public function __construct()
  {


    $db = new Database("db/chiplay.sqlite");

    //check the request method is GET
    $this->validateRequestMethod("GET");

    //check there is a track parameter
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
    if (!isset($_GET['track'])) {
      throw new ClientException("Please supply a track", 400);
    }
  }
  protected function initialiseSQL()
  {
    $sql = "SELECT paper_id, title ,award , abstract ,name as trackFullname, short_name
            FROM track  left JOIN paper ON  paper.track_id=track.track_id
            WHERE short_name LIKE :track";
    $sqlParams = [];
    $sqlParams['track'] = '%'. $_GET['track'] .'%';

    $this->setSQL($sql);
    $this->setSQLParams($sqlParams);
  }
}
