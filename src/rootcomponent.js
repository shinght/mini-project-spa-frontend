import React from 'react';
import Content from './content';
import Menu from './menu';

function RootComponentSPA() {
    return ( 
        <div>
            <h1>I will be SPA!</h1>
            <div>
                <Menu></Menu>
            </div>
            <div>
                <Content></Content>
            </div>
        </div>
     );
}

export default RootComponentSPA;