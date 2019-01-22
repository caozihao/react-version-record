import React, { Component,lazy,Suspense } from 'react';
import './App.css';

const DynamicComponent = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./v16.7/A'));
    }, 3000);
  });
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  genFallBack = () => {
    return <div>loading...</div>;
  }

  render() {
    return (
      <Suspense fallback={this.genFallBack()}>
          <DynamicComponent />
      </Suspense>
    );
  }
}

export default App;
