<?php
 
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {    
    exit(0);
}
 /**
  * Request object are created and the path used in the switch statement. passing the request object to the endpoint
  * @author Noorullah Niamatullah w18002720
  */
define('SECRET',"4PpgK/?h.Y<2G7lbnM'}t3QGbt&|e");
// include and register the autoloader
include 'config/config.php';


$request = new Request();
    /**
     * switch statement that will match different paths and return different results based upon different 'cases'
     * break will stop execution if none of those cases matches
     */
    try{
        switch($request->getPath()) {
            case '/':
            case'/base';
            case'/api';
                $endpoint = new Base($request);
                break;
            case '/paper/':
            case '/paper':
            case '/papers/':
            case '/papers':
                $endpoint = new Papers($request);
                break;
            case '/paperauthor/':
            case '/paperauthor':
            case '/paperauthors/':
            case '/paperauthors':
                $endpoint = new PaperAuthor($request);
                break;
            case '/paperstrack/':
            case '/paperstrack':
            case '/papertrack/':
            case '/papertrack':
                    $endpoint = new PapersTrack($request);
                    break;
            case '/author/':
            case '/author':
            case '/authors/':
            case '/authors':
                $endpoint = new Authors($request);
                break;
            case '/authorsearch/':
            case '/authorsearch':
            case '/authorSearch/':
            case '/authorSearch':
                $endpoint = new AuthorSearch($request);
                break;
            case '/affiliation/':
            case '/affiliation':
            case '/affiliations/':
            case '/affiliations':
                $endpoint = new Affiliation($request);
                break;
            case '/institution/':
            case '/institution':
            case '/institutions/':
            case '/institutions':
                $endpoint = new Institution($request);
                break;
            case '/auth/':
            case '/auth':
            case '/auths/':
            case '/auths':
                $endpoint = new Authenticate($request);
                break;
            case '/update/':
            case '/update':
                $endpoint = new Update();
                break;       
            default:
            $endpoint = new ClientError("Path not found: " . $path, 404);
                
        }
    } catch (ClientException $e){
        $endpoint = new ClientError($e->getMessage(), $e->getCode());
    }
 
$response = $endpoint->getData();
echo json_encode($response);