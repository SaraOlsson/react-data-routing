import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// import our component
import HomePage from './pages/homepage';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Menu from './components/menu';

// main component of app is always one page (depending on url path) + Menu below
const App = () => {

  return (

    <Router>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>

      <Menu/>

    </Router>

  );
};


export default App;
