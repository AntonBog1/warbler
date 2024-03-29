import axios from "axios";

export function setTokenHeader(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    };
};

/** A wrapper around axios API call that formats errors, ect
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data in JSON form for POST requests
 */
export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method.toLocaleLowerCase()](path, data)
            .then(res => {
                return resolve(res.data);
            })
            .catch(err => {
                return reject(err.response.data.error);
            });
    });
};