import React from 'react';

import Typography from "@material-ui/core/Typography";

class HeaderComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h4">
                    Sample Graphing Tool
                </Typography>
                <br />
                <Typography variant="subtitle1">
                    This is a sample page of graphing tool for presentation purpose.
                </Typography>
            </React.Fragment>
        )
    }
}

export default HeaderComponent;