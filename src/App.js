import React from "react";
import EmployeePage from "./components/Employees/EmployeePage"
import { Route } from "react-router-dom";

const App = () => {
  return (
    <Route path="/employees" component={EmployeePage}></Route>
  );
}

export default App;
