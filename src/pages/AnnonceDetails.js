import * as React from 'react';
import Signaler from "../components/Signaler";
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
import Navbar from '../components/Navbar'
import MKBox from "components/MKBox";
import PlaceIcon from '@mui/icons-material/Place';
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import PersonIcon from '@mui/icons-material/Person';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// Images

import cat3 from "assets/images/roberouge.jpeg";
import cat4 from "assets/images/roberouge2.jpeg";
//import DefaultFooter from "examples/Footers/DefaultFooter";


/*import Carousel from 'react-material-ui-carousel'*/

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

/*import Card from "custom-components/Card";*/
import Slider from "react-slick";

import LeftArrow from "assets/images/left-arrow.png"
import RightArrow from "assets/images/right-arrow.png"

import AccountCircle from '@mui/icons-material/AccountCircle';

import Footer1 from '../Footer';
import footerRoutes from "footer.routes";

//carousel

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../styles/annoncedetails.css"
import { Block } from '@mui/icons-material';
import { TextareaAutosize } from '@mui/material';


import { useState,useEffect,useRef } from 'react'
import {useParams} from "react-router-dom"

import ReactDOM from "react-dom";

import { Divider, Avatar, Paper } from "@mui/material";
import axios from 'axios';
import * as urls from 'apis';


const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const AnnonceDetails = () => {
  const {annonceid} = useParams()

  const [Num ,setNum] = useState('');
  const [propId ,setpropId] = useState('');
  const [propdetails , setPropdetails] = useState([]);
  const [annoncesdetails, setAnnoncesDetailsList] = useState([]);
  const [comments , setcommentaires] = useState([]);

  useEffect(async () => {
    console.log("annonce num:",2);
    //get details
    await axios.get(urls.url_main+"/annonce/"+annonceid)
    .then((response) => {
      console.log(response.data.annonce);
      setAnnoncesDetailsList(response.data.annonce);
      setpropId(annoncesdetails.ProprietaireId);
      console.log("propId",propId);
      console.log("details",annoncesdetails);
    })
    .catch((error) => {
        console.log(error);
        alert("une erreur s'est produite lors du traitement de votre demande");
    })
    //get comments
    await axios.get(urls.url_main+"/commentaires/"+annonceid)
    .then((response) => {
      setcommentaires(response.data.listcomments);
      console.log("commentaires",response.data.listcomments);
    })
    .catch((error) => {
        console.log(error);
        alert("une erreur s'est produite lors du traitement de votre demande");
    })
    //get details du prop
    {/*
    await axios.get(urls.url_main+"/utilisateurs/tel/"+propId)
    .then((response) => {
      setPropdetails(response.data.utilisateur);
      console.log("prorietaire",propdetails);
    })
    .catch((error) => {
      console.log("requete",urls.url_main+"/utilisateurs/tel/"+propId)
        console.log(error);
        alert("une erreur s'est produite lors du traitement de votre demande");
    })*/}
  },[]);

  
  const afficher = () => {
    if(localStorage.getItem('token')=="" || localStorage.getItem('userID')==""){
		  alert("Vous devez être connecter pour pouvoir consulter le numéro!");
		}
    else {
      alert("Afin de contacter le propriétaire de cette annonce si intéréssé :\n voici son numéro: "+annoncesdetails.utilisateurs.Tel);
    }    
    }

  function Typography(props) {
	  return (
		  <span>{props.leftIcon}</span>
	  );
	}

  const [showNewComment ,setShowNewComment] = useState(false);
  const showCommentPopup = () => {
    if(localStorage.getItem('token')=="" || localStorage.getItem('userID')==""){
		  alert("Vous devez être connecter pour ajouter un commentaire!");
		}
    else {
      console.log(localStorage.getItem('token'));
      console.log(localStorage.getItem('userID'));
      setShowNewComment(true);
      //alert("Afin de contacter le propriétaire de cette annonce si intéréssé :\n voici son numéro: "+annoncesdetails.utilisateurs.Tel);
    }    
    }

    const handleSubmitComment = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log("comment",data.get('Commentaire'));
      //login
      await axios.post(urls.url_main+"/commentaires",
      {
        Contenu:data.get('Commentaire').toString(),
        UtilisateurId:localStorage.getItem('userID'),
        AnnonceId:annoncesdetails.Id
      },
      {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
      .then((response) => {
          if(response.data.success==false){
            alert(response.data.message);
          }
          else{
            alert("Commentaire ajouté");
            setShowNewComment(false);
            window.location.reload(false);
          }
       
      })
      .catch((error) => {
          console.log("login",error);
          alert("une erreur s'est produite lors du traitement de votre demande");
      })
    };
  return (
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <Signaler idannonce={annoncesdetails?.Id}/>

    <HeroSection/> 
    <Box className='nom1'>
    <TestCarouselImages listimages={annoncesdetails?.imagesannonce}/>
    <div className='nom2'> 
    <h2>Titre : {annoncesdetails.Titre}</h2> 
    <h3>Ville : {annoncesdetails.Ville} </h3>
    <h3>Catégorie : {annoncesdetails.CategorieNom}</h3>
    <h3>Date De publication : {annoncesdetails.DatePublication}</h3>
    <div className="nom4">
      <Stack direction="row" spacing={2}>
    <h3>Description</h3>
    <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={10} 
          value={annoncesdetails.Descriptionn}
        />
       
   </Stack>
   <h6>Nb de fois signalée : {annoncesdetails?._count?.signalannonce}</h6>
        <br/>
        <br/>
    <button className='btn2' onClick={afficher}>Afficher numéro de télephone</button>
    {/*<TextField  id="outlined" label="Recherche par mot clé" variant="outlined" 
          value={Num}
          />
  */}
    <br/>
    </div>
    </div> 
    <br/>
   </Box>
    <Box 
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
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'right',
          }}
        >
       
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={() => { showCommentPopup(); }}
            >
              Ajouter un commentaire
            </Button>
          
        </Box>
        {showNewComment &&
        <Box component="form" onSubmit={handleSubmitComment} noValidate
        sx={{
          mt: 1 ,width:'60%',
          display: 'flex',
          //flexDirection: 'column',
          alignItems: 'center',
        }}
        >
            <TextField
              margin="normal"
              fullWidth
              id="Commentaire"
              label="Nouveau Commentaire"
              name="Commentaire"
              autoComplete="Commentaire"
              autoFocus
            />
               <Button
              type="submit"
              //fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1,ml:3 }}
            >
              Valider
            </Button>
            </Box>
            }
          <Box 
          sx={{
            marginTop: 1,
            display: 'block',
            backgroundColor: 'grey',
            width: '100%',
            height: '20%',
          }}>
            
           <Comments listcomments={annoncesdetails?.commentaires}/>
          </Box>
    </Box>

    <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    
    </ThemeProvider>
    );
}

