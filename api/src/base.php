<?php

/**
 * Base endpoint extending Endpint
 * 
 * @author Noorullah Niamatullah
 */
class Base extends Endpoint
{
    /**
     * Override the constructor because we do
     * not need to query the database for this 
     * endpoint.
     */
    public function __construct()
    {
        $name = array(
            "first_name" => "Noorullah",
            "last_name" => "Niamatullah"
        );
        $conference = [];
        $link = "http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/documentation/";

        $db = new Database("db/chiplay.sqlite");
        $this->validateRequestMethod("GET");
        $this->initialiseSQL();
        $conference = $db->executeSQL($this->getSQL(), $this->getSQLParams());
        $data = array(
            "name" => $name,
            "id" => "w18002720",
            "conference" => $conference,
            "Link" => $link
        );
        $this->setData(array(
            "length" => count($data),
            "message" => "succes",
            "data" => $data
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
        $sql = "SELECT name As ConferenceName FROM conference_information";

        $this->setSQL($sql);
        $this->setSQLParams([]);
    }
}
