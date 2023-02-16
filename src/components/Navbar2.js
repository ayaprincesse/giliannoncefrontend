//import React from "react";
import Logo from "../assets/images/gililogo.png";
import {Link} from "react-router-dom";
/*import ReorderIcon from "@mui/icons-material/Reorder";*/
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "../styles/Navbar.css";
/*import { makeStyles } from "@mui/material";*/
//import { makeStyles } from "@mui/styles";
import "../styles/Navbar2.css";
import { CSSTransition } from 'react-transition-group';
import React, { useState, useEffect, useRef } from 'react';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

function Navbar2(props) {
	return (
		<div>

		<nav className="navbar" align="right">
		<ul className="navbar-nav">{props.children}</ul>
		{/*<div className="leftieSide2">
			<img src={Logo} />
	</div>*/}
		<div className="rightSide2" >
	  		<Link to ="/EspaceUser">Acceuil</Link>
            <Link to ="/CreerAnnonce">Poster une annonce</Link>
			{/*<NavItem > <Avatar sx={{ m: 1, bgcolor: 'black',  height: 20, width: 20  }} >
            <PersonIcon />
			 
          </Avatar>
		  <DropdownMenu></DropdownMenu>
          </NavItem>*/}
	    <NavItem icon={<AccountCircleRoundedIcon fontSize="large"/>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
	  </div>
	  </nav>
	  </div>
	  
	);
  }
  
  function NavItem(props) {
	const [open, setOpen] = useState(false);
  
	return (
	  <li className="nav-item">
		<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
		  {props.icon}
		</a>
  
		{open && props.children}
	  </li>
	);
  }
  
  function DropdownMenu() {
	const nav = useNavigate();
	const logout=()=>{
	 // localStorage.setItem('token',"");
	 // localStorage.setItem('userID', "");   
	 // nav("/SignIn2");
	}
	
	const [activeMenu, setActiveMenu] = useState('main');
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);
  
	useEffect(() => {
	  setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
	}, [])
  
	function calcHeight(el) {
	  const height = el.offsetHeight;
	  setMenuHeight(height);
	}
  
	function DropdownItem(props) {
	  return (
		<a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
		  <span className="icon-button">{props.leftIcon}</span>
		  {props.children}
		 
		</a>
	  );
	}
  
	return (
	  <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
		<CSSTransition
		  in={activeMenu === 'main'}
		  timeout={500}
		  classNames="menu-primary"
		  unmountOnExit
		  onEnter={calcHeight}>
		  <div className="menu">
			<DropdownItem 
			leftIcon={<AutoFixHighRoundedIcon />}>
				<Link to ="/ModifierCompte">Mon compte</Link></DropdownItem>
			<DropdownItem
			  leftIcon={<AutoAwesomeRoundedIcon />}>
			  <Link to ="/MesAnnonces">Mes Annonces</Link>
			</DropdownItem>
			<DropdownItem 
			leftIcon={<ExitToAppRoundedIcon />}>
				<a onClick={logout}>LOGOUT</a></DropdownItem>
		  </div>
		</CSSTransition>
  
	  </div>
	);
  }

  export default Navbar2