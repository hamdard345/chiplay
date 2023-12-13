import React,{useState, useEffect} from 'react';
import { Buffer } from 'buffer';
import UpdateAward from './UpdateAward';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Container } from '@mui/system';
import { Button, Grid, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
/**
 * 
 * @param {authenticated} props the state which track user authentication 
 * @returns conditional rendering if user signed in the will be able to update
 * if not logged in showing a sign in
 * encoding username and password using buffer to the required format base64
 * once user is sucefuly authenticated the jwt token is stored in the browser (local storage) which retains the authentaed state
 * @author Noorullah Niamatullah w18002720
 */
function AdminPage(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(
    () => {
        if (localStorage.getItem('token')) {
            props.handleAuthenticated(true)
        }
    }
  ,[])

  const handleUsername = (event) => {
      setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  //doing post request to auth endpoint
  //including user name and password using authorisation header
  const handleSubmit = () => {

      const encodedString = Buffer.from(
        username + ":" + password
      ).toString('base64');

      fetch("http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/auth",
        {
          method:"POST",
          headers: new Headers( { "Authorization": "Basic " +encodedString })
        }
      )
      .then(
          (response) => {   
              return response.json()
          }
      )
      .then(
          (json) => {
            console.log(json);
              //calling the handler when succefully authenticated with the api
              
              if (json.message === 'Success') {
                props.handleAuthenticated(true)
                //store the token in localStorage
                  localStorage.setItem('token', json.data.token);
              }
          }
      )
      .catch(
          (e) => {
              console.log(e.message)
              
          }
      )
  }

  const handleSignOut = () => {
    props.handleAuthenticated(false);
    setUsername("");
    setPassword("");
    localStorage.removeItem('token');
  }
  const listOfPapers = props.papers.map(
    (value, key) => <section key={key}>
        <UpdateAward paper={value} handleUpdate={props.handleUpdate}/>
      </section>
  )
  return (
    <div>
        {props.authenticated && <Grid container direction="column"justify="center" alignItems="center" sx={{ border:1 }}>
              <Grid item>
              <h2>Update Award</h2>
              <Button 
                  variant="contained" color="secondary" fullWidth sx={{ marginTop:1, marginBottom:1 }}
                  onClick={handleSignOut}  
              >Sign Out</Button>
              </Grid ><Grid container direction="column"justify="center" alignItems="center">
              {listOfPapers}</Grid>
        </Grid>
        }
        {!props.authenticated && <div> <Container  sx={{ display:'flex',flexDirection:'column',alignItems:'center',width:330 }}>
        <CssBaseline />
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main',marginTop:2 }}>
            <LockOutlinedIcon />
          </Avatar>
                  <h2>Sign in</h2>
                  <TextField 
                      margin="normal"
                      required
                      fullWidth
                       type="text"
                       placeholder="username"
                       value={username}
                       onChange ={handleUsername}
                       autoFocus
                       label="username"
                  />
                  <TextField 
                        margin="normal"
                        required
                        fullWidth
                        label="password"
                        type="password" 
                        placeholder="password"
                        value={password}
                        onChange ={handlePassword}
                  />
                  <Button variant="contained" color="secondary" fullWidth sx={{ marginTop:1 }}  
                      onClick={handleSubmit}
                  >Submit</Button>
                  </Container>
              </div>
        }
    </div>
  )
}
export default AdminPage;