'use strict'
import React from 'react';
import {render} from 'react-dom';

import Home from './components/surveyComponent.jsx';

class App extends React.Component {
    render() {
        return(
            <div>
                <Home/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));