import React from "react";
import SigninComponent from "../component/SigninComponent";
import './signin_up.css'

const Signin = () => {
  return (
    <React.Fragment>
      <div className="box">
      <h1 className="text-center  mt-10">SignIn</h1>
      <hr />
      <div className="row ">
        <div className="col-md-10 offset-md-3 signin">
          <SigninComponent />
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;