import React, { Component } from 'react';
import Button from './components/BooleanButton';
import { PrimaryButton, SecondaryButton } from './components/HigherOrderComponentButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button primary outline> Click me! </Button>
        <PrimaryButton outline> Click me! </PrimaryButton>

        <Button secondary> Click me! </Button>
        <SecondaryButton> Click me! </SecondaryButton>
      </div>
    );
  }
}

export default App;
