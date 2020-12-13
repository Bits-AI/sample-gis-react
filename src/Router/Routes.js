import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from './Component/Routes';

import Home from '../HomePage/Home';
import Form from '../Form/Form';
import Charts from '../Charts/Charts'

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Routes exact path="/" component={Home}></Routes>
                <Routes exact path="/Form" component={Form}></Routes>
                <Routes exact path="/Charts" component={Charts}></Routes>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;