import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import App from './App.js';
import InGameScreen from './components/InGameScreen';
import Login from './components/Login';
import Page404 from './components/Page404';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/game" component={InGameScreen}/>
        {/* <Route component={Page404} /> */}
      </div>
    </Router>
  </Provider>
);

render(<Root />, document.getElementById('root'));


{/* wireframe: https://gomockingbird.com/projects/pys6f1i */}