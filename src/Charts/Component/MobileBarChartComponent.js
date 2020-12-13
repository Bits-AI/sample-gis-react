import React from 'react';

import Grid from '@material-ui/core/Grid';

import { BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';

class MobileBarChartComponent extends React.Component {

    render() {

        return (
            <Grid container direction="row"
            justify="center" alignItems="center">
                <BarChart width={300} height={300} data={this.props.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amt" fill="#8884d8" />
                </BarChart>
            </Grid>
        )
    }
}

export default MobileBarChartComponent;