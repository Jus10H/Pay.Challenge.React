import React from "react";
import { Button, FormGroup, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const EmployeeForm = (props) => {
    const { register, handleSubmit, reset, errors } = useForm();

    React.useEffect(() => {
        reset(props.employee);
      }, [reset, props]);

    const onFormSubmit = (data) => {
        data.numberOfDependents = parseInt(data.numberOfDependents);
        data.id = props.employee.id || 0;
        props.onFormSubmit(data);
    }    

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <FormGroup controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" ref={register({ required: true })} />
                {errors.firstName && <Form.Text className="text-danger">First name is required</Form.Text>}
            </FormGroup>
            <FormGroup controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName"  ref={register({ required: true })} />
                {errors.lastName && <Form.Text className="text-danger">Last name is required</Form.Text>}
            </FormGroup>
            <FormGroup controlId="NumberOfDependents">
                <Form.Label>Number of Dependents</Form.Label>
                <Form.Control type="number" name="numberOfDependents" ref={register({ required: true })} />
                {errors.numberOfDependents && <Form.Text className="text-danger">Number of Dependents is required</Form.Text>}
            </FormGroup>
            <FormGroup>
                <Form.Control type="hidden" name="id" ref={register} />
            </FormGroup>
            <Button variant="primary" type="submit">{props.submitButtonText}</Button>
        </form>     
    );   
}

export default EmployeeForm;