import React from 'react';
import { Grid, Box, Typography, Button} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Add from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Centre = () => {

    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        let company = document.getElementById('company')
        //let pass = document.getElementById('password')
        console.log(company.value)
        setOpen(false);
    };
  

    const showAddmodal = async () =>  {
        console.log("ttest")
    }

  return (
    <PageContainer title="Formation" description="this is Formation">
    <Box>
    <Grid container spacing={3}>
      <Grid item xs>
        <Typography variant="h1" fontWeight={600} component="label" htmlFor='username' mb="5px">Centre </Typography>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs>
        
        <Button onClick={handleClickOpen} variant="outlined" startIcon={<Add />}>
        Ajouter un centre
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un centre</DialogTitle>
        <DialogContent>
          <DialogContentText>
            rentrer les données de votre centre 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="company"
            label="Nom de la compagnie"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Adresse"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="siret"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="rcs"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="code naf"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="capital"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="contact email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="contact phone"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </Grid>
    <Grid container  spacing = {1}  >
    </Grid>
    </Box>
    <Box style = {{marginTop : "25px"}}>
    </Box>
  </PageContainer>
  );
};

export default Centre;
