import axios from 'axios'
import {type} from '../types/types'


const login = (user) => ({
    type: type.authLogin,
    payload: user
})

const errors = (err) =>({
    type: type.setError,
    payload: err
})

export const cleanError = () =>({
    type: type.cleanError
})

export const updateDashboardData = (data) => ({
    type: type.updateDashboardData,
    payload: data
})

export const setColor = (color) =>({
    type: type.setColor,
    payload: color
})


export const startLogin = (userName, password) => {
    return async (dispatch) => {
        
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}users/login`,
            withCredentials: true,
            data: {
                userName: userName,
                password: password
            }
            
        }).then(({data}) =>{
            const {token, userName, uid, leaves, trees, color} = data


            if(token) {
                localStorage.setItem("authToken", token)
                dispatch(login({userName, uid, leaves, trees, color}))
                

            }
        }).catch((err) =>{
            dispatch(errors(err.response.data.err))
        })
    }
}

export const startRegister = (username, password, email, color) =>{
    return async (dispatch) => {
        axios({
            url: `${process.env.REACT_APP_API_URL}users/signup`,
            method: "post",
            withCredentials: true,
            data: {
                userName: username,
                password: password,
                email: email,
                color: color
            }

        }).then(() =>{
            dispatch(startLogin(username, password))
        }).catch(err =>{
            dispatch(errors(err.response.data.err))
        })
    }
}


export const startChecking = () => {
    return async (dispatch) => {
        
        dispatch(setChecking({isChecking: true}))
        const token = localStorage.getItem("authToken")
        
        if(token){
            axios({
                url: `${process.env.REACT_APP_API_URL}users/renew`,
                method: 'get',
                headers: {
                    'x-token': token,
                },
            }).then(({data}) => {
                const {color, token, uid, username, trees, leaves} = data
                dispatch(login({color, token, uid, userName: username, trees, leaves}))
                dispatch(setChecking({isChecking: false}))
            }).catch(err => {
                console.log(err)
                dispatch(setChecking({isChecking: false}))
            })
        } else {
            dispatch(setChecking({isChecking: false}))
        }
    }
}

export const setChecking = (isChecking) => ({
    type: type.authSetChecking,
    payload: isChecking
})

