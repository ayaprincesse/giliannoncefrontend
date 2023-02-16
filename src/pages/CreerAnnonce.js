/*import * as React from 'react';
import { useState,useEffect,useRef } from 'react'
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import MKBox from "components/MKBox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "assets/images/left-arrow.png";
import RightArrow from "assets/images/right-arrow.png";
import Footer1 from '../Footer';
import footerRoutes from "footer.routes";
import axios from 'axios';
import * as urls from 'apis';*/
import * as React from 'react';
import { useState,useEffect,useRef } from 'react'
// @mui material components
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from "../components/Navbar";
import MKBox from "components/MKBox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Footer1 from '../Footer';
import footerRoutes from "footer.routes";
import axios from 'axios';
import * as urls from 'apis';
import PlaceIcon from '@mui/icons-material/Place';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function CreerAnnonce() {

  const [categories, setCategoriesList] = useState([]);
 
  useEffect(async () => {
    //get categories
    await axios.get(urls.url_main+"/categorie")
    .then((response) => {
        setCategoriesList(response.data.list_categories);
    })
    .catch((error) => {
        console.log(error);
        alert("une erreur s'est produite lors du traitement de votre demande 1");
    })
  },[]);


  return (

    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Typography >INFORMATIONS GENERALES</Typography>
    <HeroSection2 leftIcon={<PlaceIcon color='pink1'/>} listCat={categories}/>
    <Typography>DESCRIPTION DU BIEN</Typography>
    <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="annoncetitre"
                  name="annoncetitre"
                  required
                  fullWidth
                  id="annoncetitre"
                  label="Titre"
                  autoFocus
                />
              </Grid>
  <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="annonceprix"
                  name="annonceprix"
                  required
                  fullWidth
                  id="annonceprix"
                  label="Prix"
                  autoFocus
                />
  </Grid>
  <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="annoncedesc"
                  name="annoncedesc"
                  required
                  fullWidth
                  id="annoncedesc"
                  label="Description"
                  autoFocus
                />
  </Grid>
  <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input
        
          type="file"
          hidden
        />
      </Button>
      <br/>
  <Button variant="contained">Publier</Button>
    <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    </ThemeProvider>
  );

}
export default CreerAnnonce



function HeroSection2(props){
  const [categorie, setCategorie] = useState('');
  const [annoncesSelect, setAnnoncesSelect] = useState([]);

  useEffect(()=> {
    var options2 = [];
    props.listCat.map((element,i)=>{
      options2.push({label:element.Nom,id:element.Id})
    });
    setAnnoncesSelect(options2);
    console.log("options2",options2);
  },[props.listCat]);


  const options1 = [
    { label: 'Casablanca', id: 1 },
    { label: 'Rabat', id: 2 },
    { label: 'Marrakesh', id: 3 },
    { label: 'Tanger', id: 4 },
    { label: 'Agadir', id: 5 },
  ];

  return(
    <MKBox>
      <span className="icon-button">{props.leftIcon}</span>
    <Autocomplete options={annoncesSelect} value={categorie} 
    renderInput={(params) => <TextField {...params} label="Categorie" />} />

    <PlaceIcon color='pink1'/><Autocomplete 
            leftIcon={<PlaceIcon/>}
            disablePortal
            id="combo-box-demo"
            options={options1}
            sx={{ width: 150 }}
            renderInput={(params) => <TextField {...params} label="Ville" />}
          /> </MKBox>
  )
}


