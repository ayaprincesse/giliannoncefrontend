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

//import DefaultFooter from "examples/Footers/DefaultFooter";


/*import Carousel from 'react-material-ui-carousel'*/

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

/*import Card from "custom-components/Card";*/
import Slider from "react-slick";

import LeftArrow from "assets/images/left-arrow.png"
import RightArrow from "assets/images/right-arrow.png"
import newsletterimg from "assets/images/annonce1.jpeg";

/*import { Contrast } from '@mui/icons-material';*/

import Header1 from '../Header';
import Footer1 from '../Footer';
import footerRoutes from "footer.routes";

import { alignProperty } from '@mui/material/styles/cssUtils';

import axios from 'axios';
import * as urls from 'apis';
import {Link} from "react-router-dom";

const Home1 = function Home() {

  const [categories, setCategoriesList] = useState([]);
  const [annonces, setAnnoncesList] = useState([]);

  useEffect(async () => {
    //get categories
    await axios.get(urls.url_main+"/categorie")
    .then((response) => {
        setCategoriesList(response.data.list_categories);
    })
    .catch((error) => {
        console.log(error);
        alert("une erreur s'est produite lors du traitement de votre demande");
    })
    //get annonces
    await axios.get(urls.url_main+"/annonce")
    .then((response) => {
      console.log(response.data.list_annonces)
      setAnnoncesList(response.data.list_annonces);
    })
    .catch((error) => {
        console.log("error getannonces",error);
        alert("une erreur s'est produite lors du traitement de votre demande");
    })
  },[]);


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeroSection listCat={categories}/> 
    <TestCarouselCategories list={categories}/>
    <TestCarouselAnnonces list={annonces}/>
    <Newsletter/>
    <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    </ThemeProvider>
  );
}

export default Home1;


function HeroSection(props) {
 
 
  const [annoncesSelect, setAnnoncesSelect] = useState([]);
  const [motcle, setmotCle] = useState('');
  const [categorie, setCategorie] = useState('');
  const [annoncesTrouvees, setAnnoncesTrouvees] = useState([]);
  const myRef = useRef(null)
  
  useEffect(() => {
    var options2=[];
    props.listCat.map((element,i) => {
      options2.push({label:element.Nom,id:element.Id})
    });
    setAnnoncesSelect(options2);
    console.log("options2",options2);
  },[props.listCat])

  const options1 = [
    { label: 'Casablanca', id: 1 },
    { label: 'Rabat', id: 2 },
    { label: 'Marrakesh', id: 3 },
    { label: 'Tanger', id: 4 },
    { label: 'Agadir', id: 5 },
  ];
  
  const displayAnnoncesTrouves= () => {
    if(annoncesTrouvees.length>0){
      myRef.current.scrollIntoView();  
      return(
        <TestCarouselAnnoncesRecherche list={annoncesTrouvees}/>
      )
    }
  }
  return ( 
    <MKBox bgColor="white">
  <MKBox
  display="flex"
  alignItems="center"
  minHeight="70vh"
  sx={{
    //backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
    //backgroundSize: "cover",
    //backgroundPosition: "center",
    backgroundColor:'#FFFFFF'
  }} > 

  <Container> 
  <Stack direction="row" spacing={30} mt={6} mb={7}> 
    <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
        <MKTypography
          variant="h1"
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
        <MKTypography variant="body1" color="484848" opacity={0.8} pr={6} mr={6}>
          Vous cherchez des meubles, des appareils, un véhicule, ou meme un logement? Vous trouverez surement ce qu'il vous faut sur GILI.Com 
        </MKTypography>
        <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
          <TextField  id="outlined-basic" label="Recherche par mot clé" variant="outlined" 
          onChange={(e)=>setmotCle(e.target.value)}
          value={motcle}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options1}
            sx={{ width: 150 }}
            renderInput={(params) => <TextField {...params} label="Ville" />}
          /> 
          <Autocomplete disablePortal  id="combo-box-demo" options={annoncesSelect}
          value={categorie}
          onChange={(event, selectedOption) => {
            var selectedCat=selectedOption.label;
            axios.get(urls.url_main+"/annonce/categorie/"+selectedCat)
            .then((response) => {
              console.log(response.data.annonce.length)
                if(response.data.annonce.length>0){
                  setAnnoncesTrouvees(response.data.annonce);
                  setCategorie('');
                }
                else{
                  setCategorie('');
                  setAnnoncesTrouvees([]);
                  setTimeout(() => {
                    alert("aucune annonce trouvée")
                  }, "500")
                }
          });
          }
          }
           sx={{ width: 150 }}
             renderInput={(params) => <TextField {...params} label="Catégorie"/>} 
          />
         <MKButton color="black" onClick={ () => { 
          // Resultatresearch(this.TextField.keywordrecherche.value);
          axios.get(urls.url_main+"/annonce/motcle/"+motcle)
          .then((response) => {
            console.log(response.data.annonce.length)
              if(response.data.annonce.length>0){
                setAnnoncesTrouvees(response.data.annonce);
                setmotCle('');
              }
              else{       
                setAnnoncesTrouvees([]);
                setTimeout(() => {
                  alert("aucune annonce trouvée")
                  setmotCle('');
                }, "500")
              }
          })
          .catch((error) => {
              setmotCle('');
              console.log("error getannoncesbymotcle",error);
              alert("une erreur s'est produite lors du traitement de votre demande");
          })
          
           }}>
             RECHERCHER
          </MKButton>
       </Stack>
      </Grid>
      <Box
        component="img"
        sx={{
          //height: 233,
          //width: 350,
          minWidth: { lg : 300 },
          maxHeight: { lg: 500 },
        }}
        alt="The house from the offer."
        src={mainImg}
      />
    </Stack>
  </Container>
  </MKBox>
  <div ref={myRef}>
  {displayAnnoncesTrouves()}
  </div>
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
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };


