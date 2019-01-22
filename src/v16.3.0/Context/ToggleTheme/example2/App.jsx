import {ThemeContext, themes} from './ThemeContext';
import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom'
import ThemeTogglerButton from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  toggleTheme = () => {
      console.log('toggle')
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    console.log('this.state ->',this.state);
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeTogglerButton />
      </ThemeContext.Provider>
    );
  }
}

export default App;