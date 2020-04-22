import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
      </div>
    );
  }
}

export default App;
