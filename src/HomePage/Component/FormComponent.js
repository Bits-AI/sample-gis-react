import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class FormComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            owner: '',
            income: '',
            description: ''
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            owner: this.props.owner,
            income: this.props.income,
            description: this.props.description
        })
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = () => {
        this.props.action(
            this.props.idx,
            this.state.name,
            this.state.owner,
            Number(this.state.income),
            this.state.description
        )
    }

    render() {
        return (
            <React.Fragment>
                <Grid container direction="row"
                    spacing={1} style={{ padding: 10, minWidth: 250 }}>
                    
                    <Grid item xs={12}>
                        <TextField variant="outlined"
                            margin="dense"
                            label="Location Name"
                            multiline
                            fullWidth
                            name="name"
                            value={this.state.name}
                            onChange={this.onChangeHandler}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField variant="outlined"
                            margin="dense"
                            label="Household Name"
                            multiline
                            fullWidth
                            name="owner"
                            value={this.state.owner}
                            onChange={this.onChangeHandler}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField variant="outlined"
                            margin="dense"
                            label="Household Income"
                            name="income"
                            fullWidth
                            type="number"
                            value={this.state.income}
                            onChange={this.onChangeHandler}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField variant="outlined"
                            margin="dense"
                            label="Description"
                            multiline
                            fullWidth
                            name="description"
                            value={this.state.description}
                            onChange={this.onChangeHandler}
                        />
                    </Grid>
                </Grid>

                <Box style={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary"
                        style={{ margin: 5, width: 70 }}
                        onClick={this.submitHandler}>Update</Button>
                    <Button variant="contained" color="secondary"
                        style={{ margin: 5, width: 70 }}
                        onClick={this.props.action2}>Cancel</Button>
                </Box>

            </React.Fragment>
        )
    }
}

export default FormComponent;