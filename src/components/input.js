import React from 'react';

export default function Input(props) {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input type="number" min={props.min} max={props.max} value={props.value} onChange={event => props.onChange(event)}></input>
    </div>
  );
}
