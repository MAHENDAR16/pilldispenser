import React from 'react'
import Header from '../Header'
import classes from '../HomePage.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { authActions } from '../globalstore/auth';
import { db } from '../firebase';
import { doc, getDocs, collection } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../Footer';
function Login() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const [msg, setMsg] = useState('')
    const dispatch = useDispatch()
    const loginHandler = async(event)=>{
        event.preventDefault();
        
        const userRef = collection(db, "userDetails");
        const data = await getDocs(userRef);
        const filteredData = data.docs.map((doc)=>({
            ...doc.data(),
        }))
        let check;
        for(let i of filteredData){
            if(i.username === name && i.password === pass)
                check = i;
        }
        if(check === undefined)
            setMsg("INVALID CREDENTIALS");
        else{
            setMsg("LOGGED IN SUCCESSFULLY");
            dispatch(authActions.login(name));
            navigate('/');
        }
        setName('');
        setPass('');
        
    }
  return (
    <>
        <Header/>
        <div className={classes.account_page}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className={classes.fcol_2}>
                            <img src={require("../images/pill.png")} width="100%"/>
                        </div>	
                        <div className={classes.fcol_2}>

                            <div className={classes.form_container}>
                                <span style={{marginTop:"10px"}}>Login</span>
                                {msg!==null && <h3>{msg}</h3>}
                                <form>
                                    <input type="text" name="" placeholder="Enter your name"
                                    onChange={(e)=>setName(e.target.value)} value = {name}/>                                    
                                    <input type="password" name="" placeholder="Enter your password"
                                    onChange={(e)=>setPass(e.target.value)} value = {pass}/>
                                    <button type="submit" className={classes.btnf} onClick = {loginHandler}>Login</button>
                                    <a href="">Forgot Password</a>
                                   
                                    <Link to = '/register'><button className={classes.btnf}>Register</button></Link>
                                    
                                </form>
                                

                            </div>
                        </div>
                    </div>
                </div>
	        </div>
            <Footer/>
    </>
  )
}

export default Login