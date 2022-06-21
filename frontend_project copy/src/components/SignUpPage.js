import { useState } from "react"
import signInImage from './images/signinImage.png'

const SignUpPage = ({checkAccount}) =>{
    const[inputRegisterUsername, setinputRegisterUsername] = useState()
    const[inputRegisterPassword, setinputRegisterPassword] = useState()
    const[inputRegisterName, setinputRegisterName] = useState()

    function onSubmit(event){
        event.preventDefault()

        if(!inputRegisterUsername || !inputRegisterPassword){
            alert("please add task")
        }


        checkAccount({inputRegisterUsername, inputRegisterPassword})

        setinputRegisterPassword('')
        setinputRegisterUsername('')
        setinputRegisterUsername('')
    }

    const handleRegisterPasswordInput = (e) => {
        setinputRegisterPassword( e.target.value)
    }

    const handleRegisterUsernameInput = (e) => {
        setinputRegisterUsername( e.target.value)
    }

    const handleInputName = (e) => {
        setinputRegisterName( e.target.value)
    }

    return(
        <>
        <div className="signin-container">
            <div className="signin-img-container">
                <img className= "signin-img"src={signInImage}/>
            </div>
            <div className="signin-form-container">
                <h2 id = "signinText">Sign up</h2>

            <form className="signin-form" onSubmit={onSubmit}>
            <p className="signin-label">Name: </p>
                <div className="signin-item">
                        <input className="signinBox"
                         type="text"
                        name="name" 
                        value ={inputRegisterName}
                        onChange = {handleInputName}/>
                
                </div>
      
            <p className="signin-label">Email: </p>
                <div className="signin-item">
                        <input className="signinBox"
                         type="text"
                        name="username" 
                        value ={inputRegisterUsername}
                        onChange = {handleRegisterUsernameInput}/>
                
                </div>

                <p className="signin-label">Password: </p>

                 <div className="signin-item">
                        <input className="signinBox"
                         type="text"
                        name="password" 
                        value ={inputRegisterPassword}
                        onChange = {handleRegisterPasswordInput}/>
                  </div>

                    <button className="button"type ="submit">Sign up</button>
                    </form>
                

            </div>

        </div>
       
        </>
    )
}

export default SignUpPage;