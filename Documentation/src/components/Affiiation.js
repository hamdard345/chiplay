import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import AffiliationEndpointRequest from './img/AffiliationEndpointRequest.JPG';
 /**
 * Instiitution endpoint return information about all affililation of a paper
 * 
 * @author Noorullah Niamatullah w18002720
 */

function Affiliation(){
  return (
    
      <Container  maxWidth="md" align="center">
      <Typography variant='h4' gutterBottom>Affiliation EndPoint"/api/affiliation?author_id"</Typography>
      <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent align="left"sx={{ flexgrow:1 }}>
                <Typography> http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/affiliation?author_id=64282</Typography>
                <Typography> Description:affiliation endpoint return information about all affililation of a paper</Typography>
                <Typography> Methods Supported:GET</Typography>
                <Typography> Authentication required:False</Typography>
                <Typography>Parameters required:author_id</Typography>
                <Typography>Likely response codes: 200 ok array returned ,404 Not Found </Typography>
                <Typography>405 Method Not Allowed, 400 Bad Requst </Typography>
                <Typography>Response keys:
                 <ul><li>length</li>
                  <li>message</li>
                  <li>data<ul>
                    <li>paper_id</li>
                    <li>author_id</li>
                    <li>first_name</li>
                    <li>last_name</li>
                    <li>country</li>
                    <li>state</li>
                    <li>city</li>
                    <li>institution</li>
                    <li>department</li>
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
                <CardMedia  image={AffiliationEndpointRequest} alt = "Affiliation Endpoint Request response example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
      </Container>
  )

}
export default Affiliation;