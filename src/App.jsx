import React from "react";
import Success from "./components/Alert/Success";
import Danger from "./components/Alert/Danger";
import Warning from "./components/Alert/Warning";


function App()
{
  return (
    <div>
      <Success text="Record Added Successfully" />
      <Danger text="Record Deletd Successfully" />
      <Warning text="Record Deleted Successfully"/>
    </div>
  );
}
export default App;