import * as types from "../actions/constants";

const initialState = {
    employees: [],
    currentEmployee: {}
}

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_EMPLOYEES:
            return { 
                employees: [...action.employees],
                currentEmployee: {}
            };
        case types.GET_EMPLOYEE:
            return {
                employees: [...state.employees],
                currentEmployee: {...action.employee}
            }
        case types.ADD_EMPLOYEE:
            return {
                employees: [...state.employees, { ...action.employee }],
                currentEmployee: {...state.currentEmployee}
            };
        case types.UPDATE_EMPLOYEE:
            return {
                employees: state.employees.map(employee =>
                    employee.id === action.employee.id ? action.employee : employee
                  ),
                currentEmployee: {...action.currentEmployee}
            };
        default:
            return state;
    }
}

export default employeeReducer;