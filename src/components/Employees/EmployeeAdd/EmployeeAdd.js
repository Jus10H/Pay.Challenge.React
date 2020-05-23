import React from "react";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const EmployeeAdd = () => {
    const history = useHistory();
    
    const addEmployee = (employee) => {
        fetch(`http://localhost:4000/api/employees/add`, {
            method: 'post',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                return history.push("/employees");
             }
             console.error(response);
        })
    }

    return (
        <div className="container form-container">
            <h1>Add Employee</h1>
            <EmployeeForm employee={{}} submitButtonText="Add" onFormSubmit={addEmployee} />
            <br/>           
            <Button variant="secondary" href="/employees">Go back to Employees</Button>
        </div>
    );
}

export default EmployeeAdd;