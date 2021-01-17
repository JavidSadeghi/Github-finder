import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <Alert />
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:login'
            render={(props) => <User {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
