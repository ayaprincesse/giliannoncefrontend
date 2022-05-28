import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer1 from '../Footer';
import footerRoutes from "footer.routes";
import MKBox from "components/MKBox";
import theme from "assets/theme";

import axios from 'axios';
import * as urls from 'apis';
import { useState,useEffect,useRef} from 'react'
import {useParams} from "react-router-dom"


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get('firstName'),
      lastname: data.get('lastName'),
      email: data.get('email'),
      tel: data.get('tel'),
      login: data.get('login'),
      password: data.get('password'),
    });
  // POST request using axios with error handling
  const user = {  "Nom":data.get('firstName'),
  "Prenom":data.get('lastName'),
  "Email": data.get('email'),
 "Tel": data.get('tel'),
  "Login": data.get('login'),
  "Mdp": data.get('password') };
  axios.post(urls.url_main+"/utilisateurs", user)
      .then((response) => {
          console.log("useradded",response.data.user_added)
          alert("Utilisateur ajouté avec succes !")
          window.location.reload(false);
        })
      .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
          alert("ERREUR DE CREATION DU USER!")
      });
  };

  return (
    <ThemeProvider theme={theme}>
         <CssBaseline />
      <Container component="main" maxWidth="xs">
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="tel"
                  label="tel"
                  name="tel"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="login"
                  label="login"
                  name="login"
                  autoComplete="login"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Box textAlign='center'>
            <Button
              type="submit"
              fullWidth={false}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn2" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    </ThemeProvider>
  );
}