import React, { useRef, useState } from 'react'
import classes from '../HomePage.module.css'
import { db } from '../firebase';
import {doc, addDoc, getDocs, setDoc, collection} from 'firebase/firestore';
import { json, useNavigate } from 'react-router-dom';
import { database } from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
let container = 1;
function PillForm() {
    const [pillname, setpillname] = useState('');
    //const [container, setcontainer] = useState(0);
    const [slot1, setSlot1] = useState(0);
    const [slot2, setSlot2] = useState(0);
    const [slot3, setSlot3] = useState(0);
    const [slot4, setSlot4] = useState(0);
    const [slot5, setSlot5] = useState(0);
    const [slot6, setSlot6] = useState(0);
    const [slot7, setSlot7] = useState(0);
    const [slot8, setSlot8] = useState(0);

    const uploadData = async()=>{
     //   const itemref = collection(db, "pillInfo");
        console.log(container)
        let container_c = container;
        /**FOR ALLPILLS COLLECTION */
        const arrDosage = [parseInt(`${slot1}`), parseInt(`${slot2}`),parseInt(`${slot3}`), parseInt(`${slot4}`),
        parseInt(`${slot5}`), parseInt(`${slot6}`), parseInt(`${slot7}`), parseInt(`${slot8}`)]

        const dosstring = {"dos" : slot1 + slot2 + slot3 + slot4 + slot5 + slot6 + slot7 + slot8};

        /*FOR PILLINFO COLLECTION */
        const dosagestring = slot1.toString() + slot2.toString() + slot3.toString() + slot4.toString() + 
        slot5.toString() + slot6.toString() + slot7.toString() + slot8.toString();

        /**TO GENERATE ZEROS IN FRONT OF THE STRING */
        /*if(dosstring.length != 8){
            let d = 8-dosstring.length;
            for(let i = 0;i<d;i++)
                dosstring = "0" + dosstring;
        }*/

        if(dosagestring.length != 8){
            let d = 8-dosagestring.length;
            for(let i = 0;i<d;i++)
                dosagestring = "0" + dosagestring;
        }
        
        await setDoc(doc(db, "pillInfo", `${container}`), {
            dosage : dosagestring,
            //dosage : [1, 2, 3, 4, 5, 6 ,7, 7]
            //dosage : [slot1, slot2 ,slot3, slot4, slot5, slot6, slot7, slot8]
        })
        console.log("upload");
        
        await setDoc(doc(db, "allpills", `${pillname}`), {
            container : container_c,
            dosage : arrDosage,
        })
        
        //const arr = [1, 2, 3]
        //WRITE DATA TO REAL TIME DB WITH FETCH
        const res = await fetch(`https://pilldispenser-f2539-default-rtdb.firebaseio.com/pillInfo/${container_c}.json`,
        {
            method:"POST",
            headers : {
                "Content-Type" : "application/json",
            },
           
            body : JSON.stringify(dosstring),
        })

       /* const db = getDatabase();
            set(ref(db, 'pillInfo/' + container_c), {
                dosage : arrDosage,
            });*/
    }
    const evaluate = (event)=>{
        event.preventDefault();
        console.log(slot1);
        console.log(slot2);
        uploadData();
        setpillname('');
        //setcontainer('');
        container += 1;
        setSlot1(0);
        setSlot2(0);
        setSlot3(0);
        setSlot4(0);
        setSlot5(0);
        setSlot6(0);
        setSlot7(0);
        setSlot8(0);
        
    }
    const navigate = useNavigate();
    const change = ()=>{
        navigate('/pill-info')
    }
  return (
    <div className={classes.pcontainer}>
        <h1 style={{margin:"12px 0px"}}>Add the dosage for the respective time slot[Zero if no dosage is required at that time slot]</h1>
        {container === 4 && 
        <>
            <h1 style={{margin:"10px 0px"}}>ALL DATA ADDED SUCCESFULLY</h1>
            <button onClick={change} className={classes.btn}>View Pills</button>
        </>
        }
        {container !== 4 && <>
        <h2 style={{margin:"5px 0px", color:"red"}}>
            
            Enter the data for {container}<sup>st</sup> container
        </h2>
        <form className={classes.form_c} >
            <div className={classes.form_left_c}>
                <input type='text' placeholder='enter pill name' value = {pillname} onChange={(e)=>setpillname(e.target.value)}/>
                {/*<input type='number' min = "0" placeholder='Container number(1-6)' value = {container}
                />*/}
                <label>Container - {container}</label>
                <label for = "t1">10:00-11:00</label>
                <input id = "t1" type='number' placeholder='Enter Dosage(0 if no dosage)' min = "0" 
                value={slot1} onChange={(e)=>setSlot1(e.target.value)}/>

                <label for = "t2">11:00-12:00</label>
                <input id = "t2" type='number' placeholder='Enter Dosage(0 if no dosage)' value={slot2}
                min = "0" onChange={(e)=>setSlot2(e.target.value)}/>
                
            </div>
            <div className={classes.form_center_c}>
                <label for = "t3">12:00-13:00</label>
                <input id = "t3" type='number' placeholder='Enter Dosage(0 if no dosage)' value={slot3}
                min = "0" onChange={(e)=>setSlot3(e.target.value)}/>

                <label for = "t4">13:00-14:00</label>
                <input id = "t4" type='number' placeholder='Enter Dosage(0 if no dosage)' value={slot4}
                min = "0" onChange={(e)=>setSlot4(e.target.value)}/>

                <label for = "t5">14:00-15:00</label>
                <input id = "t5" type='number' placeholder='Enter Dosage(0 if no dosage)' value = {slot5}
                min = "0" onChange={(e)=>setSlot5(e.target.value)}/>
                
            </div>
            <div className={classes.form_right_c}>
                <label for = "t6">15:00-16:00</label>
                <input id = "t6" type='number' placeholder='Enter Dosage(0 if no dosage)' value={slot6}
                min = "0" onChange={(e)=>setSlot6(e.target.value)}/>

                <label for = "t7">16:00-17:00</label>
                <input id = "t7" type='number' placeholder='Enter Dosage(0 if no dosage)' value={slot7}
                min = "0" onChange={(e)=>setSlot7(e.target.value)}/>

                <label for = "t8">17:00-18:00</label>
                <input id = "t8" type='number' placeholder='Enter Dosage(0 if no dosage)' value={slot8}
                min = "0" onChange={(e)=>setSlot8(e.target.value)}/>
            </div>
           
        </form>
        <button className={classes.btn} onClick={evaluate}>Add Pill</button>
        </>
        }
    </div>
  )
}

export default PillForm;
