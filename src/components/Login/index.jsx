import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { isValidEmail } from "utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAccess = () => {
    if (isValidEmail(email)) {
        window.location.href = 'https://app.loch.one/welcome';
    }else{
        setError("Please enter a valid email !")
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <h3>Sign up for exclusive access.</h3>
        <Input
          className="login-input"
          type="email"
          placeholder={"Your email address"}
          onChange={(e) => handleEmail(e)}
        />

        <Button onClick={handleAccess}>
          Get Started
        </Button>
      {error && <span className="error">{error}</span>}
        <span>You’ll receive an email with an invite link to join.</span>
      </div>
    </div>
  );
};

export default Login;
