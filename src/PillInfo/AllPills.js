import React, { useEffect, useRef, useState } from 'react'
import classes from '../HomePage.module.css'
import { db } from '../firebase';
import {doc, addDoc, getDocs, setDoc, collection, deleteDoc} from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import classNames from 'classnames';
import ReactToPrint from 'react-to-print';
function AllPills() {
    let compref = useRef();
    const [pillData, setPillData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const retriveData = async()=>{
        setLoading(true);
        const itemref = collection(db, 'allpills');
        let pillDat = await getDocs(itemref);
        pillDat = pillDat.docs.map((doc)=>({
            ...doc.data(),
            name : doc.id,
        }))
        setPillData(pillDat)
        setLoading(false);
    }

    useEffect(()=>retriveData, [])
    console.log(pillData)
    const navigate = useNavigate();
    const deleteInFire = async(cd, name)=>{
        
        await deleteDoc(doc(db, "pillInfo", `${cd}`)).then(()=>{
            console.log("deleted");
        });
        await deleteDoc(doc(db, "allpills", `${name}`)).then(()=>{
            console.log("deleted");
        });
        retriveData();
        
    }
  return (
    <>
    <div className={classes.abtnhold}>
        <ReactToPrint trigger={()=>{
            return <button className={classNames(classes.btn, classes.abtn)}>Print Prescription</button>
        }}
        pageStyle = "document"
        documentTitle = "prescription"
        content = {()=>compref}
        />
    </div>
    <div className = {classes.allpill_c} ref = {(el) => {compref = el}}>
        {isLoading === true && <h2 style={{color:"white"}}>Data Is Loading</h2>}
            
        {isLoading === false && pillData.map((x)=>{
            return (
                <div className={classes.single_p} key = {x.name}>
                    <h1>{x.name}</h1>
                    <h3>Container - {x.container}</h3>
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Dosage</th>
                        </tr>
                        <tr>
                            <td>10:00-11:00</td>
                            <td>{x.dosage[0]}</td>
                        </tr>
                        <tr>
                            <td>11:00-12:00</td>
                            <td>{x.dosage[1]}</td>
                        </tr>
                        <tr>
                            <td>12:00-13:00</td>
                            <td>{x.dosage[2]}</td>
                        </tr>
                        <tr>
                            <td>13:00-14:00</td>
                            <td>{x.dosage[3]}</td>
                        </tr>
                        <tr>
                            <td>14:00-15:00</td>
                            <td>{x.dosage[4]}</td>
                        </tr>
                        <tr>
                            <td>15:00-16:00</td>
                            <td>{x.dosage[5]}</td>
                        </tr>
                        <tr>
                            <td>16:00-17:00</td>
                            <td>{x.dosage[6]}</td>
                        </tr>
                        <tr>
                            <td>17:00-18:00</td>
                            <td>{x.dosage[7]}</td>
                        </tr>
                        
                    </table>
                    <Link to = {`/modify/${x.name}`} ><button>Modify</button></Link>
                    <button onClick = {()=>deleteInFire(x.container, x.name)}>Delete Pill</button>
                </div>
            )
        })}
    </div>
    {isLoading === false && <Footer/>}
    </>
  )
}

export default AllPills