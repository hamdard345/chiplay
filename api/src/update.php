<?php

use FirebaseJWT\JWT;
use FirebaseJWT\Key;
 
/** 
 * Update the award status of any paper . A valid JWT is required. 
 * @author Noorullah Niamatullah
 */
class Update extends Endpoint
{
    public function __construct()
    {
      $this->validateRequestMethod("POST");
      $this-> validateToken();
      $this->validateUpdateParams();

      // conecct to the database
      $db = new Database("db/chiplay.sqlite");
      // Initialise and execute the update
      $this->initialiseSQL();
      $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        $this->setData( array(
            "length" => 0,
            "message" => "Success",
            "data" => null
        ));
    }

    private function validateRequestMethod($method) {
          if ($_SERVER['REQUEST_METHOD'] != $method) {
            throw new ClientException("Invalid Request Method", 405);
           }
    }

    private function validateToken() {
        // 1. Use the secret key
        $secretkey = SECRET;
              
        // Get all headers from the http request using php method getallheaders()
        $allHeaders = getallheaders();
        $authorizationHeader = "";
  
        /**
         * Look for an Authorization header. using key called Authoriazation in all 
         * headers associative array both with a capital A or lowercase a from allHeaders
         */
        if (array_key_exists('Authorization', $allHeaders)) {
          $authorizationHeader = $allHeaders['Authorization'];
        } elseif (array_key_exists('authorization', $allHeaders)) {
          $authorizationHeader = $allHeaders['authorization'];
        }
          
        /**
         * Check if there is a Bearer token in the header from first to 7th charecter in the authorisation header
         * if its empty or not a Bearer token throw exception
         */
        if (substr($authorizationHeader, 0, 7) != 'Bearer ') {
          throw new ClientException("Bearer token required", 401);
        }
        /**
         * Extract the JWT from the header (by cutting the text 'Bearer ') getting 
         * everything after 7 charecter also triming white spaces
         */
        $jwt = trim(substr($authorizationHeader, 7));
      
        /**
         * Use the JWT class static method decode to decode the token
         *  HS256 algorithm which is used for encode $decoded is the object
         */
        try{
            $decoded = JWT::decode($jwt, new Key($secretkey, 'HS256'));
        } catch ( Exception $e) {
        throw new ClientException($e->getMessage(), 401);
      }
        //check the issuer of the jwt token
      if ($decoded->iss != $_SERVER['HTTP_HOST']){
        throw new ClientException(" Invalid Token issuer ", 401);
      }
    }

    private function validateUpdateParams(){
      // 1. Look for award status  and paper_id parameter
      if (!filter_has_var(INPUT_POST,'award')) {
        throw new ClientException("award parameter required", 400);
      }
      if (!filter_has_var(INPUT_POST,'paper_id')) {
        throw new ClientException("paper_id parameter required", 400);
      }
          
      // 2. Check to see if a valid award is supplied or what awards are acceptable hard coded
      $award = ["true","null"];
      if (!in_array(strtolower($_POST['award']), $award)) {
        throw new ClientException("invalid award", 400);
      }
      // do a similiar check for paper id to be between 1 and total papers like 400 etc
    }

    protected function initialiseSQL() {
      //hardcoded information about the award of a paper, this time a mapping of the award status to true or false. 
      $awardtype = ["true"=>"true","null"=>null];
    
      $award = $awardtype[strtolower($_POST['award'])];
    
      $sql = "UPDATE paper SET award = :award WHERE paper_id = :paper_id";
      $this->setSQL($sql);
      $this->setSQLParams(['award'=> $award, 'paper_id'=>$_POST['paper_id']]);
    }

}