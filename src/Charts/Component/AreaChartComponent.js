import React from 'react';

import Grid from '@material-ui/core/Grid';

import { AreaChart, Area, Tooltip, XAxis, YAxis } from 'recharts';

class AreaChartComponent extends React.Component {

    render() {

        return (
            <Grid container direction="row"
            justify="center" alignItems="center">
                <AreaChart width={1000} height={400} data={this.props.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area dataKey="amt" stroke="#8884d8"
                    fillOpacity={1} />
                </AreaChart>
            </Grid>
        )
    }
}

export default AreaChartComponent;