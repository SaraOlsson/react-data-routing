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
            The React Hook function in useLocalStorage.js makes a local state
            available from anywhere, see example at page 1 and 2.
            Objects need to be stored as JSON strings, thus the stringify and
            parse. See example at page 3 and 2.

            Other:
            For style, the npm package @material-ui/core is used. Each component
            has a style object created with makeStyles to keep the CSS straightforward

          `}</pre>

    </div>
  );
};

export default HomePage;
