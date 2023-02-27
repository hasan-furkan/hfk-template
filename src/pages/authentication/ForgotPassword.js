import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { validationLoginSchema } from '../../utils/auth/formValidate';
import { errorToastMessage, succesToastMessage } from '../../components/toasts';
import HtmlHead from '../../components/html-head/HtmlHead';
import { tokens } from '../../theme';
import { setUser } from '../../redux/components/auth';

export default function ForgotPassword() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      setLoading(true);
      succesToastMessage('basarili');
      dispatch(
        setUser({
          email: data.email,
        }),
      );
      localStorage.setItem('user', JSON.stringify(data.email));
      navigate('/dashboard');
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
        <Box p={4}>
          <Card>
            <Box>
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
            <Box>
              <Typography
                variant="h3"
                marginBottom={2}
                color={theme.palette.mode === 'dark' ? colors.light[300] : colors.grey[900]}
                sx={{ mt: 2 }}
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
                <Link to="/register" variant="body2" style={{ color: colors.purple[400] }}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Don't have an account? Sign Up
                </Link>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
}
