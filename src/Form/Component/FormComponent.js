import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class FormComponent extends React.Component {
    render() {
        return (
            <Grid container direction="row" 
            justify="center" alignItems="center">

                <Paper elevation={3} 
                style={{ width: '80%', padding: 20 }}>

                    <Grid container spacing={3}
                    direction="row">

                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Form Input 1"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Form Input 2"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Form Input 3"
                            />
                        </Grid>
                    </Grid>
                </Paper>
                </Grid>
        )
    }
}

export default FormComponent;