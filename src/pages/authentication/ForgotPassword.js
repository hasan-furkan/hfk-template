import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@material-ui/core';
import { useTheme } from '@mui/material';
import logo from '../../assets/images/logo/karanlıklogo9728.png';

function ForgotPassword() {
  const theme = useTheme();
  return (
    <Box sx={{ height: '100vh' }} display="flex" justifyContent="center" alignItems="center">
      <Card sx={{ maxWidth: 550, textAlign: 'center', width: 350, height: 350 }} theme={theme}>
        <img src={logo} width={250} alt="" />
        <CardContent>
          <Box component="form" noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              color="secondary"
              // {...register('email')}
              // error={!!errors.email}
              // helperText={errors?.email?.message}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ForgotPassword;
