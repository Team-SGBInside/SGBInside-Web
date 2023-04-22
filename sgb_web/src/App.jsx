import React, { Component } from 'react';
import Logo from './pages/components/Logo';
import GreenForm from './pages/components/GreenForm';

class App extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <GreenForm/>
      </div>
    );
  }
}

export default App;