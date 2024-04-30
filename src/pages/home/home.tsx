import { Box, Grid } from "@mui/material";
import AnalaticCard from "../../component/home/analatic-card";

const Home = () => {
    return (
        <Box>
            <Grid sx={{

            }} container
                columns={{ xs: 4, sm: 8, md: 12 }}
                rowSpacing={{ xs: 1, sm: 2, md: 3 }}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {
                    [1, 2, 3, 4].map((item, idx) => (
                        <Grid item key={idx}><AnalaticCard /></Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Home;