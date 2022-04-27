import React from 'react';

const Login = (props) => { 
    

    const { 
        email,
         setEmail,
          password,
           setPassword,
            handleLogin,
             handleSignup,
              hasAccount,
               setHasAccount,
                emailError,
                 passwordError} = props;
     

    return (
        <section className='login'>

        <div className="loginContainer">
            <label>Email</label>
            <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
            <p className='errorMsg'>{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <p className="errorMsg">{passwordError}</p>



            <div className="btnContainer">
                {hasAccount ? (
                    <div className="hasAccountContainer">
                        <button onClick={handleLogin}>Sign In</button>
                        <p className='notHaveAnAccount'>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                    </div>
                ) : (
                    <div className="NotHasAccountContainer">
                    <button onClick={handleSignup}>Sign Up</button>
                    <p className='haveAnAccount'>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                     </div>
                )}
            </div>



        </div>
        </section>
    )
}

export default Login;