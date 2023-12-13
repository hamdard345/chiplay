import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import AuthorSearchEndpointRequest from './img/AuthorSearchEndpointRequest.JPG';
 /**
 * AuthorSearh endpoint return author information for a specfic author
 * 
 * @author Noorullah Niamatullah w18002720
 */

function AuthorSearch(){
  return (
    
      <Container  maxWidth="md" align="center" sx={{padding:1}}>
      <Typography variant='h4' gutterBottom>AuthorSearch EndPoint"/api/authorsearch?author_id"</Typography>
      <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent align="left"sx={{ flexgrow:1 }}>
                <Typography> http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/authorsearch?author_id=64282</Typography>
                <Typography> Description:AuthorSearh endpoint return author information for a specfic author</Typography>
                <Typography> Methods Supported:GET</Typography>
                <Typography> Authentication required:False</Typography>
                <Typography>Parameters required:paper_id</Typography>
                <Typography>Likely response codes: 200 ok array returned ,404 Not Found </Typography>
                <Typography>405 Method Not Allowed, 400 Bad Requst </Typography>
                <Typography>Response keys:
                 <ul><li>length</li>
                  <li>message</li>
                  <li>data<ul>
                    <li>author_id</li>
                    <li>first_name</li>
                    <li>middle_initial</li>
                    <li>last_name</li>
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
                <CardMedia  image={AuthorSearchEndpointRequest} alt = "AuthorSearc hEndpoint Requestresponse example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
      </Container>
  )

}
export default AuthorSearch;