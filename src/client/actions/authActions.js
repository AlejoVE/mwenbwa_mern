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
            
        }).then(function ({data}){
            const {token, userName, uid} = data

            if(token) {
                localStorage.setItem("authToken", token)
                dispatch(login({userName, uid}))
            }
        }).catch(function (err){
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