import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import Main from 'Main';
import About from 'About';
import HomePage from 'HomePage';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  );
};

ReactDOM.render( <App />, document.getElementById('app'));
