import React from 'react'

const Logout = (props) => {

    const disconnected = (e) => {
        e.preventDefault()
        localStorage.removeItem('authToken')
        document.location.reload();
    }

    return (
        <div className={"container-logout"}>
            <p>Are you sure you want to log out?</p>
            <div className="link-logout">
                <a className={"blue-link"} href="#" onClick={disconnected}>Yes</a>
                <a className={"red-link"} href="#" onClick={props.closeModal}>No</a>
            </div>
        </div>
    )
}

export default Logout