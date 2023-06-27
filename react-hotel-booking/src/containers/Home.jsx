import HotelCard from "../components/HotelCard";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <HotelCard />
        </Grid>
        <Grid item xs={4}>
          <HotelCard />
        </Grid>
        <Grid item xs={4}>
          <HotelCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
