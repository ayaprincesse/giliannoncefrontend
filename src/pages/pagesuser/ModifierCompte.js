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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer1 from '../../Footer';
import footerRoutes from "footer.routes";
import MKBox from "components/MKBox";
import theme from "assets/theme";
import Navbar2 from "../../components/Navbar2";
//import "../styles/ModifierCompte.css";
import axios from 'axios';
import * as urls from 'apis';

import { useState,useEffect,useRef } from 'react'

function ModifierCompte() {

  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Email, setEmail] = useState('');
  const [Tel, setTel] = useState('');
  const [Login, setLogin] = useState('');
  const [Password, setPassword] = useState('');
  const myRef = useRef(null)

  const [userinfos, setUserInfos] = useState([]);
  useEffect(async () => {
    //get infos
    console.log(urls.url_main+"/utilisateurs/"+localStorage.getItem('userID'));
    await axios.get(urls.url_main+"/utilisateurs/"+localStorage.getItem('userID'),{
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
    .then((response) => {
      setUserInfos(response.data.utilisateur);
      setFirstname(response.data.utilisateur.Prenom);
      setLastname(response.data.utilisateur.Nom);
      setEmail(response.data.utilisateur.Email);
      setTel(response.data.utilisateur.Tel)
      setLogin(response.data.utilisateur.Login);
      console.log(userinfos);
    })
    .catch((error) => {
        console.log(error);
        alert("une erreur s'est produite lors du traitement de votre demande");
    })
    
  },[]);


  const handleSubmit = (event) => {
    event.preventDefault();
    
  // POST request using axios with error handling
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
  console.log("user",user);
  axios.patch(urls.url_main+"/utilisateurs/"+localStorage.getItem('userID'),user,
  {
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  })
      .then((response) => {
          console.log("userupdated",response.data.user_updated)
          alert("Utilisateur modifié avec succes !")
          window.location.reload(false);
        })
      .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
          alert("ERREUR DE Modification DU USER!")
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
            < PersonOutlineOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Mon Compte
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
                  onChange={(e)=>setFirstname(e.target.value)}
                  value={Firstname}
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
                  onChange={(e)=>setLastname(e.target.value)}
                  value={Lastname}
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
                  onChange={(e)=>setEmail(e.target.value)}
                  value={Email}
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
                  onChange={(e)=>setTel(e.target.value)}
                  value={Tel}
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
                  onChange={(e)=>setLogin(e.target.value)}
                  value={Login}
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
                  onChange={(e)=>setPassword(e.target.value)}
                  value={Password}
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
              Modifier Mes informations
            </Button>
            </Box>
          </Box>
        </Box>

      </Container>
      <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    </ThemeProvider>
  );
}

export default ModifierCompte