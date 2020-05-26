import * as types from "./constants";
import * as employeeService from "../../services/employeeService";

export const getEmployeesAction = (employees) => {
    return { type: types.GET_EMPLOYEES, employees: employees};
}

export const getEmployeeAction = (employee) => {
    return { type: types.GET_EMPLOYEE, employee: employee};
}

export const addEmployeeAction = (employee) => {
    return { type: types.ADD_EMPLOYEE, employee: employee};
}

export const updateEmployeeAction = (employee) => {
    return { type: types.UPDATE_EMPLOYEE, employee: employee};
}


export const getEmployees = () => {
    return (dispatch) => {
        return employeeService.getEmployees()
                    .then(employees => dispatch(getEmployeesAction(employees)))
                    .catch(error => console.error(error))
    }
}

export const getEmployee = (id) => {
    return (dispatch) => {
        return employeeService.getEmployee(id)
                    .then(employee => {
                        return dispatch(getEmployeeAction(employee))
                    })
                    .catch(error => console.error(error))
    }
}


export const addEmployee = (employee) => {
    return (dispatch) => {
        return employeeService.addEmployee(employee)
                    .then(employees => dispatch(addEmployeeAction(employees)))
                    .catch(error => console.error(error))
    }
}

export const updateEmployee = (employee) => {
    return (dispatch) => {
        return employeeService.updateEmployee(employee)
                    .then(employee => dispatch(updateEmployeeAction(employee)))
                    .catch(error => console.error(error))
    }
}