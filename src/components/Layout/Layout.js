import React from 'react';

import { CLASS } from '../../shared/classdata.js';

import MainPanel from '../MainPanel/MainPanel';
import SidePanel from '../SidePanel/SidePanel';
import "./Layout.css";

export default class Layout extends React.Component {
   constructor(props){
         super(props);
         this.state={
            class:CLASS
         }
     }
 render() {
    return(
      <div>
        <SidePanel class={this.state.class}/>
         <MainPanel/>

      </div>
    );
  }
}
