import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class RadioButtonComponent extends React.Component {

    onChangeHandler = event => {
        this.props.action(event.target.value)
    }

    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Select a type of chart.</FormLabel>
                <RadioGroup aria-label="position" name="position"
                    value={this.props.value}
                    onChange={this.onChangeHandler} row>

                    <FormControlLabel
                        value="line"
                        control={<Radio color="primary" />}
                        label="Line Chart"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        value="bar"
                        control={<Radio color="primary" />}
                        label="Bar Chart"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        value="area"
                        control={<Radio color="primary" />}
                        label="Area Chart"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl>
        )
    }
}

export default RadioButtonComponent;