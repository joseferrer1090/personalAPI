import React, { Component } from 'react';
import {Link, Route, BrowserRouter, HashRouter} from 'react-router-dom'
import {Router, Switch} from 'react-router'


import Home from './View/Home';
import Posteo from './View/Posteo';
import Update from './View/Update';
import Delete from './View/Delete';

class App extends Component {
  render() {
    return (
          
            <HashRouter>
              <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/posteo" component={Posteo}/>
                <Route  exact path="/update" component={Update}/>
                <Route exact path="/delete" component={Delete}/>
              </div>
          
            </HashRouter>
          
    );
  }
}
export default App;
