import axios from "axios";
// import { response } from "express";


const baseURL = "http://localhost:8000/visitor";

//register request
export const register = (newVisitor) => {
    //POST http://localhost:8000/visitor/register
    // axios.post(`/visitor/register`, newVisitor)
    return axios.post(`${baseURL}/register`, newVisitor) 
        .then(response => {
            if(response.data){
                return Promise.resolve(response.data)
            }
        })
        .catch(error => {
            return Promise.reject(error.response.data)
        })
}

//login request
export const login = (visitorCredentials) => {
    return axios.post(`${baseURL}/login`, visitorCredentials)
        .then(response => {
            if(response.data.token){
                localStorage.setItem('x-access-token', response.data.token)
            }
            return Promise.resolve(response.data)
        })
        .catch(error => {
            return Promise.reject(error.response.data)
        })
}


//logout service 
export const logout = () => {
    localStorage.removeItem('x-access-token')
    return {msg: "Logout Succussful!"}
}