import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import DrawerComponent from './DrawerComponent';

const drawerWidth = 200;

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: "#2eb82d"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerMobile: {
        //prevent the mobile drawer from overlapping the desktop drawer
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    drawerPaper: {
        width: drawerWidth,
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    }
})

class AppBarComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            anchorE1: null,
            mobileOpen: false
        }
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                    <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => this.setState({ mobileOpen: !this.state.mobileOpen })}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" noWrap>
                            Sample GIS
                        </Typography>
                    </Toolbar>
                </AppBar>

                <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                        <Drawer className={classes.drawerMobile}
                            variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={() => this.setState({ mobileOpen: !this.state.mobileOpen })}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            <DrawerComponent />
                        </Drawer>
                    </Hidden>

                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            <DrawerComponent />
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles)(AppBarComponent);