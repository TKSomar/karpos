import React from 'react';
import routes from './routes';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default withRouter(connect(mapStateToProps,)(App));
