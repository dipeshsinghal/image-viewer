import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
// import logo from './logo.svg';

class Header extends Component {
   render() {
       return (
           <div className="header">
               <div className="title">Image Viewer</div>
           </div>
       )
   }
}

export default Header;