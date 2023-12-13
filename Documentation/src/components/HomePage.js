import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import BaseEndpointRequest from './img/BaseEndpointRequest.JPG';
import Error from './img/Error.JPG';
import InvalidRequestMethod from './img/InvalidRequestMethod.JPG';
import AuthorizationRequired from './img/AuthorizationRequired.JPG'
import BadRequest from './img/BadRequest.JPG'

 /**
 * HomePage Class display credited Image, my name, ID and affiliation message along with a footer.
 * 
 * @author Noorullah Niamatullah w18002720
 */

function Homepage(){
  return (
    
      <Container  maxWidth="md" align="center" sx={{padding:1}}>
      <Typography variant='h3' gutterBottom>Base EndPoint"/api/"</Typography>
      <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent align="left"sx={{ flexgrow:1 }}>
                <Typography> http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/</Typography>
                <Typography> http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/base</Typography>
                <Typography> http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/</Typography>
                <Typography> Description:Retuns JSON formatted data containg basic information</Typography>
                <Typography> Methods Supported:GET</Typography>
                <Typography> Authentication required:False</Typography>
                <Typography>Parameters supported: None</Typography>
                <Typography>Likely response codes: 200 ok array returned ,404 Not Found or 405 Method Not Allowed</Typography>
                <Typography>Response keys:
                 <ul><li>length</li>
                  <li>message</li>
                  <li>data<ul>
                    <li>name</li>
                    <li>id</li>
                    <li>Confernce</li>
                    <li>link</li>
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
                <CardMedia  image={BaseEndpointRequest} alt = " Base endpoint request response example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
        <Typography variant='h4' gutterBottom>Error</Typography>
        <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                <Typography gutterBottom variant="h5" align="center"> A call to an EndPoint that does not exist </Typography>
                <Typography gutterBottom variant="h5" align="center"> Path:http://unn-w18002720.newnumyspace.co.uk/KF6012/coursework/api/XYZ</Typography>
                <Typography gutterBottom variant="h5" align="center"> Response:JSON formated data</Typography>
              </CardContent>
            </Card>
          </Grid>
        <Grid container spacing={4} sx={{ paddingLeft:'0px', paddingTop:1 }}>
            <Grid item xs={12} sm={12}>
              <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                  <Typography gutterBottom variant="h5">Example</Typography>
                </CardContent>
                <CardMedia  image={Error} alt = "Error response example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
        <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                <Typography gutterBottom variant="h5" align="center"> invalid request Method </Typography>
              </CardContent>
            </Card>
          </Grid>
        <Grid container spacing={4} sx={{ paddingLeft:'0px', paddingTop:1 }}>
            <Grid item xs={12} sm={12}>
              <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                  <Typography gutterBottom variant="h5">Example</Typography>
                </CardContent>
                <CardMedia  image={InvalidRequestMethod} alt = "Error response example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
        <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                <Typography gutterBottom variant="h5" align="center">Bad request</Typography>
              </CardContent>
            </Card>
          </Grid>
        <Grid container spacing={4} sx={{ paddingLeft:'0px', paddingTop:1 }}>
            <Grid item xs={12} sm={12}>
              <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                  <Typography gutterBottom variant="h5">Example</Typography>
                </CardContent>
                <CardMedia  image={BadRequest} alt = "Bad request  response example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
        <Grid item  xs={12} sm={12}>
            <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                <Typography gutterBottom variant="h5" align="center"> authorization required</Typography>
              </CardContent>
            </Card>
          </Grid>
        <Grid container spacing={4} sx={{ paddingLeft:'0px', paddingTop:1 }}>
            <Grid item xs={12} sm={12}>
              <Card sx={{ height: '100%' ,display:'flex' , flexDirection: 'column'}}>
              <CardContent sx={{ flexgrow:1 }}>
                  <Typography gutterBottom variant="h5">Example</Typography>
                </CardContent>
                <CardMedia  image={AuthorizationRequired} alt = "authorization required example" sx={{ paddingTop: '56.25%'}} />
              </Card>
            </Grid>
        </Grid>
      </Container>
  )

}
export default Homepage;