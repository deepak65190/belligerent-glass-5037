import React from "react";
import style from './footer.module.css'
function Footer() {
    return (
        <>
         
            <div className={style.bigDiv}>
                <div className={style.allUL}>
                    <div>
                        <p className={style.companyF}>Company</p>
                        <ul className={style.ulName}>
                             <li className={style.homeF}>Home</li> 
                             <li className={style.homeF}>Terms</li> 
                             <li className={style.homeF}>Privacy</li> 
                             <li className={style.homeF}>Cookies</li> 
                             <li className={style.homeF}>Affiliate terms</li> 
                             <li className={style.homeF}>Download App</li> 
                             <li className={style.homeF}>Pricing</li> 
                             <li className={style.homeF}>Pricing</li> 
                             <li className={style.homeF}>Affiliate</li> 
                             <li className={style.homeF}>DeskTime in your language</li> 
                        </ul>
                    </div>
                    <div>
                    <p className={style.companyF}>Learn more</p>
                    <ul className={style.ulName}>
                        <li className={style.homeF}>All resources</li>
                        <li className={style.homeF}>Employee monitoring guide</li>
                        <li className={style.homeF}>Online employee time clock</li>
                        <li className={style.homeF}>Best time tracking apps</li>
                        <li className={style.homeF}>DeskTime for business</li>
                        <li className={style.homeF}>DeskTime for freelancers</li>
                        <li className={style.homeF}>FAQ</li>
                        <li className={style.homeF}>Case studies</li>
                        <li className={style.homeF}>Webinars</li>
                        <li className={style.homeF}>Blog</li>
                    </ul>
                    </div>
                                
                    <div> <p className={style.companyF}>Integrations</p>
                    <ul className={style.ulName}>
                        <li className={style.homeF}>All integrations</li>
                        <li className={style.homeF}>Trello</li>
                        <li className={style.homeF}>Basecamp</li>
                        <li className={style.homeF}>Jira</li>
                        <li className={style.homeF}>Asana</li>
                        <li className={style.homeF}>Outlook Calendar</li>
                        <li className={style.homeF}>Google Calendar</li>
                    </ul>
                    </div>
                    <div> <p className={style.companyF}>Features</p>
                    <ul className={style.ulName}>
                    <li className={style.homeF}>All features</li>
                    <li className={style.homeF}>Automatic time tracking</li>
                    <li className={style.homeF}>URL & App tracking</li>
                    <li className={style.homeF}>Screenshots</li>
                    <li className={style.homeF}>Project time tracking</li>
                    <li className={style.homeF}>Shift schedule</li>
                    <li className={style.homeF}>Offline time tracking</li>
                    <li className={style.homeF}>Invoicing</li>
                    <li className={style.homeF}>Absence calendar</li>
                    <li className={style.homeF}>Mobile app</li>
                    <li className={style.homeF}>Feature request</li>
                    </ul>
                    </div>
                    <div> <p className={style.companyF}>Help center</p>
<ul className={style.ulName}>
    <li className={style.homeF}>Contact us</li>
    <li className={style.homeF}>Schedule a call</li>
    <li className={style.homeF}>Send us an e-mail</li>
    <li className={style.homeF}>Request In-person training</li>
    <li className={style.homeF}>Open chat</li>
    <li className={style.homeF}>Phone support</li>
    <li className={style.homeF}>USA: +1 (315) 6365354</li>
    <li className={style.homeF}>EU: +371 27337268</li>

</ul>
                    </div>
                </div>
                <div className={style.socialMedia}>
                   
                   
                </div>
                <div className={style.copyRight}>
                <p>© 2011 - 2022 DeskTime</p>
                <p>PART OF <span>DRAUGIM GROUP</span></p>
                </div>
            </div>
        </>
    )
}
export default Footer;
