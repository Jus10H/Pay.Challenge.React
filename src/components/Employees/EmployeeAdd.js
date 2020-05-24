import React from "react";
import EmployeeForm from "./EmployeeForm";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { addEmployee } from "../../services/employeeService";

const EmployeeAdd = () => {
    const history = useHistory();
    
    const handleSubmit = async (employee) => {
        await addEmployee(employee);
        return history.push("/employees");
    }

    return (
        <div className="container form-container">
            <h1>Add Employee</h1>
            <EmployeeForm employee={{}} submitButtonText="Add" onFormSubmit={handleSubmit} />
            <br/>           
            <Button variant="secondary" href="/employees">Go back to Employees</Button>
        </div>
    );
}

export default EmployeeAdd;