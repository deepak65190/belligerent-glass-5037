import style from "./signUp.module.css"
import { useState } from 'react';
 
function Login(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the email change
      const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };

    return (
        
      <>
        <div className={style.centrFormUp}>
      
        <div>
      <h4 className={style.freeH1}>Log in to DeskTime</h4>
 <p className={style.startT}></p>

      </div>
          
 
        <label className={style.labelUp}>Email</label>
        <input onChange={handleEmail} className={style.inputUp}
          value={email} type="email" placeholder="Type in your email address" />
 
        <label className={style.labelUp}>Password</label>
        <input onChange={handlePassword} className={style.inputUp}
          value={password} type="password"  placeholder="Type in your password"/>
 
        <button className={style.btnUp} type="submit">
        LOGIN
        </button>
        <p className={style.policyUp}>I forgot my password</p>
        <p className={style.termsUp}> Don’t have an account yet? <span  className={style.policyUp} >Sign up here!</span> </p>
        </div>
        </>
    )
}
export default Login ;