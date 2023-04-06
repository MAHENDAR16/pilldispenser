import classes from './HomePage.module.css';
import {Link, Navigate, NavLink, useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Header = ()=>{
	const [toggleMenu, setToggleMenu] = useState(false);
	const toggleHandler = ()=>{
		setToggleMenu((prev) => !prev);
	}
	//const s = useNavigate();
    return (
        <div className={classes.container}>
			<div className={classes.navbar}>
				<div className={classes.logo}>
					<h1>Pill Dispenser</h1>
				</div>
				<nav>
					{!toggleMenu &&
					<ul id = "menuitems">
						<li><NavLink to="/" className={({isActive})=>isActive?classes.active:undefined}>Home</NavLink></li>
						<li><NavLink to="/addpill" className={({isActive})=>isActive?classes.active:undefined}>AddPill</NavLink></li>
						<li><NavLink to="/pill-info" className={({isActive})=>isActive?classes.active:undefined}>Pill-Info</NavLink></li>
						<li><NavLink to="/team" className={({isActive})=>isActive?classes.active:undefined}>Team</NavLink></li>
						<li><NavLink to="/login" className={({isActive})=>isActive?classes.active:undefined}>Login</NavLink></li>
					</ul>
					}
					{toggleMenu && 
						<ul id = "menuitems" className={classes.active}>
							<li><NavLink to="/" className={({isActive})=>isActive?classes.active:undefined}>Home</NavLink></li>
							<li><NavLink to="/addpill" className={({isActive})=>isActive?classes.active:undefined}>AddPill</NavLink></li>
							<li><NavLink to="/pill-info" className={({isActive})=>isActive?classes.active:undefined}>Pill-Info</NavLink></li>
							<li><NavLink to="/team" className={({isActive})=>isActive?classes.active:undefined}>Team</NavLink></li>
							<li><NavLink to="/login" className={({isActive})=>isActive?classes.active:undefined}>Login</NavLink></li>
						</ul>
					}
					
				</nav>
				<img src={require('./images/menu.png')} className = {classes.menu_icon} onClick = {toggleHandler}></img>
			</div>	
		</div>	
    )
}
export default Header;
