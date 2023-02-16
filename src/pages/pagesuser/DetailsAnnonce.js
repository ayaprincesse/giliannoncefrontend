import * as React from 'react';
import {Signaler} from "../../components/Signaler";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { createStyles, makeStyles } from '@mui/styles';
// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import PlaceIcon from '@mui/icons-material/Place';
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import PersonIcon from '@mui/icons-material/Person';


// Images

import cat3 from "assets/images/cat3.jpeg";
import cat4 from "assets/images/cat4.jpeg";
//import DefaultFooter from "examples/Footers/DefaultFooter";


/*import Carousel from 'react-material-ui-carousel'*/

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

/*import Card from "custom-components/Card";*/
import Slider from "react-slick";

import LeftArrow from "assets/images/left-arrow.png"
import RightArrow from "assets/images/right-arrow.png"


import Footer1 from '../../footer.routes';
import footerRoutes from "../../footer.routes";

//carousel

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import "../../styles/annoncedetails.css"
import { Block } from '@mui/icons-material';
import { TextareaAutosize } from '@mui/material';

import { useState,useEffect,useRef } from 'react'
import {useParams} from "react-router-dom"

const DetailsAnnonce = () => {
   
  const {annonceid} = useParams()

  useEffect(() => {
    console.log("annonce num:",annonceid);
  },[])
{/*
  function Typography(props) {
	  return (
	 	  <span>{props.leftIcon}</span>
	  );
	}
*/}
  return ( 
    <h1>DETAILS</h1>);
    {/* <ThemeProvider theme={theme}>
    <CssBaseline />
    {/*<HeroSection/> */}
    {/*<Box className='nom1'>
    <TestCarouselCategories/>
    
    <div className='nom2'> 
    <h2>Titre</h2>
    <h3>Prix </h3>
    <Typography leftIcon= {<PlaceIcon/>}/>Ville
    <br/>
    <button className='btn2'>Afficher numéro de télephone</button><br/>
    <p>Adresse électronique</p><br/>
    <div className="nom4">
    <p>Description</p>
    <br/>
    <textarea className="desc" name="description" id="description"/></div>
    </div> <Signaler className='nom2'/> </Box>
  */}
    {/*<Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    <Box sx={{ display: 'flex', flexDirection: 'row', }} >
    < PeopleAltIcon color='pink1' fontSize='large' sx={{ mr: 2, }}/> 
         <h2 className="serif" >Commentaires</h2></Box>
          <Box 
          sx={{
            marginTop: 10,
            display: 'block',
            backgroundColor: '#faeaee',
            width: '100%',
            height: '20%',
          }}>
          <Box sx={{margin: 5, alignItems:'center', }} ><PersonIcon  fontSize='large' color='blue1' /><p>Login</p></Box>
          </Box>
    </Box>
     
    <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    
    </ThemeProvider>
            */}
      
}
// <App2 />



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
    maxHeight="20vh"
    sx={{
      //backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
      //backgroundSize: "cover",
      //backgroundPosition: "center",
      backgroundColor:'#C7D8EB'
    
    }} > 
  
   {/* <Container className='container2'> 
    <Stack direction="row" spacing={30} mt={6} mb={7}> 
      <Grid container item xs={12} md={7} lg={6} flexDirection="row" display= "contents" height={30} >
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
          
          <Stack direction="row" spacing={4} mt={3} alignItems="center" marginLeft={10}>
            <TextField  id="outlined-basic"  label="--RECHERCHE PAR MOT CLE--" variant="outlined"  />
            <div id="vc"><Autocomplete className='cv'
              disablePortal
              id="combo-box-demo"
              style={{height: 30}}
              options={options1}
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} label="--Ville--" />}
            /> 
            <Autocomplete className='cv' disablePortal  id="combo-box-demo" options={options2}  sx={{ width: 150 }}
               renderInput={(params) => <TextField {...params} label="--Catégorie--" />} 
            /></div>
            <SearchRoundedIcon color="error" fontSize="large" />
           <MKButton color="black">RECHERCHER</MKButton>
         </Stack>
        </Grid>
     
      </Stack>
    </Container>*/}
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
          </Slider>
          </Container>
        </MKBox>
    );
  }

  export default DetailsAnnonce;