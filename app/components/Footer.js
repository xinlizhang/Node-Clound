import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var style = {
    backgroundColor: "#00BCD4",
    color: "#FFF",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    border: "10px",
    left: "0",
    bottom: "0",
    height: "160px",
    width: "100%",
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const style_con = {
	backgroundColor: "#00BCD4",
    color: "#FFF",
    border: "0px",
  	display: 'inline-block',
  	margin: '16px 32px 16px 0',
}
const footerfont = {
	 color: "#FFF",
}

const Footer = React.createClass({
    render: function() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                <MuiThemeProvider>
                    <Paper style={style_con}>
				      <Menu desktop={true} width={256} >
				        <MenuItem primaryText="React" secondaryText="" style={footerfont} />
				        <MenuItem primaryText="React Dom" secondaryText="" style={footerfont} />
				        <MenuItem primaryText="React Router" secondaryText="" style={footerfont} />
				      </Menu>
				    </Paper>
				</MuiThemeProvider>

				<MuiThemeProvider>
                    <Paper style={style_con}>
				      <Menu desktop={true} width={256}>
				        <MenuItem primaryText="Webpack" secondaryText=""  style={footerfont} />
				        <MenuItem primaryText="Gulp" secondaryText=""  style={footerfont}/>
				        <MenuItem primaryText="Node.js" secondaryText="" style={footerfont}/>
				      </Menu>
				    </Paper>
				</MuiThemeProvider>
				<MuiThemeProvider>
                    <Paper style={style_con}>
				      <Menu desktop={true} width={256}>
				        <MenuItem primaryText="Material-UI" secondaryText="" style={footerfont}/>
				        <MenuItem primaryText="Express" secondaryText="" style={footerfont}/>
				        <MenuItem primaryText="Fulx" secondaryText="" style={footerfont}/>
				      </Menu>
				    </Paper>
				</MuiThemeProvider>
				<MuiThemeProvider>
                    <Paper style={style_con}>
				      <Menu desktop={true} width={256}>
				        <MenuItem primaryText="Bower" secondaryText="" style={footerfont}/>
				        <MenuItem primaryText="BluxMix" secondaryText="" style={footerfont}/>
				        <MenuItem primaryText="Waston" secondaryText="" style={footerfont}/>
				      </Menu>
				    </Paper>
				</MuiThemeProvider>
                </div>
            </div>
        );
    }
});

export default Footer;



 





