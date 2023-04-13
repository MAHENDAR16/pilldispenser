import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useNavigate, useParams } from 'react-router-dom'
import classes from '../HomePage.module.css'
import { collection, getDoc, getDocs, doc, setDoc, deleteDoc} from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
function ModifyPill() {
    
    const [container, setcontainer] = useState(0);
    const [slot1, setSlot1] = useState(0);
    const [slot2, setSlot2] = useState(0);
    const [slot3, setSlot3] = useState(0);
    const [slot4, setSlot4] = useState(0);
    const [slot5, setSlot5] = useState(0);
    const [slot6, setSlot6] = useState(0);
    const [slot7, setSlot7] = useState(0);
    const [slot8, setSlot8] = useState(0);
    const param = useParams();
    const [isLoading, setisloading] = useState(true);
    const [backendload, setbackendload] = useState(false);
    const [pillname, setpillname] = useState("");
    const getDataFromFire = async()=>{
        setisloading(true);
        let pillname1 = param.cid;
        setpillname(pillname1);
        console.log(pillname1)
        const ele = await getDocs(collection(db, "allpills"));
        console.log(ele)
        const allPill = ele.docs.map((doc)=>({
            ...doc.data(),
            name:doc.id,
        }))
        const currPill = allPill.find((x)=>x.name === pillname1);
        setcontainer(currPill.container)
        setSlot1(currPill.dosage[0]);
        setSlot2(currPill.dosage[1]);
        setSlot3(currPill.dosage[2]);
        setSlot4(currPill.dosage[3]);
        setSlot5(currPill.dosage[4]);
        setSlot6(currPill.dosage[5]);
        setSlot7(currPill.dosage[6]);
        setSlot8(currPill.dosage[7]);
        console.log(currPill)
        setisloading(false)
    }
    useEffect(()=>getDataFromFire, []);

    const navigate = useNavigate();
    const modifyInFire = async()=>{
        /**FOR ALLPILLS COLLECTION */
        setbackendload(true);
        /**SAMPLE DATA FOR WEB USE */
        const arrDosage = [parseInt(`${slot1}`), parseInt(`${slot2}`),parseInt(`${slot3}`), parseInt(`${slot4}`),
        parseInt(`${slot5}`), parseInt(`${slot6}`), parseInt(`${slot7}`), parseInt(`${slot8}`)]

        /**DATA TO ESP */
        const dosagestring = slot1.toString() + slot2.toString() + slot3.toString() + slot4.toString() + 
        slot5.toString() + slot6.toString() + slot7.toString() + slot8.toString();

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
            container : container,
            dosage : arrDosage,
        })
        navigate('/pill-info')
        setbackendload(false);
    }

    
    return (
        <>
            <Header/>
            <div className={classes.pcontainer}>
                {backendload == true && <h2 style={{color:"white"}}>Wait till data is updated in database...</h2>}
            {backendload === false && isLoading === true && <h2 style={{color:"white"}}>Data Is Loading</h2>}
            {backendload == false && isLoading === false && 
            <>
                <form className={classes.form_c} >
                <div className={classes.form_left_c}>
                    {/*<label>{pillname}</label>*/}
                    <input type='text' placeholder='enter pill name' value = {pillname} 
                    onChange={(e)=>setpillname(e.target.value)}/>
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
        
            <button className={classes.btn} onClick = {modifyInFire}>Modify Pill</button>
            
        </>
        }

        </div>
        {backendload == false && isLoading === false &&  <Footer/>}
        </>
    )
}

export default ModifyPill