import React from "react";
import EmployeeList from "./EmployeeList/EmployeeList.js";
import EmployeeAdd from "./EmployeeAdd/EmployeeAdd.js";
import EmployeeUpdate from "./EmployeeUpdate/EmployeeUpdate.js";
import { Route, Switch } from "react-router-dom";

export default class EmployeePage extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/employees" component={EmployeeList} />
                <Route path="/employees/add" component={EmployeeAdd} /> 
                <Route path="/employees/update/:id" component={EmployeeUpdate} />                               
            </Switch>
        )
    }
}