import React, { Component } from "react";
import Employee from "./Employee.js";
import { Table, Button } from "react-bootstrap";
import "./EmployeeList.css";
import { connect } from "react-redux";
import * as employeeActions from "../../redux/actions/employeeActions";
import { bindActionCreators } from "redux";

class EmployeeList extends Component {
    componentDidMount() {
        this.props.getEmployees().catch(error => console.error(error));
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
                            {this.props.employees.map((employee) => (
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

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployees: bindActionCreators(employeeActions.getEmployees, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);