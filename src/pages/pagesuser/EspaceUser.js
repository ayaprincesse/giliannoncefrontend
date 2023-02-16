import * as React from 'react';
import Footer1 from '../../Footer';
import footerRoutes from "../../footer.routes";

import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

import { useState,useEffect,useRef} from 'react'
import {useParams} from "react-router-dom"
// @mui material components
import Stack from "@mui/material/Stack";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';

///import { createStyles, makeStyles } from '@mui/styles';
// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
/*import Carousel from 'react-material-ui-carousel'*/

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import LeftArrow from "assets/images/left-arrow.png"
import RightArrow from "assets/images/right-arrow.png"


import { alignProperty } from '@mui/material/styles/cssUtils';

import axios from 'axios';
import * as urls from 'apis';
import {Link} from "react-router-dom";


import { useNavigate } from "react-router-dom";
function EspaceUser(props) {

  const nav = useNavigate();
  const logout=()=>{
    localStorage.setItem('token',"");
    localStorage.setItem('userID', "");   
    nav("/SignIn2");
  }
	useEffect(() => {
    
		console.log("token",localStorage.getItem('token'));
		console.log("userID",localStorage.getItem('userID'));
    //this condition in all routes where we need to be logged
		if(localStorage.getItem('token')=="" || localStorage.getItem('userID')==""){
		  alert("Vous devez vous connecter !");
		  nav("/SignIn2");
		}
    else {
      props.isUserLoggedChange(true);
    }
   
  
	});

  return (
	  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
      <Typography align="center" mb={4}>WELCOME {localStorage.getItem('Prenom')+' '+localStorage.getItem('Nom')}</Typography>	
     <Home1/>
     <MKBox pt={6} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    </Container>
    </ThemeProvider>
  );
};


export default EspaceUser;


const Home1 = function Home() {

  const [categories, setCategoriesList] = useState([]);
  const [annonces, setAnnoncesList] = useState([]);
  const [villes, setVillesList] = useState([]);
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
    //get villes
    await axios.get(urls.url_main+"/annonce/villes")
    .then((response) => {
      console.log(response.data.list_villes)
      setVillesList(response.data.list_villes);
    })
    .catch((error) => {
        console.log("error getvilles",error);
        alert("une erreur s'est produite lors du traitement de votre demande");
    })
  },[]);


  return (
    <div>
    <HeroSection listCat={categories} listVilles={villes}/> 
    <MKBox pt={6} px={1} bgColor="white"></MKBox>
    <TestCarouselCategories list={categories} />
    <TestCarouselAnnonces list={annonces}/>
    </div>
  );
}



function HeroSection(props) {
 
  const [categoriesSelect, setcategoriesSelect] = useState([]);
  const [villesSelect, setvillesSelect] = useState([]);
  const [motcle, setmotCle] = useState('');
  const [categorie, setCategorie] = useState('');
  const [Ville, setVille] = useState('');
  const [annoncesTrouvees, setAnnoncesTrouvees] = useState([]);
  const myRef = useRef(null)
  
  useEffect(() => {
    var options2=[];
    props.listCat.map((element,i) => {
      options2.push({label:element.Nom,id:element.Id})
    });
    setcategoriesSelect(options2);
    console.log("options2",options2);
  },[props.listCat])

  useEffect(() => {
    var options1=[];
    props.listVilles.map((element,i) => {
      options1.push({label:element.Ville,id:element.Id})
    });
    setvillesSelect(options1);
    console.log("options1",options1);
  },[props.listVilles])
  
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
  <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center"> 
    <TextField  id="outlined-basic" label="Recherche par mot clé" variant="outlined" 
          onChange={(e)=>setmotCle(e.target.value)}
          value={motcle}
          />
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={villesSelect}
      value={Ville}
      onChange={(event, selectedOption) => {
        var selectedV=selectedOption.label;
        axios.get(urls.url_main+"/annonce/ville/"+selectedV)
        .then((response) => {
          console.log(response.data.annonces.length)
            if(response.data.annonces.length>0){
              setAnnoncesTrouvees(response.data.annonces);
              setVille('');
            }
            else{
              setVille('');
              setAnnoncesTrouvees([]);
              setTimeout(() => {
                alert("aucune annonce trouvée")
              }, "500")
            }
      });
      }
      }
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="Ville" />}
    /> 
    <Autocomplete disablePortal  id="combo-box-demo" options={categoriesSelect}
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
         props.list.map((element,i) =>{
         const link="/ResultatRecherche/"+element.Nom;
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
          src={urls.url_categories+element.image}
        /><Typography mb={4}>{element.Nom}</Typography>
            </Container>
            </Link> 
          );})
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
