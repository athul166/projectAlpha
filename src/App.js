import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <Paper>
          <AppBar
            style={{'margin':'-8px','width':'auto','backgroundColor': 'rgb(29, 66, 71)'}}
            title="Title"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer
            width={250}
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})}
          >
            <AppBar title="Title"
              style={{'backgroundColor': 'rgb(29, 66, 71)'}}
              onLeftIconButtonTouchTap={this.handleToggle}
            />
          </Drawer>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
