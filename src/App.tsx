import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/App.css';
import Register from './components/Register';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Fragment>
    </Router>
  );
}

export default App;
