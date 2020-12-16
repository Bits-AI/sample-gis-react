import React from 'react';

import { withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import BarChartIcon from '@material-ui/icons/BarChart';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    nested: {
        paddingLeft: theme.spacing(4),
    },
    nestedTwice: {
        paddingLeft: theme.spacing(6)
    },
    text: {
        textAlign: 'center',
        paddingBottom: 20
    }
});

class DrawerComponent extends React.Component {
    render() {
        const { classes } = this.props

        return (
            <div>
                <div className={classes.toolbar} />

                <List component="nav">
                    <ListItem button
                        onClick={() => this.props.history.push({ pathname: '/' })}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <Divider />

                    <ListItem button
                        onClick={() => this.props.history.push({ pathname: '/Form' })}>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Form" />
                    </ListItem>

                    <Divider />

                    <ListItem button
                        onClick={() => this.props.history.push({ pathname: '/Charts' })}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Charts" />
                    </ListItem>

                    <Divider />
                    <p style={{ padding: 10, textAlign: 'left' }}>Tips: <br />
                    1. <b>Double Click </b> on the map to add a new marker.<br />
                    2. <b>Scroll the mousewheel</b> to zoom in and out of the map.<br />
                    3. <b>Drag the cursor while holding down mouse key</b> to navigate the map.<br />
                    4. Data will <b>not be stored</b> outside browser session.<br />
                    5. <b>Refresh the webpage</b> if the web app does not adjust the UI responsively.
                    </p>

                </List>

                <div style={{ position: 'relative', top: '10%'}}>
                    <p>
                    Developed by Nicholas Chin
                    </p>
                    <p style={{ textAlign: "left", paddingLeft: '0.6rem' }}>
                    Designed with: ReactJS
                    </p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(DrawerComponent));