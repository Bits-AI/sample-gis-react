import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class TableComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="subtitle1"
                style={{ textAlign: "center" }}>
                    {this.props.name}
                    </Typography>

                    <Grid container direction="row"
                    spacing={1} style={{ padding: 10, minWidth: 250 }}>
                        <Grid item xs={6} style={{ textAlign: "left" }}>
                            Coordinates
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                            {this.props.marker[0].toFixed(2)},{this.props.marker[1].toFixed(2)}
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: "left" }}>
                            Household Name
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                            {this.props.owner}
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: "left"}}>
                            Household Income
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right "}}>
                            RM {this.props.income.toFixed(2)}
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: "left" }}>
                            Description
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                            {this.props.description}
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: "left" }}>
                            No. of Household Members
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                            {this.props.member}
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: "left" }}>
                            Age
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                            {this.props.age}
                        </Grid>
                    </Grid>

            </React.Fragment>
        )
    }
}

export default TableComponent;