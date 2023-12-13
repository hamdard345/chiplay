import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import AuthEndpointRequestExample from './img/AuthEndpointRequestExample.JPG';
 /**
 * Authenticate endpoint Documentaion 
 * @author Noorullah Niamatullah w18002720
 */

function Authenticate(){
  return (
    
      <Container  maxWidth="md" align="center" sx={{padding:1}}>
      <Typography variant='h4' gutterBottom>Institution EndPoint"/api/auth</Typography>
      <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent align="left"sx={{ flexgrow:1 }}>
                <Typography> http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/auth</Typography>
                <Typography> Description:Authenticate endpoint authenticate username and password</Typography>
                <Typography>This endpoint will check a username and password against those held in the databse</Typography>
                <Typography>Where authentication is successful it will returen a jwt encoded token including inforamtion such as token issue time(iat) token expiery time(exp) token issuer or HTTP Host(iss) and the account_id the user</Typography>
                <Typography> Methods Supported:POST</Typography>
                <Typography>authorization header required type of Basic Auth</Typography>
                <Typography>it should also include a usename and password parameter in authentication header</Typography>
                <Typography>Likely response codes: 200 ok array returned ,404 Not Found </Typography>
                <Typography>405 Method Not Allowed, 400 Bad Requst and 401 Unauthorized</Typography>
                <Typography>Response keys:
                 <ul><li>length</li>
                  <li>message</li>
                  <li>data<ul>
                    <li>token</li>
                  </ul></li></ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        <Grid container spacing={4} sx={{ paddingLeft:'0px', paddingTop:1 }}>
            <Grid item xs={12} sm={12}>
              <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                  <Typography gutterBottom variant="h5">Example</Typography>
                </CardContent>
                <CardMedia  image={AuthEndpointRequestExample} alt = "Auth Endpoint Request response example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
      </Container>
  )

}
export default Authenticate;