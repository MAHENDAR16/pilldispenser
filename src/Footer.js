import React from 'react'
import classes from './HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
function Footer() {
  return (
    <>
        <div className={classes.mainf}>
            <h3>Contact Us</h3>
            <div className={classes.social}>
                <FontAwesomeIcon icon = {faEnvelope} className={classNames(classes.icon, classes.icon1)}/>
                <FontAwesomeIcon icon = {faInstagram} className={classNames(classes.icon, classes.icon2)}/>
                <FontAwesomeIcon icon = {faWhatsapp} className={classNames(classes.icon, classes.icon3)}/>
                <FontAwesomeIcon icon = {faTwitter} className={classNames(classes.icon, classes.icon4)}/>
                
            </div>
        </div>
    </>
  )
}

export default Footer