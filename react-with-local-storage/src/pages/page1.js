import React from 'react';
import useLocalStorage from '../useLocalStorage';

const Page1 = () => {
  const [title, setTitle] = useLocalStorage('myValueInLocalStorage');

  const onChange = event => setTitle(event.target.value);

  return (
    <div>
      <h1>Page 1</h1>
      <input value={title} type="text" onChange={onChange} />
      <p>{title}</p>
    </div>
  );
};

export default Page1;
