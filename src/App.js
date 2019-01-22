import React, { Component } from 'react';
import './App.css';
// v.16.3
import DevTools from './v16.3.0/LifeCycle/DevTools.jsx';
import ContextApp from './v16.3.0/Context/Context.jsx';
import ToggleTheme1 from './v16.3.0/Context/ToggleTheme/example1/App.jsx';
import ToggleTheme2 from './v16.3.0/Context/ToggleTheme/example2/App.jsx';
// v.16.4
import Point from './v16.4.0/Point.jsx';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <DevTools /> */}
          {/* <ToggleTheme1 /> */}
          <ToggleTheme2 />
          {/* <Point /> */}
      </div>
    );
  }
}

export default App;