function Comments(props)
{
  {/*
  const displaycomments = (props) => {
    const comments =props.listcommentaires;
    console.log("waaaaaaaaaa",comments);
    if (comments.length > 0)
    {
     return (
         comments.map((element,i) => {
          <div style={{ padding: 14 }} className="App"> 
          <Paper style={{ padding: "40px 20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
               {/* <Avatar alt="Remy Sharp" src=urls.url_users+element.utilisateurs.image  />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>{/*element.utilisateurs.Nom + " " +comments.utilisateurs.Prenom</h4>
                <p style={{ textAlign: "left" }}>
                  {/*element.Contenu
                </p>
              </Grid>
            </Grid>
          </Paper>
        </div> 
         }));
    }
    else {return(console.log("sssssss"));}
  }
  
  return(displaycomments(props) );
*/}
const showcoments = () => {
      if (props?.listcomments!=undefined && props?.listcomments.length > 0)
      return (
          <Paper style={{ padding: "10px 20px", marginTop: 15 }}>
        {props?.listcomments.map((element,i) =>{
           return (
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
                <Avatar alt="Remy Sharp" 
                src={urls.url_users+element.utilisateurs.image}/>
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  {element.utilisateurs.Prenom} {element.utilisateurs.Nom}</h4>
                <p style={{ textAlign: "left" }}>
                 {element.Contenu}
                </p>
              </Grid>
            </Grid>
           )
        })
        }
        </Paper>
        
      );

      if (props?.listcomments!=undefined && props?.listcomments.length == 0)
      return (
      
            <Grid container wrap="nowrap" spacing={2}>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <p style={{ textAlign: "left",marginLeft:"20px" }}>
                 Aucun commentaire sur cette annonce
                </p>
              </Grid>
            </Grid>
     
      );
    }

return (
  <div  className="App">
  {showcoments()}
  </div>
)
/*return (
  <div  className="App">   
    <Paper style={{ padding: "10px 20px", marginTop: 100 }}>
      <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>rajaa quassas</h4>
          <p style={{ textAlign: "left" }}>
            c'est un peu chere
          </p>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>assia salma</h4>
          <p style={{ textAlign: "left" }}>
            C'est très jolie!
          </p>
        </Grid>
      </Grid>
      </Paper>
     
   
   
  </div>
);*/
}
//
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
  
  function TestCarouselImages(props){

    const displayimages = () => {
      const imgs =props?.listimages;
      if (imgs!=undefined && imgs.length > 0)
      return (
        <Slider {...settings}>
        {props?.listimages.map((element,i) =>{
           return (
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
            src={urls.url_annonces+element.image}
          />
          </Container>
            );})
          }
          </Slider>
      );
      else { return (<h6>nothing yet</h6>)}
    }

    return (
      <MKBox bgColor="white" pb={20} maxHeight="450px" maxWidth="400px" mt={5}>
          <Container maxWidth="sm">
          
          {displayimages()}
         
          </Container>
        </MKBox>
    );
  }

