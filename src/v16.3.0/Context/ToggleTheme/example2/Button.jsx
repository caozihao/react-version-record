import {ThemeContext} from './ThemeContext';
import React,{Component} from 'react';

class ThemeTogglerButton extends Component{

  static contextType = ThemeContext;

  render (){
    console.log('context->',this.context);
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) =>(
          <button
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}>
            Toggle Theme2
          </button>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeTogglerButton;