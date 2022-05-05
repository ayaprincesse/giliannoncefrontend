import * as React from 'react';
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider } from "@mui/material/styles";
import { Paper, Button } from '@mui/material'
///import { createStyles, makeStyles } from '@mui/styles';
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

import theme from "assets/theme";
// Images
import mainImg from "assets/images/lemon.jpeg";
import cat1 from "assets/images/cat1.jpeg";
import cat2 from "assets/images/cat2.jpeg";
import cat3 from "assets/images/cat3.jpeg";
import cat4 from "assets/images/cat4.jpeg";
//import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

import Carousel from 'react-material-ui-carousel'
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

import Card from "custom-components/Card";
import Slider from "react-slick";

import LeftArrow from "assets/images/left-arrow.png"
import RightArrow from "assets/images/right-arrow.png"
import newsletterimg from "assets/images/annonce1.jpeg";

import annonce0 from "assets/images/annonce.jpeg";
import annonce1 from "assets/images/annonce1.jpeg";
import annonce2 from "assets/images/annonce2.jpeg";
import annonce3 from "assets/images/annonce3.jpeg";
import annonce4 from "assets/images/annonce4.jpeg";
import { Contrast } from '@mui/icons-material';

import Header1 from './Header';

function Home() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header1/>
    <TestCarouselCategories/>
    <TestCarouselAnnonces/>
    <Newsletter/>
    <MKBox pt={6} px={1} bgColor="white">
    <DefaultFooter content={footerRoutes}/>
    </MKBox>
    </ThemeProvider>
  );
}

export default Home;



function Header() {

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
 
return  <MKBox component="header" position="relative" bgColor="white">
<MKBox component="nav" position="relative" top="0.5rem" width="100%" bgColor="white">
  <Container>
    <Grid container flexDirection="row" alignItems="center">
      <MKTypography
        component={Link}
        href="#"
        variant="button"
        color="#484848"
        fontWeight="regular"
        py={0.8125}
        mr={2}
      >
        GILI.COM
      </MKTypography>
      <MKButton
        variant="outlined"
        color="white"
        sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
      >
        <MKBox component="i" color="white" className="fas fa-bars" />
      </MKButton>
      <MKBox
        component="ul"
        display={{ xs: "none", lg: "flex" }}
        p={0}
        my={0}
        mx="auto"
        sx={{ listStyle: "none" }}
      >
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            color="#484848"
            fontWeight="regular"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            Accueil
          </MKTypography>
        </MKBox>
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            color="#484848"
            fontWeight="regular"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            Poster une Annonce
          </MKTypography>
        </MKBox>
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            color="#484848"
            fontWeight="regular"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            Contactez nous
          </MKTypography>
        </MKBox>
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            color="#484848"
            fontWeight="regular"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            S'authentifier
          </MKTypography>
        </MKBox>
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            color="#484848"
            fontWeight="regular"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            Inscrivez-vous
          </MKTypography>
        </MKBox>

      </MKBox>
      <MKBox
        component="ul"
        display={{ xs: "none", lg: "flex" }}
        p={0}
        m={0}
        sx={{ listStyle: "none" }}
      >
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            <MKBox component="i" color="white" className="fab fa-twitter" />
          </MKTypography>
        </MKBox>
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            <MKBox component="i" color="white" className="fab fa-facebook" />
          </MKTypography>
        </MKBox>
        <MKBox component="li">
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            p={1}
            onClick={(e) => e.preventDefault()}
          >
            <MKBox component="i" color="white" className="fab fa-instagram" />
          </MKTypography>
        </MKBox>
      </MKBox>
    </Grid>
  </Container>
</MKBox>
<MKBox
  display="flex"
  alignItems="center"
  minHeight="70vh"
  sx={{
    //backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
    //backgroundSize: "cover",
    //backgroundPosition: "center",
    backgroundColor:'#FFFFFF'
  }}
>
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
        <TextField id="outlined-basic" label="Recherche par mot clé" variant="outlined" />
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options1}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Ville" />}
      /> <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options2}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="Catégorie" />}
    />
       
        <MKButton color="black">RECHERCHER</MKButton>
      </Stack>
    </Grid>
   <Box
        component="img"
        sx={{
          /*height: 233,
          width: 350,*/
          minWidth: { lg : 300 },
          maxHeight: { lg: 500 },
        }}
        alt="The house from the offer."
        src={mainImg}
      />
  
  
  </Stack>
  
  </Container>
  
</MKBox>
</MKBox>
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
      slidesToScroll: 3,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
function TestCarouselCategories(){
  return (
    <MKBox bgColor="white" pb={20}>
        <Typography align="center" mb={4}>Les Catégories</Typography>
        <Container maxWidth="sm">
        <Slider {...settings}>
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
          src={cat1}
        /><Typography mb={4}>Meubles</Typography>
        </Container>
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
          src={cat2}
        /><Typography mb={4}>Véhicules</Typography>
        </Container>
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
          src={cat3}
        /><Typography mb={4}>Animaux</Typography>
        </Container>
        <Container>
         <Box
          component="img"
          sx={{
            height: 200,
            width: 350,
            minWidth: { lg : 150 },
            minHeight: { lg: 150 },
            maxWidth: { lg : 180 },
            maxHeight: { lg: 200 },
          }}
          src={cat4}
        /><Typography mb={4}>Autres</Typography>
        </Container>
        <Container>
            <Box
          component="img"
          sx={{
            height: 200,
            width: 350,
            minWidth: { lg : 150 },
            minHeight: { lg: 150 },
            maxWidth: { lg : 180 },
            maxHeight: { lg: 200 },
          }}
          src={cat4}
        /><Typography mb={4}>Autres</Typography>
        </Container>
           
        
        </Slider>
        </Container>
      </MKBox>
  );
}
function TestCarouselAnnonces(){
  return (
    <MKBox bgColor="white" pb={10}>
        <Typography align="center" mb={5}>Quelques annonces récentes</Typography>
        <Container maxWidth="sm">
        <Slider {...settings}>
        <Container><Box
          component="img"
          sx={{
            height: 200,
            width: 400,
            minWidth: { lg : 150 },
            minHeight: { lg: 150 },
            maxWidth: { lg : 180 },
            maxHeight: { lg: 200 },
          }}
          src={annonce0}
        />
        <Typography mb={4}>600DH/Jabador bleu/Rabat</Typography>
        </Container>
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
          src={annonce1}
        /><Typography mb={4}>250DH/Biciclette/ Casablanca</Typography>
        </Container>
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
          src={annonce2}
        /><Typography mb={4}>1000DH/4 peintures/Tanger</Typography>
        </Container>
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
          src={annonce3}
        /><Typography mb={4}>10000DH/fauteuils Gris/Casablanca</Typography>
        </Container>
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
          src={annonce4}
        /><Typography mb={4}>180DH / Perroquet jeune / Meknes</Typography>
        </Container>
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
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
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


function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer" mt={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <MKBox>
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="9rem" mb={2} />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}