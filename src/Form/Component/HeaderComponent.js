import React from 'react';

import Typography from '@material-ui/core/Typography';

class HeaderComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h4">
                    Sample Online Forms
                </Typography>
                <br />
                <Typography variant="subtitle1">
                    This is a sample page of form input for presentation purpose.
                </Typography>
            </React.Fragment>
        )
    }
}

export default HeaderComponent;