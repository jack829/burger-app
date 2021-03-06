import React from 'react';
import {
  BuildControl,
  Label,
  More,
  Less } from './BuildControl.css';

const buildControl = (props) => (
  <div className={BuildControl}>
    <div className={Label}>{props.label}</div>
    <button className={Less} onClick={props.remove} disabled={props.removeDisabled}>Remove</button>
    <button className={More} onClick={props.add} disabled={props.addDisabled}>Add</button>
  </div>
);

export default buildControl;
