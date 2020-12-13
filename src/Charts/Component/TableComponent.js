import React from 'react';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class TableComponent extends React.Component {
    render() {
        return (
            <Grid container direction="row"
                justify="center" alignItems="center">

                <Table style={{ width: 400 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ textAlign: "center" }}>Year (X Axis)</TableCell>
                            <TableCell style={{ textAlign: "center" }}>Amount (Y Axis)</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.props.data.map(x => (
                            <TableRow key={x.name}>
                                <TableCell style={{ textAlign: "center" }}>{x.name}</TableCell>
                                <TableCell style={{ textAlign: "center" }}>{x.amt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        )
    }
}

export default TableComponent;