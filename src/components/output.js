import React from 'react';

export default function Output(props) {
  let catagory
  if (props.bmi < 18.5) catagory = 'Underweight';
  else if (props.bmi < 24.9) catagory = 'Normal';
  else if (props.bmi < 29.9) catagory = 'Overweight';
  else catagory = 'Obese';
  return (
    <div className="output">
      <p>BMI = <span>{props.bmi}</span></p>
      <p>You are <span>{catagory}</span></p>
    </div>
  );
}
