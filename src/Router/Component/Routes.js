import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import NavigationFrame from './NavigationFrame';

const styles = theme => ({
    toolbar: theme.mixins.toolbar
})

class Routes extends React.Component {
    render() {
        const { classes } = this.props
        const Component = this.props.component

        return (
            <React.Fragment>
                <NavigationFrame />
                <div className={classes.toolbar} />
                <Component />
            </React.Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Routes);