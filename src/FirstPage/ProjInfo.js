import React from 'react'
import classes from '../HomePage.module.css'
function ProjInfo() {
  return (
    <>
        <div className={classes.single_desc}>
			<div className={classes.swiper}>
                <img src={require("../images/profile1.jpg")}/>
			</div>

			<div className={classes.single_desc_right}>
				<p>When a page is referenced, the required page may be in the memory. If it is in the memory, we need to detach the node of the list and bring it to the front of the queue. 
If the required page is not in memory, we bring that in memory. In simple words, we add a new node to the front of the queue and update the corresponding node address in the hash. If the queue is full, i.e. all the frames are full, we remove a node from the rear of the queue, and add the new node to the front of the queue.</p>
				<button>Register</button>
			</div>
		</div>
    </>
  )
}

export default ProjInfo