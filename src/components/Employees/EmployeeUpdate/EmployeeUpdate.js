import React from "react";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { Button } from "react-bootstrap";
import { getEmployee, updateEmployee } from "../../../services/employeeService";

export default class EmployeeUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.getData(id);
    }

    getData = async (id) => {        
        const employee = await getEmployee(id)
        this.setState({employee: employee});
    }

    handleSubmit = async (employee) => {
        await updateEmployee(employee)
        return this.props.history.push("/employees");
    }

    render() {
        return (
            <div className="container form-container">
                <h1>Update Employee</h1>
                <EmployeeForm employee={this.state.employee} submitButtonText="update" onFormSubmit={this.handleSubmit} />
                <br/>           
                <Button variant="secondary" href="/employees">Go back to Employees</Button>
            </div>
        );
    }    
}