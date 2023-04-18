import classes from './HomePage.module.css';
import {Link, Navigate, NavLink, useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from './globalstore/auth';
const Header = ()=>{
	const dispatch = useDispatch();
	const [toggleMenu, setToggleMenu] = useState(false);
	const toggleHandler = ()=>{
		setToggleMenu((prev) => !prev);
	}
	const username = useSelector((state)=>state.auth.username);
	const isLoggedin = useSelector((state)=>state.auth.isLogin);
	const navigate = useNavigate();
	//const s = useNavigate();
	const logoutUser = ()=>{
		dispatch(authActions.logout())
		navigate('/')
	}
    return (
        <div className={classes.container}>
			<div className={classes.navbar}>
				<div className={classes.logo}>
					<h1>Automatic Pill Dispenser</h1>
				</div>
				<nav>
					{!toggleMenu &&
					<ul id = "menuitems">
						<li><NavLink to="/" className={({isActive})=>isActive?classes.active:undefined}>Home</NavLink></li>
						<li><NavLink to="/addpill" className={({isActive})=>isActive?classes.active:undefined}>AddPill</NavLink></li>
						<li><NavLink to="/pill-info" className={({isActive})=>isActive?classes.active:undefined}>Pill-Info</NavLink></li>
						<li><NavLink to="/team" className={({isActive})=>isActive?classes.active:undefined}>Team</NavLink></li>
						{isLoggedin == true && <li>{username}</li>}
						{isLoggedin == true && <li onClick={logoutUser}>Logout</li>}
						{!isLoggedin && <li><NavLink to="/login" className={({isActive})=>isActive?classes.active:undefined}>Login</NavLink></li>}
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
