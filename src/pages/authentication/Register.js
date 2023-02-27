import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  useTheme,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { validationRegisterSchema } from '../../utils/auth/formValidate';
import { errorToastMessage, succesToastMessage, warningToastMessage } from '../../components/toasts';
import HtmlHead from '../../components/html-head/HtmlHead';
import { tokens } from '../../theme';
import loginBg from '../../assets/images/auth/loginBg.jpg';

export default function Register() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationRegisterSchema),
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      if (data.password === data.confirmPassword) {
        setLoading(true);
        succesToastMessage('basarili');
      } else {
        warningToastMessage('password not match');
      }
    } else {
      errorToastMessage('basarisiz');
    }
  };

  const title = 'Register Page';
  const description = 'Register Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          md={8}
          sx={{
            backgroundImage: `url(${loginBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={12} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 12,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
            <hr />
            <Box>
              <Typography
                variant="h3"
                marginBottom={2}
                color={theme.palette.mode === 'dark' ? colors.light[300] : colors.grey[900]}
              >
                Welcome to HFK Theme
              </Typography>
              <Typography variant="body1" color={colors.grey[600]}>
                Please sign-up to your account and start the adventure
              </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{ mt: 2 }}
                fullWidth
                label="Full Name"
                autoFocus
                color="secondary"
                {...register('fullName')}
                error={!!errors.email}
                helperText={errors?.fullName?.message}
              />
              <TextField
                sx={{ mt: 2 }}
                fullWidth
                label="Email Address"
                autoComplete="email"
                color="secondary"
                {...register('email')}
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
              <FormControl variant="outlined" fullWidth color="secondary" sx={{ mt: 2 }}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  {...register('password')}
                  error={!!errors.password}
                  required
                />
                {!!errors.password && (
                  <FormHelperText error id="accountId-error">
                    {errors?.password?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl variant="outlined" fullWidth color="secondary" sx={{ mt: 2 }}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  {...register('confirmPassword')}
                  error={!!errors.confirmPassword}
                  required
                />
                {!!errors.password && (
                  <FormHelperText error id="accountId-error">
                    {errors?.confirmPassword?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormControlLabel control={<Checkbox color="secondary" {...register('term')} />} label="Term" />
                {!!errors.term && (
                  <FormHelperText error id="accountId-error">
                    {errors?.term?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <LoadingButton
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                color="secondary"
              >
                Submit
              </LoadingButton>
              <Box display="flex" justifyContent="center">
                <Link to="/login" variant="body2" style={{ color: colors.purple[400] }}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  You have account please login
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
