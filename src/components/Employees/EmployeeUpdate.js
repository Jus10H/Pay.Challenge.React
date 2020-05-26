import React from "react";
import EmployeeForm from "./EmployeeForm";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateEmployee, getEmployee } from "../../redux/actions/employeeActions";
import { bindActionCreators } from "redux";

class EmployeeUpdate extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getEmployee(id).catch(error => console.error(error));
    }

    handleSubmit = (employee) => {
        this.props.updateEmployee(employee)
            .then(() => this.props.history.push("/employees"))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className="container form-container">
                <h1>Update Employee</h1>
                <EmployeeForm employee={this.props.employee} submitButtonText="update" onFormSubmit={this.handleSubmit} />
                <br/>           
                <Button variant="secondary" href="/employees">Go back to Employees</Button>
            </div>
        );
    }    
}

const mapStateToProps = (state) => {
    return {
        employee: state.currentEmployee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmployee: bindActionCreators(updateEmployee, dispatch),
        getEmployee: bindActionCreators(getEmployee, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeUpdate);