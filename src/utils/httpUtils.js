export const handleResponse = async (response) => {
    switch(true) {
        case response.status === 204:
            return;
        case response.ok:
            return response.json();
        default:
            const error = await response.text();
            throw new Error(error);
    }
}
  

export const handleError = (error) => {
    console.error("API call failed. " + error);
}