function TestCarouselCategories(props)
  {/*console.log("props",props.list);*/
  const displaycats = (props) => {
    const cats =props.list;
    if (cats.length > 0)
    return (
         props.list.map((element,i) => 
          <Container>
          <Box
          component="img"
          sx={{
            height: 200,
            width: 400,
            minWidth: { lg : 150 },
            minHeight: { lg: 150 },
            maxWidth: { lg : 180 },
            maxHeight: { lg: 200 },
          }}
          src={urls.url_categories+element.image}
        /><Typography mb={4}>{element.Nom}</Typography>
            </Container>
          )
    );
    else { return (<h2>nothing yet</h2>)}
  }

  return (
    <MKBox bgColor="white" pb={20}>
        <Typography align="center" mb={4}>Les Catégories</Typography>
        <Container maxWidth="sm">
        <Slider {...settings}>
        {displaycats(props)}
        </Slider>
        </Container>
      </MKBox>
  );
}

function TestCarouselAnnonces(props){
  const displayannonces = (props) => {
    const ads =props.list;
    if (ads.length > 0)
    return (
         props.list.map((element,i) => {
         const link="/AnnonceDetails/"+element.Id;
         return (<Link to={link}>
          <Container>
          <Box
          component="img"
          sx={{
            height: 200,
            width: 400,
            minWidth: { lg : 150 },
            minHeight: { lg: 150 },
            maxWidth: { lg : 180 },
            maxHeight: { lg: 200 },
          }}
          //src={cat1}
          src={urls.url_annonces+element.imagesannonce[0].image}
        /><Typography mb={4}>{element.Titre}/{element.Ville}</Typography>
            </Container>
          </Link>);
         }
          )
    );
    else { return (<h2>nothing yet</h2>)}
  }
  return (
    <MKBox bgColor="white" pb={10}>
        <Typography align="center" mb={5}>Quelques annonces récentes</Typography>
        <Container maxWidth="sm">
        <Slider {...settings}>
            {displayannonces(props)}
       </Slider>
        </Container>
      </MKBox>
  );
}

function TestCarouselAnnoncesRecherche(props){
  const displayannonces = (props) => {
    const ads =props.list;
    if (ads.length > 0)
    return (
         props.list.map((element,i) => {
         const link="/AnnonceDetails/"+element.Id;
         return (<Link to={link}>
          <Container>
          <Box
          component="img"
          sx={{
            height: 200,
            width: 400,
            minWidth: { lg : 150 },
            minHeight: { lg: 150 },
            maxWidth: { lg : 180 },
            maxHeight: { lg: 200 },
          }}
          //src={cat1}
          src={urls.url_annonces+element.imagesannonce[0].image}
        /><Typography mb={4}>{element.Titre}/{element.Ville}</Typography>
            </Container>
            </Link>
         );}
          )
    );
    else { return (<h2></h2>)}
  }
  return (
    <MKBox bgColor="white" pb={10}>
        <Typography align="center" mb={5}>Annonces trouvées</Typography>
        <Container maxWidth="sm">
        <Slider {...settings}>
            {displayannonces(props)}
       </Slider>
        </Container>
      </MKBox>
  );
}

function Newsletter() {
  return (
    <MKBox component="section" bgColor="white">
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Recevez toutes les nouveautés par Mail !</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Inscrivez-vous pour notre newsletter
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Votre Email ..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton color="primary" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={newsletterimg} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}


