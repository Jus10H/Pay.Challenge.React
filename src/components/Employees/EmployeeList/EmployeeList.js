import React, { Component } from "react";
import Employee from "./Employee/Employee.js";
import { Table, Button } from "react-bootstrap";
import { getEmployees } from "../../../services/employeeService";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const employees = await getEmployees();
        this.setState({employees: employees}); 
    }    

    render() {
        return (
            <div className="container">
                <h1>List of Employees</h1>
                <div className="employee-list">
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th># of Dependents</th>
                                <th>Cost of Benefits</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee) => (
                                <Employee key={employee.id} employee={employee} />
                            ))}
                        </tbody>
                    </Table>            
                </div>
                <br />
                <Button variant="info" href="/employees/add" className="add-button">Add Employee</Button>
            </div>
        )
    }
}