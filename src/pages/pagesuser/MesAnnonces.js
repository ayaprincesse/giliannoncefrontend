import * as React from 'react';
import MKBox from "../../components/MKBox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

import Footer1 from '../../footer.routes';
import footerRoutes from "../../footer.routes";
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';

import axios from 'axios';
import * as urls from 'apis';
import {Link} from "react-router-dom";

import { useState,useEffect,useRef} from 'react'
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import {Button }from '@mui/material';

const MesAnnonces = () => {

const [annonces, setAnnoncesList] = useState([]);
useEffect(async () => {
  
  //get annonces par prop id
  await axios.get(urls.url_main+"/annonce/proprietaire/"+localStorage.getItem('userID'),
  { 
      headers: {
    'x-access-token': localStorage.getItem('token')
     }
  })
  .then((response) => {
    console.log(response.data.annonce)
    setAnnoncesList(response.data.annonce);
  })
  .catch((error) => {
      console.log("error getannonces",error);
      alert("une erreur s'est produite lors du traitement de votre demande");
  })

},[]);

const mesannoncesgrid = () =>
{  if (annonces.length > 0)
    return (
    
        annonces.map((element,i) =>{
            const link="/AnnonceDetails/"+element.Id; 
        return (
            <Grid container spacing={3} align="center">
            <Grid item xs={4}>
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
            src={urls.url_annonces+element.imagesannonce[0].image}
        />
        </Grid>
        <Grid item xs={4}>
        <Link to={link}> <Typography mb={4}>{element.Titre}</Typography></Link>
        </Grid>
        <Grid item xs={4}>
            
        <a onClick={supprimer.bind(this,element.Id)}><Button variant="contained" >  Supprimer</Button></a>
        </Grid>
       </Grid>
         
         );})
   );
    }

const supprimer = async (id) =>
{
   await axios.delete(urls.url_main+"/annonce/"+id,{
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  })
  .then((response) => {
    if(response.data.success==false){
      alert(response.data.message);
    }
    else{
      alert("Annonce supprimée avec succès");
      window.location.reload();
    }
  })
  .catch((error) => {
      console.log(error);
      alert("une erreur s'est produite lors du traitement de votre demande");
  })
  

}

return(
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <MKBox bgColor="white" pb={10}>
     <Typography align="center" mb={4}>Mes Annonces</Typography>	
     </MKBox>
     {mesannoncesgrid()}
    </ThemeProvider>
);
}
export default MesAnnonces;