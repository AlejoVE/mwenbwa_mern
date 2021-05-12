import React, {useState} from 'react';
import {useSelector} from 'react-redux';

//SVG
import arrowsvg from '../assets/svg/arrow-down-svgrepo-com.svg';
import usersvg from '../assets/svg/user.svg';
import logoutsvg from '../assets/svg/logout.svg'
import treesvg from '../assets/svg/tree.svg'
import leafsvg from '../assets/svg/leaf.svg'

const Dashboard = () => {
    const state = useSelector((state) => state)

    
    const handleArrow = (e) => {
        e.preventDefault()
        const container = document.querySelector(".dashboard-container")

        container.classList.contains('active') ?
            container.classList.remove('active') :
            container.classList.add('active')
    }

    const toLocaleString = (value) =>{
        return value.toLocaleString('fr-FR');
    }

    return (
        <div className={"dashboard-container"}>
            <div className={"dashboard-topbar"}>
                <a href="#" className={"link-arrow-down"} onClick={handleArrow}>
                    <img src={arrowsvg} alt={"logo"} />
                </a>
                <div className={"topbar-info"}>
                    <h3>{state.auth.userName}</h3>
                </div>
                <div className={"topbar-logo"}>
                    <a href="#" className={"user-logo"} title={"Account"}>
                        <img src={usersvg} alt={"logo"} />
                    </a>
                    <a href="#" className={"logout-logo"} title={"Logout"}>
                        <img src={logoutsvg} alt={"logo"} />
                    </a>
                </div>
            </div>
            <div className={"dashboard-info"}>
                <div className={"dashboard-trees"}>
                    <img src={treesvg} alt={"logo"} />
                    <strong>{toLocaleString(state.auth.trees)}</strong>
                </div>

                <div className={"dashboard-leaves"}>
                    <img src={leafsvg} alt={"logo"} />
                    <strong>{toLocaleString(state.auth.leaves)}</strong>
                </div>
            </div>
        </div>
    )
}

export default Dashboard