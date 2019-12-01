import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import UserComponent from '../components/usercomponent';

const Page2 = () => {

  const s = useStyles();
  const state = useSelector(state => state.testReducer); // subscribe to the redux store

  console.log(state)

  let mapped_users = state.data.map((user, idx) => <UserComponent name={user.name} key={idx} age={user.age} />);

  return (
    <div>
      <h1>Page 2</h1>

      <span className={s.heading}>value set at page 1</span>
      {state.title.length > 0 ? <p>{state.title}</p> : <Link to="/page1"><p> go there and enter something! </p></Link> }

      <span className={s.heading}> users added at page 3 </span>
      {
        state.data.length > 0 ? <div>{mapped_users}</div> : <Link to="/page3"><p> go there and enter users! </p></Link>
      }

    </div>
  );
};

const useStyles = makeStyles({
  heading: {
    backgroundColor: 'teal',
    color: 'white',
    transform: 'rotate(45deg)',
    padding: '5px'
  }
});

export default Page2;
