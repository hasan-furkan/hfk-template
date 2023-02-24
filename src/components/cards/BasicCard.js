import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {useTranslation} from "react-i18next";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    const {i18n, t} = useTranslation()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Card sx={{ minWidth: 200, minHeight: 150, borderRadius: 4, backgroundColor: theme.palette.mode === "dark" ? colors.black[300] : colors.light[300] }}>
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
