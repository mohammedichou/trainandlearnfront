import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

export default function texfieldandtext() {
  return (
    <Box>
        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='username' mb="5px">Réprésentant légal : </Typography>
        <CustomTextField id="username" variant="standard" fullWidth />
    </Box>
  );
}