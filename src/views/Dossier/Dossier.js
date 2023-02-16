import React from 'react';
import { Grid, Box, Typography, Button} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Add from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import Paper from '@material-ui/core/Paper';
import Customlist from './components/Customlist';
import Customtab from './components/Customtab';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop : 5,
    marginRight: 5,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  listmenu: {
    marginLeft : 5,
  }, 

  container : {
    marginTop : 25
  },

  stylemenu : {
    marginRight : 10
  }
}));



const Dossier = () => {

  const classes = useStyles();
  
  return (
    <PageContainer title="Formation" description="this is Formation">
      <Box>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography variant="h1" fontWeight={600} component="label" htmlFor='username' mb="5px">Dossier </Typography>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs>
          <Button variant="outlined" startIcon={<Add />}>
          Ajouter un dossier
          </Button>
        </Grid>
      </Grid>
      <Grid container  spacing = {1}  >
      </Grid>
      </Box>
      <Box>
        <Customtab></Customtab>
      </Box>
    </PageContainer>
  );
};

export default Dossier;
