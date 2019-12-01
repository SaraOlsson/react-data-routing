import React from 'react';
import { useDispatch } from "react-redux";

const Page3 = () => {

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');

  const onChangeName = event => setName(event.target.value);
  const onChangeAge = event => setAge(event.target.value);

  const dispatch = useDispatch(); // be able to dispatch

  const onAdd = () => {

      let new_item = {name: name, age: age};

      // change global state
      dispatch({
        type: "ADDUSER",
        item: new_item
      })

      alert("added user")
  }

  return (
    <div>
      <h1>Page 3</h1>

      <p>Enter user info, then have a look at page 2..</p>
      <input value={name} placeholder="name" type="text" onChange={onChangeName} />
      <input value={age} placeholder="age" type="text" onChange={onChangeAge} />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Page3;
