import React from 'react';
import "./SidePanel.css";
import {Link } from "react-router-dom";


export default class SidePanel extends React.Component {
  constructor() {
    super();
    this.state = {
      isSideBar: false
    }
  };
  handleSidebar() {
    this.setState({
      sideBar: !this.state.sideBar
    });
  }
  render() {
    return(
      <div>
         
         <div className="sidenav">
         <div className="center">
            <div className="white">
             <h2>
               School:XYZ
             </h2>
           </div>
           <div className="text1">
               <Link to={{ pathname: '/class', state: { foo: 'bar'} }}>Class 1</Link>
               <Link to={'/class'}>Class 2</Link>
               <Link to={'/class'}>Class 3</Link>
               <Link to={'/class'}>Class 4</Link>
               <Link to={'/class'}>Class 5</Link>
               <Link to={'/class'}>Class 6</Link>
           </div>
         </div>
      </div>
      </div>
    );
  }
}

