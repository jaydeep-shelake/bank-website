import {TailSpin} from "react-loader-spinner";
import React from 'react';
export default class App extends React.Component {
  //other logic
  render() {
    return (
        <TailSpin type="TailSpin" color="#fff" height={20} width={20} 
        />
    );
  }
}