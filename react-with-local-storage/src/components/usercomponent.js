import React from 'react';

const UserComponent = (props) => {

  return (
    <div>
      <h3>User: {props.name} - age: {props.age}</h3>
    </div>
  );

}

export default UserComponent;
