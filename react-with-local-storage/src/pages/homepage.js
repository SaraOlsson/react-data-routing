import React from 'react';

const HomePage = () => {

  return (
    <div>

      <pre>{`
            Welcome,

            This sample app uses react-router-dom to navigate between pages
            and localStorage to handle data between components. LocalStorage
            is a simple but maybe sufficient solution to demonstrate the interface.

            Navigation details:
            See App.js for route definitions. The user is redirected with Link
            components from the Menu component. Components corresponding to
            whole pages are in the /pages folder and small components in the
            /components folder and are imported where needed.

            LocalStorage details:
            The React Hook function in useLocalStorage.js makes the state respond
            to changes and re-render like a normal state hook. Saving a value to
            localStorage, it is available from anywhere, see example at page 1 and 2.
            Objects need to be stored as JSON strings, thus the stringify and
            parse. See example at page 3 and 2.

            Other:
            For style, the npm package @material-ui/core is used. Each component
            has a style object created with makeStyles to keep the CSS straightforward

          `}  <a href="https://github.com/SaraOlsson/react-data-routing/tree/master/react-with-local-storage">Source code on GitHub</a>
              {`\n            `}
              <a href="https://www.robinwieruch.de/local-storage-react">Local Storage in React</a>
              {`\n            `}
              <a href="https://reactploj-redux.netlify.com/">Same project but with React-Redux for data management</a></pre>


    </div>
  );
};

export default HomePage;
