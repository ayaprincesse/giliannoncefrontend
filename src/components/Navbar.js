import React from "react";
import Logo from "../assets/images/gililogo.png";
import {Link} from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css"
function Navbar(){
	return (
	<div className ="navbar">
		<div className="leftSide">
			<img src={Logo} />
		</div>
		<div className="rightSide">
			<Link to ="/">Acceuil</Link>
			<Link to ="/SignUp2">Créer un compte</Link>
			<Link to ="/SignIn2">S'authentifier</Link>
			<Link to ="/Aboutus">About us</Link>
			<Link to ="/Contact">Contact</Link>
			<button><ReorderIcon /></button>
			
			
		</div>
	
	</div>
	)
}

export default Navbar