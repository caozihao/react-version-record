import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import ThemeContext from './ThemeContext';


const topStyle = {
  background: 'green', 
  color: 'white'
}

class App extends Component{
  render (){
    return (
      <ThemeContext.Provider value={topStyle}>
        <Header />
      </ThemeContext.Provider>
    )
  }
}

export default App;