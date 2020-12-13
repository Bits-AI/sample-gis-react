import React from 'react';

import Grid from '@material-ui/core/Grid';

import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

class LineChartComponent extends React.Component {

    render() {

        return (
            <Grid container direction="row"
            justify="center" alignItems="center">
                <LineChart width={1000} height={400} data={this.props.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                </LineChart>
            </Grid>
        )
    }
}

export default LineChartComponent;