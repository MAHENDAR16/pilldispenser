import React from 'react'
import classes from '../HomePage.module.css'
function ProjInfo() {
  return (
    <>
        <div className={classes.single_desc}>
			<div className={classes.swiper}>
                <img src={require("../images/pill1.png")}/>
			</div>

			<div className={classes.single_desc_right}>
				<p>Medications can help with pain relief and relaxation, 
				but they also come with a lot of responsibility. Taking the right medication at the
				right time is difficult enough, but it becomes even more difficult when multiple vials, 
				missed doses, tablet storage, and storage are considered. The <b>Automatic Pill Dispenser 
				Project seeks to address this issue</b>.
				<br></br>
				<br></br>
				The automatic pill dispenser is integrated to a web app and 
				provides 24-hour customer service to help you improve your health and medication management. 
				Remind patients to take the appropriate medication at the appropriate time and dose on a 
				daily basis. The pill dispenser reminds you to take your medication on time and not to forget.</p>
				
			</div>
		</div>
    </>
  )
}

export default ProjInfo