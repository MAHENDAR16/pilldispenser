import React, { useEffect, useState } from 'react'
import classes from '../HomePage.module.css'
import { db } from '../firebase';
import {doc, addDoc, getDocs, setDoc, collection} from 'firebase/firestore';
import { Link } from 'react-router-dom';

function AllPills() {
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
  return (
    <div className = {classes.allpill_c}>
        {isLoading === true && <h2 style={{color:"white"}}>Data Is Loading</h2>}
        {pillData.map((x)=>{
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
                </div>
            )
        })}
    </div>
  )
}

export default AllPills