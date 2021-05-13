import React from 'react';
import close from '../../assets/svg/close.svg'

const Log = (props) => {

    return (
        <div className={"modal-topbar"}>
            <a className={"close-modal"} href="#" onClick={props.closeModal}>
                <img src={close} alt="logo" />
            </a>
            <h3>Gamelog</h3>
            <div className={"log-info"}>
                <ul>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                    <li><span>Pseudo</span> bought a tree</li>
                </ul>
            </div>
        </div>
    )
}

export default Log