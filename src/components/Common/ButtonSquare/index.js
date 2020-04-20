import React, {Component} from 'react';
import './style.css';

const ButtonSquare = ({
  width,
  children
}) => (
  <div
    className="buttonSquare"
    width={width}
    length={width}
  >
    {children}
  </div>
);

export default ButtonSquare;
