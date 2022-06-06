import { useState } from "react";
import "./UserForm.css"
import Step1 from "./steps/Step1/Step1";
import Step2 from "./steps/Step2/Step2";
import Step3 from "./steps/Step3/Step3";

const UserForm = () => {

  const [userInfos, setUserInfo] = useState({
    step: 1,
    email: '',
    password: '',
    confirmpassword: ''
  });

  const nextStep = () => {
    setUserInfo({
      ...userInfos,
      step: userInfos.step + 1,
    })
  }

  const previousStep = () => {
    setUserInfo({
      ...userInfos,
      step: userInfos.step - 1,
    })
  }

  const manageDisplay = () => {
    if (userInfos.step === 1) {
      return <Step1 nextStep={nextStep}></Step1>
    } else if (userInfos.step === 2) {
      return <Step2></Step2>
    } else {
      return <Step3></Step3>
    }
  }

  const { step, email, password } = userInfos;

  return (
    <div className="form">
      <div className="progressbar"></div>
      <h1 className="header">CREATE YOUR ACCOUNT</h1>
      <h2 className="header-step">This is step { userInfos.step }</h2>
      {manageDisplay()}
    </div>
  )
}

export default UserForm;
