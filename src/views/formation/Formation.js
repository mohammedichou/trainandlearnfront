import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CardFormation from 'src/views/formation/components/CardFormation'
import Menufilter from './components/Menufilter';


const Formation = () => {
  return (
    <PageContainer title="Formation" description="this is Formation">
      <Box>
        <Menufilter></Menufilter>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(4)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <CardFormation></CardFormation>
                </Grid>
            ))}
        </Grid>
        
      </Box>
    </PageContainer>
  );
};

export default Formation;
