import React, { Fragment } from 'react';
import NavbarHome from './components/NavbarHome';
import Main from "./components/Main";

export const App = () => {
  return (
    <Fragment>
      <NavbarHome />
      <Main />
    </Fragment>
  );
};
export default App;
