import React from 'react'
import Header from '../Header'
import classes from '../HomePage.module.css'
import Footer from '../Footer'
function Team() {
  return (
    <>
        <Header/>
        <h1 className={classes.team_st}>OUR TEAM</h1>
        <div className={classes.whole_team}>
            <div className={classes.single_team}>
                <img src={require("../images/santhosh.jpg")}/>
                <h1>Santhosh S</h1>
                <p>Lead</p>
                <button>3<sup>rd</sup> Year</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/arun.jpg")}/>
                <h1>Arunasalam P.K</h1>
                <p>Electronics Lead</p>
                <button>3<sup>rd</sup> Year</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/SURIYA.jpg")}/>
                <h1>Suriya</h1>
                <p>3D Printing Lead</p>
                <button>4<sup>th</sup> Year</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/ahilesh.jpg")}/>
                <h1>Ahilesh</h1>
                <p>Electronics</p>
                <button>3<sup>rd</sup> Year</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/spk.jpg")}/>
                <h1>Pranav Kumar S</h1>
                <p>Electronics</p>
                <button>3<sup>rd</sup> Year</button>
            </div>
            

            <div className={classes.single_team}>
                <img src={require("../images/mahe.jpeg")}/>
                <h1>Mahendar P</h1>
                <p>Developer</p>
                <button>3<sup>rd</sup> Year</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/Jeevitha.jpg")}/>
                <h1>Jeevitha</h1>
                <p>Developer</p>
                <button>3<sup>rd</sup> Year</button>
            </div>
            
            <div className={classes.single_team}>
                <img src={require("../images/SANJIV.jpg")}/>
                <h1>Sanjiv M</h1>
                <p>designation</p>
                <button>2<sup>nd</sup> Year</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/RANJITH.jpeg")}/>
                <h1>Ranjith M.R</h1>
                <p>designation</p>
                <button>2<sup>nd</sup> Year</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Team