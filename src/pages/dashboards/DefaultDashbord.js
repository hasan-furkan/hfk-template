import BasicCard from "../../components/cards/BasicCard";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

const DefaultDashbord = () => {
    return (
        <Box p={2}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} marginRight={2}>
                    <BasicCard>1</BasicCard>
                </Grid>
                <Grid item xs={3} marginRight={2}>
                    <BasicCard>2</BasicCard>
                </Grid>
                <Grid item xs={5}>
                    <BasicCard>3</BasicCard>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DefaultDashbord
