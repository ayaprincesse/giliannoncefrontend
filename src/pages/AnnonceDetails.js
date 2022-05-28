import * as React from 'react';
import { useState,useEffect,useRef } from 'react'
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

///import { createStyles, makeStyles } from '@mui/styles';
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
// Images
import mainImg from "assets/images/lemon.jpeg";
import cat1 from "assets/images/cat1.jpeg";
import cat2 from "assets/images/cat2.jpeg";
import cat3 from "assets/images/cat3.jpeg";
import cat4 from "assets/images/cat4.jpeg";
//import DefaultFooter from "examples/Footers/DefaultFooter";


/*import Carousel from 'react-material-ui-carousel'*/

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

/*import Card from "custom-components/Card";*/
import Slider from "react-slick";

import LeftArrow from "assets/images/left-arrow.png"
import RightArrow from "assets/images/right-arrow.png"
import newsletterimg from "assets/images/annonce1.jpeg";

import annonce0 from "assets/images/annonce.jpeg";
import annonce1 from "assets/images/annonce1.jpeg";
import annonce2 from "assets/images/annonce2.jpeg";
import annonce3 from "assets/images/annonce3.jpeg";
import annonce4 from "assets/images/annonce4.jpeg";
/*import { Contrast } from '@mui/icons-material';*/

import Header1 from '../Header';
import Footer1 from '../Footer';
import footerRoutes from "footer.routes";

import {useParams} from "react-router-dom"

//carousel

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../styles/annoncedetails.css"
const AnnonceDetails = () => {
  const {annonceid} = useParams()

  useEffect(() => {
    console.log("annonce num:",annonceid);
  },[])
    return (
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeroSection/> 
    <div className='nom1'>
    <TestCarouselCategories/>
    <div className='nom2'> 
    <p>Prix</p>
    <p>Ville</p>
    <button className='btn2'>Afficher numéro de télephone</button><br/>
    <p>Adresse électronique</p><br/>
    <div className="nom4">
    <label htmlFor="description">Description</label>
          <input className="desc" type ="text" name="description" id="description"/></div>
    </div></div>
    <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    </ThemeProvider>
    );
}
// <App2 />
export default AnnonceDetails;


function HeroSection() {

    const options1 = [
      { label: 'Casablanca', id: 1 },
      { label: 'Rabat', id: 2 },
      { label: 'Marrakesh', id: 3 },
      { label: 'Tanger', id: 4 },
      { label: 'Agadir', id: 5 },
    ];
    const options2 = [
      { label: 'Meubles', id: 1 },
      { label: 'Véhicules', id: 2 },
      { label: 'Appareils électroniques', id: 3 },
      { label: 'Appareils élecromenagers', id: 4 },
      { label: 'Logement', id: 5 },
      { label: 'Animaux', id: 6 },
    ];
    return ( 
    <MKBox
    display="flex"
    alignItems="center"
    maxHeight="30vh"
    sx={{
      //backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
      //backgroundSize: "cover",
      //backgroundPosition: "center",
      backgroundColor:'#C7D8EB'
    }} > 
  
    <Container> 
    <Stack direction="row" spacing={30} mt={6} mb={7}> 
      <Grid container item xs={12} md={7} lg={6} flexDirection="row" justifyContent="center">
          <MKTypography
            variant="h3"
            color="black"
            mb={3}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Trouver l'annonce qui vous convient !
          </MKTypography>
          
          <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
            <TextField id="outlined-basic" label="Recherche par mot clé" variant="outlined" />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options1}
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} label="Ville" />}
            /> 
            <Autocomplete disablePortal  id="combo-box-demo" options={options2}  sx={{ width: 150 }}
               renderInput={(params) => <TextField {...params} label="Catégorie" />} 
            />
           <MKButton color="black">RECHERCHER</MKButton>
         </Stack>
        </Grid>
        {/*<Box
          component="img"
          sx={{
            //height: 233,
            //width: 350,
            minWidth: { lg : 300 },
            maxHeight: { lg: 500 },
          }}
          alt="The house from the offer."
          src={mainImg}
        />*/}
      </Stack>
    </Container>
    </MKBox>
    );
  }


  
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );
  
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
      };
  
  function TestCarouselCategories(){
    return (
      <MKBox bgColor="white" pb={20} maxHeight="450px" maxWidth="400px" mt={5}>
          <Container maxWidth="sm">
          <Slider {...settings}>
            <Container>
            <Box
            component="img"
            sx={{
              height: 400,
              width: 300,
              minWidth: { lg : 150 },
              minHeight: { lg: 150 },
              maxWidth: { lg : 300 },
              maxHeight: { lg: 600 },
            }}
            src={cat1}
          />
          </Container>
          <Container>
            <Box
            component="img"
            sx={{
                height: 400,
                width: 300,
                minWidth: { lg : 150 },
                minHeight: { lg: 150 },
                maxWidth: { lg : 300 },
                maxHeight: { lg: 600 },
            }}
            src={cat2}
          />
          </Container>
          <Container>
            <Box
            component="img"
            sx={{
                height: 400,
                width: 300,
                minWidth: { lg : 150 },
                minHeight: { lg: 150 },
                maxWidth: { lg : 300 },
                maxHeight: { lg: 600 },
            }}
            src={cat3}
          />
          </Container>
          <Container>
           <Box
            component="img"
            sx={{
                height: 400,
                width: 300,
                minWidth: { lg : 150 },
                minHeight: { lg: 150 },
                maxWidth: { lg : 300 },
                maxHeight: { lg: 600 },
            }}
            src={cat4}
          />
          </Container>
          <Container>
              <Box
            component="img"
            sx={{
                height: 400,
                width: 300,
                minWidth: { lg : 150 },
                minHeight: { lg: 150 },
                maxWidth: { lg : 300 },
                maxHeight: { lg: 600 },
            }}
            src={cat4}
          />
          </Container>
             
          
          </Slider>
          </Container>
        </MKBox>
    );
  }
