import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import MoreContent from './components/MoreContent';
import Home from './components/Home';
import { Grid } from '@material-ui/core';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <Grid container direction='column'>
            <Home headerName='Blog Post' />
            <br />
            <Grid item container>
              <Grid item xs={false} sm={2} />
              <Grid item xs={12} sm={8}>
                <Route exact path='/' component={Content} />
                <Route exact path='/morecontent/:_id' component={MoreContent} />
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Grid>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
