import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import React, { useState } from "react";


const Modal = ({ setIsOpen }) => {

  // Change button color on click
  const [isActive, setIsActive] = useState(false);

  //change button text onclick

 const [buttonText, setButtonText] = useState('Send reset link');


  // Send reset link alert
  //handle function:
  const handleResetClick = (event) => {
  
    alert("You will now receive a reset link...");
    setIsActive(current => !current);
    setButtonText('Link sent!');

  }

    return (
        <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Forgotten Password</h5>
            </div>
            <hr/>
            <button 
            
            className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>

            <div className={styles.modalContent}>
           <br/>
          <div>
           <form>
              <div id="email-prompt"> Enter your email address for your account  and we'll send a reset link.</div>
              <p>The single-use link will <b>expire</b> after 24 hours.</p>
              <label>Email Address*:
       
                <div id="input">
                <br/>
                <input   style={{
                    minWidth: "200px",
                    minHeight: "30px",
                   }} id='input'type="email" placeholder="JohnSmith@gmail.com"/>
                </div>
              </label>
          </form>
         </div>
         </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                
                
                <button  style={{
                    borderRadius: 5,
                    fontSize: "16px",
                    backgroundColor: isActive ? 'greenyellow' : '',
                    color: isActive ? 'blue' : '',
          
                    }
                    } className={styles.resetBtn} onClick={handleResetClick} >{buttonText}
                  {/* Send reset link */}

                </button>
                <button
                 style={{
                  borderRadius: 5,
                  fontSize: "16px",
                  
                }}
                  className={styles.cancelBtn} onClick={() => setIsOpen(false) }>
                  Back to sign in

                </button>
              </div>
            </div>
          </div>
         
        </div>
        
      </>

    );
};

export default Modal;