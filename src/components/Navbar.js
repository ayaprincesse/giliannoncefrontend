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
			<Link to ="/Signuppage">Créer un compte</Link>
			<Link to ="/">S'authentifier</Link>
			<Link to ="/">About us</Link>
			<Link to ="/">Contact</Link>

			<button><ReorderIcon /></button>
			
			
		</div>
	
	</div>
	)
}

export default Navbar