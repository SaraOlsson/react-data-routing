import React from 'react';

const HomePage = () => {

  return (
    <div>

      <pre>{`
            Welcome,

            This sample app uses react-router-dom to navigate between pages
            and react-redux with Hooks to handle data between components. Redux
            is used in many real applications.

            Navigation details:
            See App.js for route definitions. The user is redirected with Link
            components from the Menu component. Components corresponding to
            whole pages are in the /pages folder and small components in the
            /components folder and are imported where needed.

            Redux details:
            Changes to the create-react-app project follow the simple tutorial linked below.
            You can keep your usual state hooks (e.g. const [name, setName] = React.useState('') )
            as they are if they don't need to be reachable from other components. The basic concepts:
            store.js contains definitions of global states and how they should be updated.
            useDispatch is hook to change the state, see page1 and how the dispatch type and action
            corresponds to the case "SETTITLE" and action object in store.js. Also see how dispatch
            from page3 corresponds to the case "ADDUSER" in store.js.
            useSelector is hook to access the state, see page2. The useSelector also subscribes
            to the redux store, so the component will re-render if the state changes.


            Other:
            Functional components are used throughout the app
            For style, the npm package @material-ui/core is used. Each component
            has a style object created with makeStyles to keep the CSS straightforward

          `}  <a href="https://github.com/SaraOlsson/react-data-routing/tree/master/react-with-redux-storage">Source code on GitHub</a>
              {`\n            `}
              <a href="https://reactgo.com/react-redux-hooks/">React Redux hooks tutorial with examples</a>
              {`\n            `}
              <a href="https://reactploj.netlify.com/">Same project but with localStorage for data management</a></pre>



    </div>
  );
};

export default HomePage;
