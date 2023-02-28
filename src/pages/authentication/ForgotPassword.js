import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { validationForgotPassSchema } from '../../utils/auth/formValidate';
import { errorToastMessage, succesToastMessage } from '../../components/toasts';
import HtmlHead from '../../components/html-head/HtmlHead';
import { tokens } from '../../theme';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, // Card width
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForgotPassSchema),
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      setLoading(true);
      succesToastMessage('basarili');
      navigate('/login');
    } else {
      errorToastMessage('basarisiz');
    }
  };

  const title = 'Forgot Password Page';
  const description = 'Forgot Password Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card className={classes.root}>
          <CardContent>
            <Box marginLeft={20} alignItems="center" justifyContent="center">
              <ReactCountryFlag
                countryCode="us"
                style={{
                  marginTop: '8px',
                  fontSize: '2em',
                  cursor: 'pointer',
                  marginRight: '2px',
                }}
                onClick={() => {
                  i18n.changeLanguage('en');
                }}
              />
              <ReactCountryFlag
                countryCode="tr"
                style={{
                  marginTop: '8px',
                  fontSize: '2em',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  i18n.changeLanguage('tr');
                }}
              />
            </Box>
            <Box marginLeft={2}>
              <Typography
                variant="h3"
                marginBottom={2}
                color={theme.palette.mode === 'dark' ? colors.light[300] : colors.grey[900]}
                sx={{ mt: 2, ml: 3 }}
              >
                Welcome to HFK Theme
              </Typography>
              <Typography variant="body1" color={colors.grey[600]}>
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                autoFocus
                color="secondary"
                {...register('email')}
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
              <LoadingButton
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                Submit
              </LoadingButton>
              <Box display="flex" justifyContent="center">
                <Link to="/login" variant="body2" style={{ color: colors.purple[400] }}>
                  Go back to the login
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
