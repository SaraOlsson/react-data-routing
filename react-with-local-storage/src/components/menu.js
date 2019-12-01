import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const Menu = () => {

   const s = useStyles();

    return (
      <div className={s.footer}>
        <Link to="/" className={s.links}>Homepage</Link>
        <Link to="/page1" className={s.links}>Page 1</Link>
        <Link to="/page2" className={s.links}>Page 2</Link>
        <Link to="/page3" className={s.links}>Page 3</Link>
      </div>
    );
};

const useStyles = makeStyles({

  footer: {
    backgroundColor: 'teal',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: 100 + '%',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 50 + 'px 0'
  },
  links: {
    color: 'white'
  }
});

export default Menu;
