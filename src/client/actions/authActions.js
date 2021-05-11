import axios from 'axios'

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
            const token = data.token

            if(token) {
                localStorage.setItem("authToken", token)
            }
        }).catch(function (err){
            console.log(err)
        })
    }
}