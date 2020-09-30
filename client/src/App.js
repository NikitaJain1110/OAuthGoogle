import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* http://locahost:4000 */}
          <a href="http://localhost:4000/auth/google">Sign Up with Google</a>
      </div>
    );
  }
}

export default App;
