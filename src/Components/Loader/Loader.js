import Loader from 'react-loader-spinner';
import { Component } from 'react';
import './loader.css';

export class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        className="spinner"
        type="Oval"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }
}
