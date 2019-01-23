import React, { Component,lazy,Suspense } from 'react';

const DynamicComponent = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./Bar.jsx'));
    }, 2000);
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
