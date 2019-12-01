import React from 'react';

const Page3 = () => {

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');

  const onChangeName = event => setName(event.target.value);
  const onChangeAge = event => setAge(event.target.value);

  const onAdd = () => {

      let temp_data = JSON.parse(localStorage.getItem('storeObj'));
      temp_data.push({name: name, age: age});
      localStorage.setItem('storeObj', JSON.stringify(temp_data));
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
