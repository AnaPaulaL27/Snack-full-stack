import { useState } from "react"
import signInImage from './images/signinImage.png'

const SignInPage = ({checkAccount}) =>{
    const[inputUsername, setinputUsername] = useState()
    const[inputPassword, setinputPassword] = useState()

    function onSubmit(event){
        event.preventDefault()

        if(!inputUsername || !inputPassword){
            alert("please add task")
        }


        checkAccount({inputUsername, inputPassword})

        setinputPassword('')
        setinputUsername('')
    }

    const handlePasswordInput = (e) => {
        setinputPassword( e.target.value)
    }

    const handleUsernameInput = (e) => {
        setinputUsername( e.target.value)
    }

    return(
        <>
        <div className="signin-container">
            <div className="signin-img-container">
                <img className= "signin-img"src={signInImage}/>
            </div>
            <div className="signin-form-container">
                <h2 id = "signinText">Sign in</h2>

            <form className="signin-form" onSubmit={onSubmit}>
                <div className="signin-item">
                        <label className="signin-label">Email: </label>
                        <input className="signinBox"
                         type="text"
                        name="username" 
                        value ={inputUsername}
                        onChange = {handleUsernameInput}/>
                
                </div>
                 <div className="signin-item">
                     <label className="signin-label">Password: </label>
                        <input className="signinBox"
                         type="text"
                        name="password" 
                        value ={inputPassword}
                        onChange = {handlePasswordInput}/>
                  </div>

                    <button className="button"type ="submit">Login in</button>
                    </form>
                

            </div>

        </div>
       
        </>
    )
}

export default SignInPage;