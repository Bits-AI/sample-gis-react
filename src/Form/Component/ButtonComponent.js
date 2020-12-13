import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class ButtonComponent extends React.Component {
    render() {
        return (
            <Box style={{ textAlign: "center" }}>
                <Button variant="contained" color="primary"
                    style={{ margin: 5, width: 200 }}>Submit Button</Button>
                <Button variant="contained" color="secondary"
                    style={{ margin: 5, width: 200 }}>Cancel Button</Button>
            </Box>
        )
    }
}

export default ButtonComponent;