// let's go!
// bring up the Hello in a component name
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css';

import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import Privacy from './components/Privacy';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker}/>
                <Match pattern="/store/:storeId" component={App}/>
                <Miss component={NotFound} />
                <Match exactly pattern="/privacy" component={Privacy}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));
