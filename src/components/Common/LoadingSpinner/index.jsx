import React from 'react';
import styles from './style.css';

const LoadingSpinner = () => (
  <div
    className="messageCover_spinner"
  >
    <div className="messageCover_dot" />
    <div className="messageCover_dot" />
    <div className="messageCover_dot" />
  </div>
);

export default LoadingSpinner;
