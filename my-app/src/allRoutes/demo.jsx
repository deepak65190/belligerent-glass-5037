import React from "react";
import style from "./demo.module.css"


function Demo(){
    return (
        <>
       <div>
        <div className={style.demoGetQ}>
            <div>
<p className= {style.get}>Get a <span className={style.superQ}>super quick </span> in-depth demo of DeskTime</p>
<p className={style.findDesktime}>What’s the best way to find out if DeskTime works for you? Try it yourself! We’ll give you a personalized 1:1 DeskTime demo and answer any questions you might have.</p>
<button className={style.bookDemo}>BOOK A DEMO</button>
<button className={style.freeTrial}>START A FREE TRIAL</button>

            </div>
            <div>
                <img src="https://desktime.com/assets/img/demo/raivis.png" alt="" />
            </div>
        </div>
        <div className={style.dlws}>
            <div className={style.smalDlws}>
                <div className={style.divS}>
                    <img src="https://desktime.com/assets/img/demo/demo-account.svg?v2" alt="" />
                    <p>Demo account</p>
                    <p>Learn how DeskTime tracks time, explore the dashboard and try all the available features in this self-guided DeskTime demo.</p>
                    <button>EXPLORE THE DEMO ACCOUNT</button>
                </div>
                
                <div className={style.divS}>
                    <img src="https://desktime.com/assets/img/demo/live-demo.svg?v2" alt="" />
                    <p>Live demo</p>
                    <p>Sign up for a 1:1 demo call with our product expert, take a personalized tour and get answers to any questions you might have.</p>
                    <button>BOOK DEMO</button>
                </div>
                <div className={style.divS}>
                    <img src="https://desktime.com/assets/img/demo/webinars.svg?v2" alt="" />
                    <p>Webinars</p>
                    <p>Watch on-demand webinars and tutorials to make sure you get the most out of all the features DeskTime has to offer.</p>
                    <button>WATCH NOW</button>
                </div>
                <div className={style.divS}>
                    <img src="https://desktime.com/assets/img/demo/sign-up.svg?v2" alt="" />
                    <p>Sign Up</p>
                    <p>Find out what time tracking means, add team members, and test the project feature for effective workflow management.</p>
                    <button>START FREE TRIAL</button>
                </div>
            </div>
        </div>
       </div>
        </>
    )
}
export default Demo ;