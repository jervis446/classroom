import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import LayoutClass from './components/LayoutClass/LayoutClass';
import { CLASS } from './shared/classdata.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
   // Use this data to render this page
    return (
      <Router>
        <Route exact path="/" component={Layout} />
        <Route path="/class" component={LayoutClass} />
    </Router>
     
    );
  }
}
