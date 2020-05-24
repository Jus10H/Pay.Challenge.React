import React from "react";
import { Button } from "react-bootstrap";

const Employee = (props) => {
    return (        
        <tr>
            <td>{props.employee.id}</td>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.numberOfDependents}</td>
            <td>${props.employee.benefitsCost}</td>
            <td><Button variant="outline-info" href={`/employees/update/${props.employee.id}`}>Edit</Button></td>
        </tr>
    );
}

export default Employee;