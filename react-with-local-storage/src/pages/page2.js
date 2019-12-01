import React from 'react';
import useLocalStorage from '../useLocalStorage';

const Page2 = () => {
  const [title, setTitle] = useLocalStorage('myValueInLocalStorage');

  const onChange = event => setTitle(event.target.value);

  return (
    <div>
      <h1>Page 2</h1>
      <input value={title} type="text" onChange={onChange} />
      <p>{title}</p>
    </div>
  );
};

export default Page2;
