import { Container, Grid } from "@mui/material";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const userName = result.user.displayName;
        navigate("/home", {
          state: {
            userName,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container sx={{ mt: 10 }}>
      <Grid justifyContent="center" container sx={{ height: "100vh" }}>
        <Grid item>
          <button
            onClick={onLoginClick}
            style={{
              height: "40px",
              backgroundColor: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "25px",
              padding: "5px",
            }}
          >
            Login with Google
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
