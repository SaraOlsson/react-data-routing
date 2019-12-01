import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Page1 = () => {

  // as the title value is actually reachable in this component from the
  // input, a normal const [title, settitle] = React.useState('') could be
  // used as well (like in page3) instead of getting the state from the store.
  
  const state = useSelector(state => state.testReducer);
  const dispatch = useDispatch(); // be able to dispatch

  const onChange = event  => {

    // change global state
    dispatch({
      type: "SETTITLE",
      title: event.target.value
    })
  }

  return (
    <div>
      <h1>Page 1</h1>
      <p>Enter something, then have a look at page 2..</p>
      <input value={state.title} type="text" onChange={onChange} />
      <p>value: {state.title}</p>
    </div>
  );
};

export default Page1;
