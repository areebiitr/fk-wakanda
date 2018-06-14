import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/index.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Wakanda Forever!</p>
        );
    }
}

render(<App />, document.getElementById('grocery-app'));