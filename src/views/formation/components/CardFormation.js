import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardFormation() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Wordpress
        </Typography>
        <Typography variant="h5" component="div">
        {bull}
        </Typography >
        <Grid sx={12} container spacing={1} sx={{marginTop : 1}}>
            <Grid item xs={6}>
                <Typography variant="body2">
                    Theme : 
                </Typography>
            </Grid>
                
            <Grid item xs={6}>
                <Typography variant="body2">
                    Format
                </Typography>
            </Grid>
        </Grid>

        <Grid sx={12} container spacing={1} sx={{marginTop : 1}}>
            <Grid item xs={6}>
                <Typography variant="body2">
                    Web : 
                </Typography>
            </Grid>
                
            <Grid item xs={6}>
                <Typography variant="body2">
                    E-learning
                </Typography>
            </Grid>
        </Grid>

        <Grid sx={12} container spacing={1} sx={{marginTop : 1}}>
            <Grid item xs={6}>
                <Typography variant="body2">
                    tarif : 
                </Typography>
            </Grid>
                
            <Grid item xs={6}>
                <Typography variant="body2">
                    Derniere modification
                </Typography>
            </Grid>
        </Grid>

        <Grid sx={12} container spacing={1} sx={{marginTop : 1}}>
            <Grid item xs={6}>
                <Typography variant="body2">
                    1000 € 
                </Typography>
            </Grid>
                
            <Grid item xs={6}>
                <Typography variant="body2">
                    13.02.2023
                </Typography>
            </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="big">Afficher</Button>
      </CardActions>
    </Card>
  );
}