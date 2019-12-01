import { combineReducers } from 'redux';

let defaultValues = { data: [], title: "" };

// defines state and default values, and how it should be updated
function testReducer(state = defaultValues, action) {
  switch (action.type) {
    case "ADDUSER":

      // immutable update pattern..
      let newArray = state.data.slice();
      newArray.splice(newArray.length + 1, 0, action.item);

      return {
        ...state,
        data: newArray
      };
    case "SETTITLE":
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
}

// for bigger apps its convenient with separate reducers. Example:
function anotherReducer(state = { signedIn: false }, action) {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        signedIn: true
      };
    case "SIGNOUT":
      return {
        ...state,
        signedIn: false
      };
    default:
      return state;
  }
}

// combined reducers = nice when application grows
export default combineReducers({
  testReducer: testReducer,
  anotherReducer: anotherReducer
});

// or if not combined
// export default testReducer
