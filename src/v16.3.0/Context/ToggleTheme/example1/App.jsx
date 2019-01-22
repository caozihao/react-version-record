import {ThemeContext, themes} from './ThemeContext';
import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom'
import ThemedButton from './Button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme1
    </ThemedButton>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
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
    return (
      <Fragment>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </Fragment>
    );
  }
}

export default App;