import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  navBarbut: {
    position: "relative",
    right: "30%",
    top: "15px",
  },
  button: {
        marginLeft: "20px",
  },
  RightBut: {
    right: "-1424%",
    position: "relative",

  }
};

function  RightDropDownBut() {
  return (
    <div style={styles.RightBut}>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>
    );
}

function NavBarButList() {
  return(
       <div style={styles.navBarbut}>
          <RaisedButton
            label="Home"
            labelPosition="before"
            primary={true}
            style={styles.button}
            href="#/"
          />
          <RaisedButton
            href="#/chat"
            target=""
            label="Room"
            primary={true}
            style={styles.button}
          />
          <RaisedButton
            href="#/app"
            target=""
            label="BluxMix"
            primary={true}
            style={styles.button}
          />
        <RaisedButton
            href="#/Table"
            target=""
            label="Cloudant"
            primary={true}
            style={styles.button}
          />
        <RaisedButton
            href="#/Json"
            target=""
            label="Json"
            primary={true}
            style={styles.button}
          />

          <RaisedButton
            href="#/app"
            target=""
            label="Salesconnect"
            secondary={true}
            style={styles.button}
          />
        </div>
    );

}


const Navbar = () => (
  <MuiThemeProvider>
  <AppBar
    title={<span>Evan's React</span>}
    children = {<NavBarButList />}
    iconElementRight={<RightDropDownBut />}
  />
  </MuiThemeProvider>
);


export default Navbar;