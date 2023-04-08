import React from 'react'
import Header from '../Header'
import classes from '../HomePage.module.css'
function Team() {
  return (
    <>
        <Header/>
        <h1 className={classes.team_st}>OUR TEAM</h1>
        <div className={classes.whole_team}>
            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>
            
            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>
            
            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>

            <div className={classes.single_team}>
                <img src={require("../images/profile1.jpg")}/>
                <h1>name</h1>
                <p>designation</p>
                <button>Brown Tag</button>
            </div>
        </div>
    </>
  )
}

export default Team