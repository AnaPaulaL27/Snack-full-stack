import React, { useState } from "react";
import "./App.module.css";
import Modal from "./Modal";
import "./signup.css";

const ForgottenPassword= () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className="button" onClick={() => setIsOpen(true)}>
        Forgot Password
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  
  );
};

export default ForgottenPassword;


// className={styles.primaryBtn}