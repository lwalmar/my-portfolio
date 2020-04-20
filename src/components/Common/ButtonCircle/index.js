import React, {Component} from 'react';
import './style.css';

const ButtonSquare = ({
  diameter,
  children
}) => (
  <div
    className="buttonCircle"
    style={{height: diameter, width: diameter, borderRadius: diameter}}
  >
    {children}
  </div>
);

export default ButtonSquare;
