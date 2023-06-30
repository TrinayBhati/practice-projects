import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const HotelDetails = () => {
  const params = useParams();
  console.log(params);
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.slug}`)
      .then((res) => {
        console.log(res.data);
        setHotelInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.slug]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <Typography variant="h4">{hotelInfo.name} </Typography>
      <Grid container justifyContent={"center"}>
        {hotelInfo.images?.map((image) => (
          <Grid item lg={4}>
            <img
              src={image.img}
              alt="hotel"
              style={{
                width: "95%",
                borderRadius: "5px",
                boxShadow: "5px 5px 5px grey",
                margin: "10px",
                height: "200px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HotelDetails;
