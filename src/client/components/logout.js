import React from 'react'
import {startLogout} from '../actions/authActions'
import {useDispatch} from 'react-redux'

const Logout = (props) => {
    const dispatch = useDispatch()

    const disconnected = (e) => {
        e.preventDefault()
        dispatch(startLogout())
    }

    return (
        <div className={"container-logout"}>
            <p>Are you sure you want to log out?</p>
            <div className="link-logout">
                <a href="#" onClick={disconnected}>Yes</a>
                <a href="#" onClick={props.closeModal}>No</a>
            </div>
        </div>
    )
}

export default Logout