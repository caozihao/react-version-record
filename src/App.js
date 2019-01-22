import React, { Component,lazy,Suspense } from 'react';
import './App.css';
import Point from './v16.4.0/Point.jsx';
import DevTools from './v16.5.0/DevTools.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Point /> */}
        <DevTools />
      </div>
    );
  }
}

export default App;
