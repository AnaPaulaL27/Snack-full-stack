import TextField from "@mui/material/TextField";
import * as React from "react";
import Stack from "@mui/material/Stack";
import "./signup.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const CreateAccount = () => {
  const handleCreateAccountClick = (event) => {
    alert("Thank you! \n \nThanks for signing up. Welcome to our community. We are happy to have you on board.");
  };
  return (
      <div className="parent">
    <div className="signup">
      <form>
        <h1>Sign up</h1>
        <h3>It's quick and easy.</h3>
        <TextField
          label="First name"
          required
          style={{
            minWidth: "200px",
            minHeight: "30px",
          }}
        />
        <TextField
          label="Surname"
          required
          style={{
            minWidth: "200px",
            minHeight: "30px",
          }}
        />
        <br /> <br />
        <TextField
          label="Mobile number or email address"
          required
          style={{
            minWidth: "400px",
            minHeight: "30px",
          }}
        />{" "}
        <br /> <br />
        <TextField
          label="New password"
          required
          type="password"
          style={{
            minWidth: "400px",
            minHeight: "30px",
          }}
        />{" "}
        <br />
        <br />
        <TextField
          id="date"
          label="Date of birth"
          type="date"
          defaultValue="1999-06-16"
          sx={{ width: 200 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="gender"
          label="Gender"
          type="gender"
          placeholder="Male"
          sx={{ width: 200 }}
          InputLabelProps={{
            shrink: true,
          }}
        />{" "}
        <br /> <br />
        <p
          className="paragraph"
          style={{
            margin: "0px 98px",
          }}
        >
          People who use our service may have uploaded your contact information
          to Guide Bite. <a href="https://google.com" target="_blank" >Learn more.</a>
        </p>
        <br />
        <p
          className="paragraph"
          style={{
            margin: "0px 98px",
          }}
        >
          By clicking Sign Up, you agree to our Terms. Learn how we collect, use
          and share your data in our Data Policy and how we use cookies and
          similar technology in our Cookie Policy. You may receive SMS
          notifications from us and can opt out at any time.
        </p> <br /> <br />
        <Link to='/homepage' style={{ textDecoration: 'none' }}>
      <Button
       onClick={handleCreateAccountClick}
        style={{
          borderRadius: 5,
          backgroundColor: "#8bb854",
          fontSize: "20px",
          color: "white",
          minWidth: "250px",
          minHeight: "30px",
        }}
      >
        Create New Account
      </Button>
      </Link>
      </form>
      <br /><br /><br />
    </div>
    <img src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"
    alt="loading"
    className="poster"

    />

    </div >
  );
};

export default CreateAccount;
