import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HtmlHead from '../../components/html-head/HtmlHead';
import { tokens } from '../../theme';
import emailVerification from '../../assets/images/auth/email-verification.jpg';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
  },
}));

export default function EmailVerification() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();

  const title = 'Login Page';
  const description = 'Login Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Card className={classes.root}>
        <CardContent>
          <CardMedia sx={{ height: 500, width: '100%' }} image={emailVerification} title="green iguana" />
          <Box>
            <Typography
              variant="h3"
              marginBottom={2}
              marginTop={2}
              color={theme.palette.mode === 'dark' ? colors.light[300] : colors.grey[900]}
              marginLeft={32}
            >
              Welcome to HFK Theme
            </Typography>
            <Typography variant="body1" color={colors.grey[600]}>
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
