import { Container, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginClick = () => {
    console.log(email, password);
    if (email == "bhatiji780780@gmail.com" && password == "qwerty") {
      navigate("/home");
    } else {
      alert("Incorrect Password");
    }
  };
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
      <TextField
        id="outlined-password-input"
        label="Email"
        type="email"
        autoComplete="current-email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleLoginClick}>
        LOGIN
      </Button>
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
