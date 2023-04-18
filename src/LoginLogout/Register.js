import React from 'react'
import Header from '../Header'
import classes from '../HomePage.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, setDoc, collection } from 'firebase/firestore';
import Footer from '../Footer';
export default function Register() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const registerHandler = async(e)=>{
        e.preventDefault();

       // const userRef = collection(db, "userDetails");
        await setDoc(doc(db, "userDetails", `${name}`), {
            username : name,
            password : pass, 
            email : email,
        }).then(()=>{
            console.log("doc is uploaded")
        }).catch(()=>{
            console.log("eeror")
        })
        
        setName('');
        setEmail('');
        setPass('');
    }
  return (
    <>
        <Header/>
        <div className={classes.account_page}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className={classes.fcol_2}>
                            <img src={require("../images/pill1.png")} width="100%"/>
                        </div>	
                        <div className={classes.fcol_2}>

                            <div className={classes.form_container}>
                                <span style={{marginTop:"10px"}}>Register</span>
                              {/*  {msg!==null && <h3>{msg}</h3>}*/}
                                <form>
                                    <input type="text" name="" placeholder="Enter your name"
                                    onChange={(e)=>setName(e.target.value)} value = {name}/>     
                                    <input type="email" placeholder="Enter your email" value={email}
                                    onChange = {(e)=>setEmail(e.target.value)}/>                               
                                    <input tyep = "age" placeholder='Enter Age'/>
                                    <input type="password" name="" placeholder="Enter your password"
                                    onChange={(e)=>setPass(e.target.value)} value = {pass}/>

                                   
                                    <button className={classes.btnf} onClick={registerHandler}>Register</button>
                                    
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
