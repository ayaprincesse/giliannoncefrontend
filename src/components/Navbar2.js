import React from "react";
import Logo from "../assets/images/gililogo.png";
import {Link} from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar2.css";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
function Navbar2(){
	return (
	<div className ="navbar2">
		<div className="leftSide2">
			<img src={Logo} />
		</div>
		<div className="rightSide2">
			<Link to ="/">Acceuil</Link>
			<Link to ="/">About us</Link>
			<Link to ="/Contact">Contact</Link>

			<PersonRoundedIcon/>
			<PersonRoundedIcon fontSize="small" />
			<PersonRoundedIcon sx={{ fontSize: 20 }} />
			
			
		</div>
	
	</div>
	)
}

export default Navbar2