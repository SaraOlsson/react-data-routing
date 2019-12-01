import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
// import useLocalStorage from './useLocalStorage';

import HomePage from './pages/homepage';
import Page1 from './pages/page1';
import Page2 from './pages/page2';


const Menu = () => {

   const s = useStyles();

    return (
      <div className={s.footer}>
        <Link to="/" className={s.links}>Homepage</Link>
        <Link to="/page1" className={s.links}>Page 1</Link>
        <Link to="/page2" className={s.links}>Page 1</Link>
      </div>
    );
};

const App = () => {

  return (

    <Router>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>

      <Menu/>

    </Router>

  );
};

const useStyles = makeStyles({
  body: {
    padding: 15
  },
  footer: {
    backgroundColor: 'gray',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: 100 + '%',
    display: 'flex',
    justifyContent: 'center',
    padding: 50 + 'px'
  },
  links: {
    color: 'white',
    flexBasis: 50 + 'px'
  }
});

export default App;

/*



*/
