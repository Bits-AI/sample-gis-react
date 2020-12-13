import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import TableComponent from './Component/TableComponent';
import FormComponent from './Component/FormComponent';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            defaultLatLng: [
                3.07436, 108.11703
            ],
            zoom: 6,

            mode: [
                'view',
                'view'
            ],

            marker: [
                [6.039, 116.12],
                [2.91, 101.655]
            ],
            name: [
                'University Malaysia Sabah (UMS)',
                'Kirby International College'
            ],
            owner: [
                'Sabah Government',
                'No information'
            ],
            income: [
                3000000,
                3000
            ],
            description: [
                'The one and only university in Sabah.',
                'Kirby International College located at Cyberjaya.'
            ]
        }
    }

    addMarker = e => {
        const { lat, lng } = e.latlng
        const { marker, name, income, description, mode } = this.state
        marker.push([lat, lng])
        name.push('New Location')
        income.push(0)
        description.push('')
        mode.push('view')
        this.setState({ marker, name, income, description, mode })
    }

    modeSwitch_edit = (idx) => {
        let mode = [...this.state.mode]

        mode[idx] = "edit"
        this.setState({ mode })
    }

    modeSwitch_view = (idx) => {
        let mode = [...this.state.mode]

        mode[idx] = "view"
        this.setState({ mode })
    }

    editHandler = (idx, value1, value2, value3, value4) => {
        let name = [...this.state.name]
        let owner = [...this.state.owner]
        let income = [...this.state.income]
        let description = [...this.state.description]
        let mode = [...this.state.mode]

        name[idx] = value1
        owner[idx] = value2
        income[idx] = value3
        description[idx] = value4
        mode[idx] = "view"

        this.setState({
            name, owner, income, description, mode
        })
    }

    deleteHandler = (idx) => {
        let marker = [...this.state.marker]
        let name = [...this.state.name]
        let owner = [...this.state.owner]
        let income = [...this.state.income]
        let description = [...this.state.description]
        let mode = [...this.state.mode]

        marker.splice(idx, 1)
        name.splice(idx, 1)
        owner.splice(idx, 1)
        income.splice(idx, 1)
        description.splice(idx, 1)
        mode.splice(idx, 1)

        this.setState({
            marker, name, owner, income, description, mode
        })
    }

    render() {

        return (
            <React.Fragment>
                <Hidden smUp implementation="css">
                    <div>

                        <MapContainer style={{ height: window.innerHeight - 64, width: window.innerWidth }}
                            center={this.state.defaultLatLng}
                            zoom={4}
                            doubleClickZoom={false}
                            whenReady={(map) => {
                                map.target.on("dblclick", e => this.addMarker(e))
                            }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                            </TileLayer>

                            {this.state.marker.map((position, idx) =>
                                <Marker key={idx} position={position}>
                                    <Popup>
                                        {this.state.mode[idx] === "view" ?
                                            <React.Fragment>
                                                <TableComponent
                                                    name={this.state.name[idx]}
                                                    marker={this.state.marker[idx]}
                                                    owner={this.state.owner[idx]}
                                                    income={this.state.income[idx]}
                                                    description={this.state.description[idx]} />

                                                <Box style={{ textAlign: "center" }}>
                                                    <Button variant="contained" color="primary"
                                                        style={{ margin: 5, width: 70 }}
                                                        onClick={() => this.modeSwitch_edit(idx)}>Edit</Button>
                                                    <Button variant="contained" color="secondary"
                                                        style={{ margin: 5, width: 70 }}
                                                        onClick={() => this.deleteHandler(idx)}>Delete</Button>
                                                </Box>
                                            </React.Fragment>

                                            :
                                            <React.Fragment>
                                                <FormComponent
                                                    idx={idx}
                                                    name={this.state.name[idx]}
                                                    owner={this.state.owner[idx]}
                                                    income={this.state.income[idx]}
                                                    description={this.state.description[idx]}
                                                    action={this.editHandler}
                                                    action2={() => this.modeSwitch_view(idx)} />

                                            </React.Fragment>
                                        }
                                    </Popup>

                                </Marker>
                            )}

                        </MapContainer>
                    </div>
                </Hidden>

                <Hidden xsDown implementation="css">
                    <div style={{ paddingLeft: 200 }}>
                        <MapContainer style={{ height: window.innerHeight - 64, width: window.innerWidth - 200 }}
                            center={this.state.defaultLatLng}
                            zoom={this.state.zoom}
                            doubleClickZoom={false}
                            whenReady={(map) => {
                                map.target.on("dblclick", e => this.addMarker(e))
                            }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                            </TileLayer>

                            {this.state.marker.map((position, idx) =>
                                <Marker key={idx} position={position}>
                                    <Popup>

                                        {this.state.mode[idx] === "view" ?
                                            <React.Fragment>
                                                <TableComponent
                                                    name={this.state.name[idx]}
                                                    marker={this.state.marker[idx]}
                                                    owner={this.state.owner[idx]}
                                                    income={this.state.income[idx]}
                                                    description={this.state.description[idx]} />

                                                <Box style={{ textAlign: "center" }}>
                                                    <Button variant="contained" color="primary"
                                                        style={{ margin: 5, width: 70 }}
                                                        onClick={() => this.modeSwitch_edit(idx)}>Edit</Button>
                                                    <Button variant="contained" color="secondary"
                                                        style={{ margin: 5, width: 70 }}
                                                        onClick={() => this.deleteHandler(idx)}>Delete</Button>
                                                </Box>
                                            </React.Fragment>

                                            :
                                            <React.Fragment>
                                                <FormComponent
                                                    idx={idx}
                                                    name={this.state.name[idx]}
                                                    owner={this.state.owner[idx]}
                                                    income={this.state.income[idx]}
                                                    description={this.state.description[idx]}
                                                    action={this.editHandler}
                                                    action2={() => this.modeSwitch_view(idx)} />

                                            </React.Fragment>

                                        }

                                    </Popup>

                                    <Tooltip>
                                        {this.state.name[idx]}
                                        <br />
                                Lat: {this.state.marker[idx][0].toFixed(2)}&nbsp;&nbsp;
                                Lng: {this.state.marker[idx][1].toFixed(2)}
                                        <br />
                                Click on the marker
                                <br />to view more information
                            </Tooltip>
                                </Marker>
                            )}

                        </MapContainer>
                    </div>
                </Hidden>
            </React.Fragment>
        )
    }
}

export default Home;