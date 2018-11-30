import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
  </Route>
);