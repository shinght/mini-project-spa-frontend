import React from 'react';
import ReactDOM from 'react-dom';
import RootComponentSPA from './rootcomponent';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <RootComponentSPA></RootComponentSPA>
    </HashRouter>
        , document.getElementById("root"))