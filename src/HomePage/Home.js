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
                [2.91, 101.655],
                [4.61, 101.09],
                [3.42, 101.79],
                [1.47, 103.90],
                [6.40, 100.13],
                [5.93, 116.05],
                [2.28, 111.83],
                [3.79, 103.32],
                [6.17, 102.22]
            ],
            name: [
                'University Malaysia Sabah (UMS)',
                'Kirby International College',
                'Fair Park Ipoh',
                'Genting Highlands',
                'Pasir Gudang',
                'Kampung Perak',
                'Kota Kinabalu International Airport (KKIA)',
                'Miri',
                'Kemunting',
                'Kampung Kok Keli'
            ],
            owner: [
                'Sabah Government',
                'No information',
                'No information',
                'Genting',
                'Johor Bahru',
                'Perak',
                'Malaysia Airport',
                'Sarawak Government',
                'Kuantan',
                'Kota Bharu'
            ],
            income: [
                3000000,
                3000,
                0,
                50000000,
                80,
                6000,
                1,
                7500,
                200,
                13
            ],
            description: [
                'The one and only university in Sabah.',
                'Kirby International College located at Cyberjaya.',
                'Fair Park located in Ipoh.',
                'Genting Highlands, famous tourist attraction in West Malaysia.',
                'Pasir Gudang area.',
                'Kampung Perak beside Kuala Perlis area',
                'International Airport at Kota Kinabalu, Sabah.',
                'Miri City in Sarawak.',
                'Kemunting area in Kuantan.',
                'Kampung Kok Keli in Kota Bharu'
            ],
            member: [
                100,
                20,
                0,
                300,
                5000,
                80,
                2000,
                30000,
                91,
                2500
            ],
            age: [
                25,
                40,
                0,
                50,
                43,
                61,
                80,
                35,
                12,
                67
            ]
        }
    }

    addMarker = e => {
        const { lat, lng } = e.latlng
        const { marker, name, income, description, member, age, mode } = this.state
        marker.push([lat, lng])
        name.push('New Location')
        income.push(0)
        description.push('')
        member.push(0)
        age.push(0)
        mode.push('view')
        this.setState({ marker, name, income, description, member, age, mode })
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

    editHandler = (idx, value1, value2, value3, value4, value5, value6) => {
        let name = [...this.state.name]
        let owner = [...this.state.owner]
        let income = [...this.state.income]
        let description = [...this.state.description]
        let member = [...this.state.member]
        let age = [...this.state.age]
        let mode = [...this.state.mode]

        name[idx] = value1
        owner[idx] = value2
        income[idx] = value3
        member[idx] = value4
        age[idx] = value5
        description[idx] = value6
        mode[idx] = "view"

        this.setState({
            name, owner, income, description, member, age, mode
        })
    }

    deleteHandler = (idx) => {
        let marker = [...this.state.marker]
        let name = [...this.state.name]
        let owner = [...this.state.owner]
        let income = [...this.state.income]
        let description = [...this.state.description]
        let member = [...this.state.member]
        let age = [...this.state.age]
        let mode = [...this.state.mode]

        marker.splice(idx, 1)
        name.splice(idx, 1)
        owner.splice(idx, 1)
        income.splice(idx, 1)
        description.splice(idx, 1)
        member.splice(idx, 1)
        age.splice(idx, 1)
        mode.splice(idx, 1)

        this.setState({
            marker, name, owner, income, description, member, age, mode
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
                                                    member={this.state.member[idx]}
                                                    age={this.state.age[idx]}
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
                                                    description={this.state.description[idx]}
                                                    member={this.state.member[idx]}
                                                    age={this.state.age[idx]} />

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
                                                    member={this.state.member[idx]}
                                                    age={this.state.age[idx]}
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