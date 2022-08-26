
import style from "./signUp.module.css"

// export default SignUp ;
import { useState } from 'react';
 
export default function Form() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
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
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className={style.successUp}
        style={{
          display: submitted ? '' : 'none',
        }}>
            
        <p> {name} successfully registered!!</p>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className={style.errUp}
        style={{
          display: error ? '' : 'none',
        }}>
        <p>Please enter all the fields</p>
      </div>
    );
  };
 
  return (
    <div className={style.formUp}>
      <div>
      <h4 className={style.freeH1}>Sign up for a FREE DeskTime trial</h4>
 <p className={style.startT}>Start tracking your productivity in less than a minute!</p>

      </div>
 
      {/* Calling to the methods */}
      <div className={style.messageUp}>
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form >
        {/* Labels and inputs for form data */}
        <div className={style.centrFormUp}>
        <label className={style.labelUp}>Name</label>
        <input onChange={handleName} className={style.inputUp}
          value={name} type="text"  placeholder="Type in your first  and last name"/>
 
        <label className={style.labelUp}>Email</label>
        <input onChange={handleEmail} className={style.inputUp}
          value={email} type="email" placeholder="Type in your email address" />
 
        <label className={style.labelUp}>Password</label>
        <input onChange={handlePassword} className={style.inputUp}
          value={password} type="password"  placeholder="Create your password"/>
 
        <button onClick={handleSubmit} className={style.btnUp} type="submit">
          SIGN UP FOR FREE
        </button>
        <p className={style.termsUp}>Try free for 14 days. No credit card required.</p>
        <p className={style.termsUp} >By signing up, you agree to our <span className={style.policyUp}> terms</span> and <span className={style.policyUp}>privacy</span> </p>
        <p className={style.policyUp} >policy</p>
        </div>
      </form>
    </div>
  );
}