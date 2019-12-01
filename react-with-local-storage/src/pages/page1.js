import React from 'react';
import useLocalStorage from '../useLocalStorage';

const Page1 = () => {
  const [title, setTitle] = useLocalStorage('myValueInLocalStorage', '');

  const onChange = event => setTitle(event.target.value);

  return (
    <div>
      <h1>Page 1</h1>
      <p>Enter something, then have a look at page 2..</p>
      <input value={title} type="text" onChange={onChange} />
    </div>
  );
};

export default Page1;
