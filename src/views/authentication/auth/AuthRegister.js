import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
//import CustomSelect from '../../../components/forms/theme-elements/customselect';
import { Stack } from '@mui/system';

const AuthRegister = ({ title, subtitle, subtext }) => (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
            <Stack mb={4}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                <CustomTextField id="name" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                <CustomTextField id="email" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <CustomTextField id="password" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px" mt="25px">Rue </Typography>
                <CustomTextField id="street" variant="outlined"  />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px" mt="25px">Gender </Typography>
                    
                <select>
                    <menuItem value={1}>Homme</menuItem>
                    <menuItem value={2}>Femme</menuItem>
                </select>


                    
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} to="/auth/login">
                inscription
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthRegister;
