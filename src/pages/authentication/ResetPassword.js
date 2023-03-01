import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, FormHelperText, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@mui/styles';
import { errorToastMessage, succesToastMessage } from '../../components/toasts';
import HtmlHead from '../../components/html-head/HtmlHead';
import { tokens } from '../../theme';
import FormPassword from '../../components/form/FormPassword';
import { validationResetPasswordSchema } from '../../utils/auth/formValidate';
import LanguageCountry from '../../components/languageCountry';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  },
}));

export default function ResetPassword() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationResetPasswordSchema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      if (data.newPassword === data.newConfirmPassword) {
        setLoading(true);
        succesToastMessage('basarili');
      } else {
        errorToastMessage('parolalar eslesmiyor');
      }
    } else {
      errorToastMessage('basarisiz');
    }
  };

  const title = 'Reset Password Page';
  const description = 'Reset Password Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Box
        sx={{
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 'auto',
        }}
      >
        <Card className={classes.root}>
          <CardContent>
            <LanguageCountry />
            <Box>
              <Typography
                variant="h3"
                marginBottom={2}
                marginLeft={6}
                color={theme.palette.mode === 'dark' ? colors.light[300] : colors.grey[900]}
              >
                Welcome to HFK Theme
              </Typography>
              <Typography variant="body1" color={colors.grey[600]} marginLeft={3}>
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Box>
              <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                <FormPassword name="oldPassword" control={control} label="Old Password" />
                {!!errors.oldPassword && (
                  <FormHelperText error id="accountId-error">
                    {errors?.oldPassword?.message}
                  </FormHelperText>
                )}
                <FormPassword name="newPassword" control={control} label="New Password" />
                {!!errors.newPassword && (
                  <FormHelperText error id="accountId-error">
                    {errors?.newPassword?.message}
                  </FormHelperText>
                )}
                <FormPassword name="newConfirmPassword" control={control} label="New Confirm Password" />
                {!!errors.newConfirmPassword && (
                  <FormHelperText error id="accountId-error">
                    {errors?.newConfirmPassword?.message}
                  </FormHelperText>
                )}
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
