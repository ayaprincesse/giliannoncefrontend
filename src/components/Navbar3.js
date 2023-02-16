import React,{useEffect,useState} from "react";
import Logo from "../assets/images/gililogo.png";
import {Link} from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Navbar3(props){

    const nav = useNavigate();
	const logout=()=>{
	  localStorage.setItem('token',"");
	  localStorage.setItem('userID', ""); 
	  props.isUserLoggedChange(false);
	  nav("/SignIn2");
	}
	return (
	<div className ="navbar">
		<div className="leftSide">
			<img src={Logo} />
		</div>
		<div className="rightSide">
			<Link to ="/EspaceUser">Acceuil</Link>
			<Link to ="/CreerAnnonce">Poster une Annonce</Link>
			<Link to ="/MesAnnonces">Mes Annonces</Link>
			<Link to ="/ModifierCompte">Modifier mon Compte</Link>
			<a onClick={logout}>LOGOUT</a>
			<button><ReorderIcon /></button>
		</div>
	
	</div>
	)
}

export default Navbar3