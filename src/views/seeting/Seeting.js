import React from 'react';
import { Grid, Box, Card, Typography, CardContent } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import texfieldandtext from 'src/views/seeting/components/texfieldandtext'
import axios from 'axios';

// components


const Seeting = () => {

    const [data, setData] = React.useState([])
    const token = localStorage.getItem("token");
    console.log(token)
    axios
      .get("https://devtrainlearnapi.herokuapp.com/api")
      .then((res) => {
        console.log("success full" + res)
      })

  return (
    <PageContainer title="Seeting" description="this is Seeting">
    <div style={{margin: '1%'}}>
    <Card>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Société
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            <Grid item xs={2} sm={4} md={4} key={1}>
                <texfieldandtext></texfieldandtext>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={2}>
                <Box>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='username' mb="5px">Société : </Typography>
                    <CustomTextField id="username" variant="standard" fullWidth />
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={3}>
                <Box>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='username' mb="5px">Qualité : </Typography>
                    <CustomTextField id="username" variant="standard" fullWidth />
                </Box>
            </Grid>


            <Grid item xs={2} sm={4} md={4} key={4} >
                <Box>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='username' mb="5px">Téléphone : </Typography>
                    <CustomTextField id="username" variant="standard" fullWidth />
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={5}>
                <Box>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='username' mb="5px">E-mail :</Typography>
                    <CustomTextField id="username" variant="standard" fullWidth />
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={6}>
                <Box>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='username' mb="5px">URL : </Typography>
                    <CustomTextField id="username" variant="standard" fullWidth />
                </Box>
            </Grid>
        </Grid>
      </CardContent>

    </Card>
    </div>
    <div style={{margin: '1%'}}>
    <Card>
       <CardContent>
            <Typography variant='h3'  gutterBottom>
                Banque
            </Typography>
        </CardContent> 
    </Card>
    </div>
    </PageContainer>
  );
};

export default Seeting;
