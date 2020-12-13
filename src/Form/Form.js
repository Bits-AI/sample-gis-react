import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import HeaderComponent from './Component/HeaderComponent';
import FormComponent from './Component/FormComponent';
import ButtonComponent from './Component/ButtonComponent';

class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hidden smUp implementation="css">
                    <div>
                        <br />
                        <HeaderComponent />
                        <br />
                        <FormComponent />
                        <br />
                        <ButtonComponent />
                    </div>

                </Hidden>

                <Hidden xsDown implementation="css">
                    <div style={{ paddingLeft: 200 }}>
                        <br />
                        <HeaderComponent />
                        <br />
                        <FormComponent />
                        <br />
                        <ButtonComponent />
                    </div>
                </Hidden>

            </React.Fragment>
        )
    }
}

export default Form;