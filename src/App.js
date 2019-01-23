import React, { Component } from 'react';
import './App.css';
// v.16.3
import DevTools from './v16.3.0/LifeCycle/DevTools.jsx';
import ContextApp from './v16.3.0/Context/base/Context.jsx';
import ToggleTheme1 from './v16.3.0/Context/ToggleTheme/example1/App.jsx';
import ToggleTheme2 from './v16.3.0/Context/ToggleTheme/example2/App.jsx';
// v.16.4
import Point from './v16.4.0/Point.jsx';
// v16.6
import MemoApp from './v16.6.0/memo/App.jsx';
import SuspenseApp from './v16.6.0/Suspense/App';
// coming soon ...
import OriginHooks from './v16.7.0/Hooks/Origin.jsx';
import Hooks from './v16.7.0/Hooks/Hooks.js';
import DisplayHook from './v16.7.0/Hooks/example/App';

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
          {/* <ToggleTheme2 /> */}
          {/* <Point /> */}
          {/* <MemoApp /> */}
          {/* <SuspenseApp /> */}
          {/* <OriginHooks /> */}
          <Hooks />
          {/* <DisplayHook /> */}
      </div>
    );
  }
}

export default App;
