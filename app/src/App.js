import './App.css';
import { Routes, Route, } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthorsPage from './components/AuthorsPage';
import ALLPapers from './components/AllPapers';
import InteractivityPapers from './components/InteractivityPapers';
import Fullpapers from './components/FullPapers';
import WipPapers from './components/WipPapers';
import CompetitionPapers from './components/CompetitionPapers';
import DoctoralPapers from './components/DoctoralPapers';
import RapidPapers from './components/RapidPapers';
import Admin from './components/Admin';
import { useState,useEffect } from 'react';
import Layout from "./components/Layout/Layout";
/**
* App
*
* Main page for the app. Consider moving the menu to it
* own component.
*
* @author Noorullah Niamatullah w18002720
*/
function App() {

  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [update, setUpdate] = useState(0);

  const handleAuthenticated = (isAuthenticated) => {setAuthenticated(isAuthenticated)}
  useEffect( ()=> {
    fetch("http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/paper")
    .then(
        (response) => response.json()
    )
    .then(
        (json) => {
          setPapers(json.data)
          setLoading(false)
        }
    )
    .catch(
        (e) =>{
          console.log(e.message)
        }
    )
  },[update]);
  const handleUpdate = () =>{ setUpdate(update + 1)}
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/papers"element={<ALLPapers papers={papers} loading={loading}/>}/>
          <Route path="interactivity" element ={<InteractivityPapers papers={papers} loading={loading}/>}/>
          <Route path="wip" element ={<WipPapers papers={papers}/>}/>
          <Route path="fullPapers" element ={<Fullpapers papers={papers}/>}/>
          <Route path="competition" element ={<CompetitionPapers papers={papers}/>}/>
          <Route path="doctoral" element ={<DoctoralPapers papers={papers}/>}/>
          <Route path="rapid" element ={<RapidPapers papers={papers}/>}/>
          <Route
              path="/admin" 
              element={
                    <Admin
                    papers={papers}
                    authenticated={authenticated}
                    handleAuthenticated={handleAuthenticated}
                    handleUpdate={handleUpdate}
                    />
                }
          />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;