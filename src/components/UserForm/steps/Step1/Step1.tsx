import React from 'react';

interface IProps {
  nextStep: () => void
}

const Step1 = (props: IProps) => {
  const {nextStep} = props

  return (
    <div className="step-container">
      <input type="text" name="email" placeholder="E-mail"></input>
      <input type="password" name="password" placeholder="Password"></input>
      <button onClick={() => nextStep} ></button>
    </div>
  );
};

export default Step1;
