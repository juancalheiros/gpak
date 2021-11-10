import React from "react";
import Form from './form'
import GetGroups from "./getGroups";

const App = () => {
  return (
    <>
      <Form/>
      {false && <GetGroups/>}
    </>
  );
}

export default App;
