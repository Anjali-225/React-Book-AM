import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {
    const isValid = true;
    return (
    <div>
      <Products />
    </div>
    );
  }
}

export default App;
