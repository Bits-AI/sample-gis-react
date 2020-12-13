import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';

import AppBarComponent from './AppBarComponent';

const styles = () => ({
    root: {
        display: 'flex',
    }
});

class NavigationFrame extends React.Component {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBarComponent />
                
            </div>
        )
    }
}

export default withStyles(styles)(NavigationFrame);