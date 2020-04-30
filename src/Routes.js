import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import MoreContent from './components/MoreContent';
import Content from './components/Content';
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Content} />
          <Route path='/More-content:/_id' component={MoreContent} />
        </Switch>
      </Router>
    );
  }
}
