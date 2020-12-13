import React from 'react';

import Grid from '@material-ui/core/Grid';

import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

class MobileLineChartComponent extends React.Component {

    render() {

        return (
            <Grid container direction="row"
            justify="center" alignItems="center">
                <LineChart width={300} height={300} data={this.props.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                </LineChart>
            </Grid>
        )
    }
}

export default MobileLineChartComponent;