import React from "react";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { Button } from "react-bootstrap";

export default class EmployeeUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.getEmployee(id);
    }

    getEmployee = (id) => {        
        fetch(`http://localhost:4000/api/employees/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({employee: data});
            });
    }

    updateEmployee = (employee) => {
        fetch('http://localhost:4000/api/employees/update', {
            method: 'put',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
               return this.props.history.push("/employees");
            }
            console.error(response);
        })
    }

    render() {
        return (
            <div className="container form-container">
                <h1>Update Employee</h1>
                <EmployeeForm employee={this.state.employee} submitButtonText="update" onFormSubmit={this.updateEmployee} />
                <br/>           
                <Button variant="secondary" href="/employees">Go back to Employees</Button>
            </div>
        );
    }    
}