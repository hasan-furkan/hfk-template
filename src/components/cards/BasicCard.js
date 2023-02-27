import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from '../../theme';

export default function BasicCard() {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Card
      sx={{
        minWidth: 200,
        minHeight: 150,
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'dark' ? colors.black[300] : colors.light[300],
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {t('welcome')}
        </Typography>
        <Typography variant="body2">
          Card Content
          <br />
          Card Content 2
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Year of 2022</Button>
      </CardActions>
    </Card>
  );
}
