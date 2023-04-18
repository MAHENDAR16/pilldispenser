import React from 'react'
import classes from '../HomePage.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file
import { useEffect } from 'react';

function Progress() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-out',
        });
      }, []);
  return (
    <>
        
       {/* <div className={classes.round_desc}>
			<div className={classes.single_round} data-aos="fade-down-right" data-aos-duration="800" data-aos-easing="ease-in-out">
				<div className={classes.left_r}>
					<span>Week 1</span>
				</div>
				<span className={classes.round_center}></span>
				<div className={classes.right_r}>
					<p>The running cost of an electric vehicle is much lower than an equivalent petrol or diesel vehicle. Electric vehicles use electricity to charge their batteries instead of using fossil fuels like petrol or diesel. Electric vehicles are more efficient</p>
					
				</div>
			</div>
			<hr/>
			<div className={classes.single_round} data-aos="fade-down-right" data-aos-duration="800" data-aos-easing="ease-in-out">
				<div className={classes.left_r}>
					<span>Week 2</span>
				</div>
				<span className={classes.round_center}></span>
				<div className={classes.right_r}>
					<p>The running cost of an electric vehicle is much lower than an equivalent petrol or diesel vehicle. Electric vehicles use electricity to charge their batteries instead of using fossil fuels like petrol or diesel. Electric vehicles are more efficient</p>
					
				</div>
			</div>
			<hr/>
            <div className={classes.single_round} data-aos="fade-down-right" data-aos-duration="800" data-aos-easing="ease-in-out">
				<div className={classes.left_r}>
					<span>Week 3</span>
				</div>
				<span className={classes.round_center}></span>
				<div className={classes.right_r}>
					<p>The running cost of an electric vehicle is much lower than an equivalent petrol or diesel vehicle. Electric vehicles use electricity to charge their batteries instead of using fossil fuels like petrol or diesel. Electric vehicles are more efficient</p>
					
				</div>
			</div>
			<hr/>
		</div>
  	*/}
		<h1 className={classes.team_st}>SYNOPSIS</h1>
		<div className={classes.imgc}>
			<div className={classes.single_img}>
				<img src = {require('../images/pimg1.jpeg')}></img>
			</div>
			<div className={classes.single_img}>
				<img src = {require('../images/pimg2.jpeg')}></img>
			</div>
			<div className={classes.single_img}>
				<img src = {require('../images/pimg3.jpeg')}></img>
			</div>
		</div>
		<h1 className={classes.team_st}>PROPOSED BUDGET</h1>
		<div className={classes.billc}>
			<div className={classes.single_bimg}>
				<img src={require('../images/bill.jpeg')}></img>
			</div>
			
		</div>
    </>
  )
}

export default Progress