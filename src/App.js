import React from "react";
import Form from './form'
import GetGroups from "./getGroups";

const App = () => {
  return (
    <>
      {true && <Form/>}
      {true && <GetGroups/>}
    </>
  );
}

export default App;
