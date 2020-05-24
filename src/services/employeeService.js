import { handleResponse, handleError } from "../utils/httpUtils";

const baseUrl = 'http://localhost:4000/api/employees';

export function getEmployees() {
    return fetch(baseUrl)
            .then(handleResponse)
            .catch(handleError)
}

export const getEmployee = (id) => {        
    return fetch(`${baseUrl}/${id}`)
            .then(handleResponse)
}

export const addEmployee = (employee) => {
    return fetch(`${baseUrl}/add`, {
                method: 'post',
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(handleResponse)
            .catch(handleError)
}

export const updateEmployee = (employee) => {
    return fetch(`${baseUrl}/update`, {
                method: 'put',
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(handleResponse)
            .catch(handleError)
}