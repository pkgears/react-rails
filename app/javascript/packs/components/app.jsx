import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about'
import Contact from './contact'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default App;