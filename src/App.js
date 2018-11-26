import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';

import Container from './components/Container/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Contacts
        </header>
        <Container />
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
