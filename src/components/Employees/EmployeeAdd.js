import React from "react";
import EmployeeForm from "./EmployeeForm";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addEmployee } from "../../redux/actions/employeeActions";
import { bindActionCreators } from "redux";

const EmployeeAdd = (props) => {
    const history = useHistory();
    
    const handleSubmit = async (employee) => {
        props.addEmployee(employee).catch(error => console.error(error));
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

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: bindActionCreators(addEmployee, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAdd);