import axios from 'axios'
import {type} from '../types/types'

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
            const {token, userName, uid} = data

            if(token) {
                localStorage.setItem("authToken", token)
                dispatch(login({userName, uid}))
            }
        }).catch((err) =>{
            console.log(err)
        })
    }
}

const login = (user) => ({
    type: type.authLogin,
    payload: {
        uid : user.uid,
        userName: user.userName
    }
})

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
            console.log(err.response.data.msg)
        })
    }
}