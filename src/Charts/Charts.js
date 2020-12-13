import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import HeaderComponent from './Component/HeaderComponent';
import TableComponent from './Component/TableComponent';
import RadioButtonComponent from './Component/RadioButtonComponent';
import LineChartComponent from './Component/LineChartComponent';
import BarChartComponent from './Component/BarChartComponent';
import AreaChartComponent from './Component/AreaChartComponent';
import MobileAreaChartComponent from './Component/MobileAreaChartComponent';
import MobileBarChartComponent from './Component/MobileBarChartComponent';
import MobileLineChartComponent from './Component/MobileLineChartComponent';

class Charts extends React.Component {
    constructor() {
        super()
        this.state = {
            chart: "line",
            data: [
                {
                    "name": "2010",
                    "amt": 2400
                },
                {
                    "name": "2011",
                    "amt": 2210
                },
                {
                    "name": "2012",
                    "amt": 2290
                },
                {
                    "name": "2013",
                    "amt": 2000
                },
                {
                    "name": "2014",
                    "amt": 2181
                },
                {
                    "name": "2015",
                    "amt": 2500
                },
                {
                    "name": "2016",
                    "amt": 2100
                },
                {
                    "name": "2017",
                    "amt": 4300
                },
                {
                    "name": "2018",
                    "amt": 3908
                },
                {
                    "name": "2019",
                    "amt": 1398
                },
                {
                    "name": "2020",
                    "amt": 2181
                }
            ]
        }
    }

    chartHandler = (value) => {
        this.setState({
            chart: value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Hidden smUp implementation="css">
                    <div>
                    <br />
                        <HeaderComponent />
                        <br />

                        <RadioButtonComponent
                        value={this.state.chart}
                        action={this.chartHandler} />

                        {this.state.chart === "line" ?

                        <MobileLineChartComponent
                        data={this.state.data} />

                        :

                        this.state.chart === "bar" ?
                        <MobileBarChartComponent
                        data={this.state.data} />
                        :

                        this.state.chart === "area" ?
                        <MobileAreaChartComponent
                        data={this.state.data} />
                        :

                        null
                    }
                        <br />

                        <TableComponent
                        data={this.state.data} />
                    </div>
                </Hidden>

                <Hidden xsDown implementation="css">
                    <div style={{ paddingLeft: 200 }}>
                        <br />
                        <HeaderComponent />
                        <br />

                        <RadioButtonComponent
                        value={this.state.chart}
                        action={this.chartHandler} />

                        {this.state.chart === "line" ?

                        <LineChartComponent
                        data={this.state.data} />

                        :

                        this.state.chart === "bar" ?
                        <BarChartComponent
                        data={this.state.data} />
                        :

                        this.state.chart === "area" ?
                        <AreaChartComponent
                        data={this.state.data} />
                        :

                        null
                    }
                        <br />

                        <TableComponent
                        data={this.state.data} />

                    </div>
                </Hidden>

            </React.Fragment>
        )
    }
}

export default Charts;