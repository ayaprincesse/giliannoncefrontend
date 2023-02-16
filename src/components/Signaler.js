
import React, { useState, useEffect, useRef } from 'react';
import "../styles/Signaler.css";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MKBox from "../components/MKBox";
import Stack from "@mui/material/Stack";
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import axios from 'axios';
import * as urls from 'apis';
const Signaler = (props) => {

	const [showRaison ,setShowRaison] = useState(false);
	const [raison ,setRaison] = useState('');
  const showRaisonn = () => {
    if(localStorage.getItem('token')=="" || localStorage.getItem('userID')==""){
		  alert("Vous devez être connecter pour signaler une annonce!");
		}
    else {
      
		setShowRaison(true);
      //alert("Afin de contacter le propriétaire de cette annonce si intéréssé :\n voici son numéro: "+annoncesdetails.utilisateurs.Tel);
    }    
    }

	const signaler = async () => {
		console.log(raison);
		//event.preventDefault();
		await axios.post(urls.url_main+"/signal",
		{
		  DescriptionRaison:raison,
		  SignaleurId:localStorage.getItem('userID'),
		  AnnonceId:props.idannonce
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
			  alert("Annonce signalée");
			  setShowRaison(false);
			  window.location.reload();
			}
		 
		})
		.catch((error) => {
			console.log("login",error);
			alert("Vous avez déjà signalé cette annonce avant");
			setShowRaison(false);
			window.location.reload();
		})
	  };
	const raisons = [
		{ label: 'Nudité', id: 1 },
		{ label: 'Violence', id: 2 },
		{ label: 'Harcélement', id: 3 },
		{ label: 'Fausses informations', id: 4 },
		{ label: 'Contenu indésirable', id: 5 },
		{ label: 'Ventes non autorisées', id: 6 },
		{ label: 'Discours haineux', id: 7 },
		{ label: 'Autres', id: 9 },
	  ];

	  const _handleTextFieldChange =  (e) => {
		setRaison(e.target.value);
    }
  return (
    <div>
		  <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'right',
          }}
        >
    <a  onClick={() => { showRaisonn(); }}><ReportProblemIcon fontSize="large" color='black' /></a>
	
    {showRaison &&
	<Box
	sx={{
	  display: 'flex',
	  flexDirection: 'row',
	  alignItems: 'right',
	}}
  >
	<Autocomplete className='cv' disablePortal  id="combo-box-demo" options={raisons}
	  value={raison}   
	  onChange={(event, selectedOption) => {
        var selectedV=selectedOption.label;
		setRaison(selectedV);
	  }}
	 sx={{ width: 300,marginLeft:2 }}
               renderInput={(params) => <TextField {...params} 
			  label="--Raison pour le signal--" 
			   />} 
            />
			<Button
              type="submit"
              //fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1,ml:5 }}
              onClick={() => { signaler() }}
            >
              Valider
            </Button>
			</Box>
			}
   
	</Box>
    </div>
  );
}
export default Signaler;
/*
function SignItem(props) {
	const [open, setOpen] = useState(false);
  
	return (
	  <li className="sign-item">
		<a href="#" className="icon-button2" onClick={() => setOpen(!open)}>
		  {props.icon}
		</a>
  
		{open && props.children}
	  </li>
	);
  }

  function DropdownMenu2() {
	const [activeMenu, setActiveMenu] = useState('main2');
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);
  
	useEffect(() => {
	  setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
	}, [])
  
	function calcHeight(el) {
	  const height = el.offsetHeight;
	  setMenuHeight(height);
	}
  
	function DropdownItem2(props) {
	  return (
		<a href="#" className="menu-item2" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
		  <span className="icon-button2">{props.leftIcon}</span>
		  {props.children}
		 
		</a>
	  );
	}
  
	return (
	  <div className="dropdown2" style={{ height: menuHeight }} ref={dropdownRef}>
  
		<CSSTransition
		  in={activeMenu === 'main2'}
		  timeout={500}
		  classNames="menu-primary2"
		  unmountOnExit
		  onEnter={calcHeight}>
		  <div className="menu2">
			<DropdownItem2 >Nudité</DropdownItem2>
			<DropdownItem2> Violence</DropdownItem2>
			<DropdownItem2 >Harcélement</DropdownItem2>
            <DropdownItem2 >Suicide ou Automutilation</DropdownItem2>
            <DropdownItem2 >Fausses informations</DropdownItem2>
            <DropdownItem2 >Contenu indésirable</DropdownItem2>
            <DropdownItem2 >Ventes non autorisées</DropdownItem2>
            <DropdownItem2 >Discours haineux</DropdownItem2>
            <DropdownItem2 goToMenu="autre" >Autre chose</DropdownItem2>
  
		  </div>
		</CSSTransition>
            
		<CSSTransition
		  in={activeMenu === 'autre'}
		  timeout={500}
		  classNames="menu-secondary2"
		  unmountOnExit
		  onEnter={calcHeight}>
		  <div className="menu2">
            <DropdownItem2 goToMenu="main2" leftIcon={<ArrowBackIosNewRoundedIcon/>}></DropdownItem2>
			<div className="menu22">
			<textarea placeholder="Veuillez décrire l'objet de votre reclamation:" height={60} id="reclamation"/><br/>
			<button id="rec">Envoyer</button>
            </div></div>
		</CSSTransition>
	  </div>
	);
  }*/
