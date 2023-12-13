
import { Routes, Route, } from 'react-router-dom';
import HomePage from './components/HomePage';
import PapersEndpoint from './components/PapersEndpoint';
import Layout from "./components/Layout/Layout";
import PapersAuthor from './components/PapersAuthor';
import Track from './components/Track';
import Author from './components/Author';
import AuthorSearch from './components/AuthorSearch';
import Affiliation from './components/Affiiation';
import Institution from './components/Institution';
import Authenticate from './components/Authenticate';
import Update from './components/Update';




/**
* App
*
* @author Noorullah Niamatullah
*/
function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/papers" element ={<PapersEndpoint/>}/>
        <Route path="/papersauthor" element ={<PapersAuthor/>}/>
        <Route path="/track" element ={<Track/>}/>
        <Route path="/author" element ={<Author/>}/>
        <Route path="/authorsearch" element ={<AuthorSearch/>}/>
        <Route path="/affiliation" element ={<Affiliation/>}/>
        <Route path="/institution" element ={<Institution/>}/>
        <Route path="/authenticate" element={<Authenticate/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      </Layout>
    </div>
  );
}
export default App