import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 500,
  width: "98%",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends React.Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
      <Paper style={style} zDepth={5} />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;