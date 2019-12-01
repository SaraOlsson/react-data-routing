import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import useLocalStorage from '../useLocalStorage';
import UserComponent from '../components/usercomponent';

const Page2 = () => {

  const [title, setTitle] = useLocalStorage('myValueInLocalStorage', '');
  const [data, setData] = React.useState(JSON.parse(localStorage.getItem('storeObj')));
  const s = useStyles();

  return (
    <div>
      <h1>Page 2</h1>

      <span className={s.heading}>value set at page 1</span>
      {title.length > 0 ? <p>{title}</p> : <Link to="/page1"><p> go there and enter something! </p></Link> }

      <span className={s.heading}> users added at page 3 </span>
      <div> { data.map((user, idx) => <UserComponent name={user.name} key={idx} age={user.age} />) } </div>

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
