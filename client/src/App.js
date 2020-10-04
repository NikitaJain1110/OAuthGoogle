import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
          {/* <a href="http://localhost:4000/auth/google">Sign Up with Google</a> */}
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
      </BrowserRouter>
    );
  }
}

export default App;
