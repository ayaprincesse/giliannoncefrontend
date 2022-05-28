import React from 'react';
import "../styles/Contact.css";
import footerRoutes from "footer.routes";
import MKBox from "components/MKBox";
import Footer1 from '../Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

function Contact() {
  return (
	  <div>
        <div className='all'>
			<div className="leftside">
        <div className="contact"><h1>Contactez-Nous</h1></div>
		<div className="hesiter"><h4>N’hésitez pas à nous contacter en cas de problèmes et à nous soumettre vos questions et avis.</h4></div></div>
		
		<div className='rightside'>
		<div className="text2"><p id='remplir'>Veuillez remplir et compléter tous les champs du formulaire suivant. </p></div>
				
        <form>
				<div className='ppp'>
				
				<input className="inputs" type="text"  name="nom" placeholder="Nom*"/> <br/>
				<input className="inputs" type="text"  name="prenom" placeholder="Prénom*"/> <br/>
				<input className="inputs" type="text" placeholder="Email*" /><br/>
			
				<input className="inputs"  type="text"  placeholder='Télephone*'/><br/>
				</div>
				
				<textarea  className="mess" placeholder='Votre message*'></textarea>
				<button className='envoyer'>Envoyer</button>
            </form>
			</div>	
			</div>
			<ThemeProvider theme={theme}>
			<MKBox pt={6} px={1} bgColor="white">
			<Footer1 content={footerRoutes}/> 
			</MKBox>
			</ThemeProvider>
			
    </div>
  );
};

export default Contact;