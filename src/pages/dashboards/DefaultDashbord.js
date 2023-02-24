import BasicCard from "../../components/cards/BasicCard";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

const DefaultDashbord = () => {
    return (
        <Box p={2}>
            <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
                <Grid item xs={3} marginRight={2}>
                    <BasicCard />
                </Grid>
                <Grid item xs={3} marginRight={2}>
                    <BasicCard />
                </Grid>
                <Grid item xs={5}>
                    <BasicCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default DefaultDashbord
