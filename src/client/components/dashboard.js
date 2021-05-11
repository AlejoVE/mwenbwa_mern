import React, {useState} from 'react';
import arrowsvg from '../assets/svg/arrow-down-svgrepo-com.svg';

const Dashboard = () => {


    const handleArrow = (e) => {
        e.preventDefault()
        const container = document.querySelector(".dashboard-container")

        container.classList.contains('active') ?
            container.classList.remove('active') :
            container.classList.add('active')

    }

    return (
        <div className={"dashboard-container"}>
            <div className={"dashboard-topbar"}>
            <a href="#" className={"link-arrow-down"} onClick={handleArrow}>
                <img src={arrowsvg} alt={"logo"} />
            </a>
                
            </div>
        </div>
    )
}

export default Dashboard