import React from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import { Link, redirect, Route } from 'react-router-dom';
import axios from 'axios';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { ConstructionOutlined } from '@mui/icons-material';

//import { Login } from '@mui/icons-material';

const loggin = async () =>  {
    let email = document.getElementById('username')
    let pass = document.getElementById('password')
    console.log("email" + email.value);

    const response = await fetch(
 
        //'http://127.0.0.1:5500/api',
        'https://devtrainlearnapi.herokuapp.com/api/login',
        {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },body : JSON.stringify({
                "emailAdress":email.value,
                "password":"testtest"
            })
        }
    ).then((responseJson) => {
    // console.log(responseJson);
        console.log(responseJson.json)
        return redirect("/");
    
   })
   .catch((error) => {
     console.error(error);
   });
    //const test = await response.text();
    //console.log(test);
}

const AuthLogin = ({ title, subtitle, subtext }) => (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}
        
        <Stack>
            <Box>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='username' mb="5px">Email</Typography>
                <CustomTextField id="username" variant="outlined" fullWidth />
            </Box>
            <Box mt="25px">
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >mots de passe</Typography>
                <CustomTextField id="password" type="password" variant="outlined" fullWidth />
            </Box>
            <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="rester connecter"
                    />
                </FormGroup>
                <Typography
                    component={Link}
                    to="/"
                    fontWeight="500"
                    sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                    }}
                >
                    Mots de pass oubliez ?
                </Typography>
            </Stack>
        </Stack>
        <Box>
            <Button
                onClick={loggin}
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                to="/"
                type="submit"
            >
                Connexion   
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthLogin;
