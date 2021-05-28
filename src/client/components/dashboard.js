import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Logout from './logout'
import EditColor from './editColor'
import {Howler} from 'howler';

//SVG
import arrowsvg from '../assets/svg/arrow-down-svgrepo-com.svg';
import logoutsvg from '../assets/svg/logout.svg'
import treesvg from '../assets/svg/tree.svg'
import leafsvg from '../assets/svg/leaf.svg'
import soundsvg from '../assets/svg/sound.svg'
import soundOffsvg from '../assets/svg/sound-off.svg'
import colorsvg from '../assets/svg/tint-solid.svg'

const Dashboard = () => {
    const state = useSelector((state) => state)

    const [logout, setLogout] = useState(false)
    const [sound, setSound] = useState(true)
    const [displayProfil, setDisplayProfil] = useState(false)
    
    const handleProfil = (e) => {
        e.preventDefault()
        const container = document.querySelector(".dashboard-container")
        if(container.classList.contains('active')) {
            container.classList.remove('active')
        }
        if(displayProfil){
            setDisplayProfil(false)
            return
        }
        setDisplayProfil(true)
        setLogout(false)
    }   

    
    const handleArrow = (e) => {
        e.preventDefault()
        
        const container = document.querySelector(".dashboard-container")
        container.classList.contains('active') ?
            container.classList.remove('active') :
            container.classList.add('active')
    }

    const handleSound = (e) => {
        e.preventDefault()
        if(sound){
            Howler.mute(true)
            setSound(false)
        } else {
            Howler.mute(false)
            setSound(true)
        }
    }
    
    const toLocaleString = (value) =>{
        return value.toLocaleString('fr-FR');
    }

    const modalLogout = (e) => {
        e.preventDefault()

        const container = document.querySelector(".dashboard-container")
        if(container.classList.contains('active')) {
            container.classList.remove('active')
        }
        
        if(logout){
            setLogout(false)
            return
        }
        setLogout(true)
        setDisplayProfil(false)

    }

    const closeModal = (e) => {
        e.preventDefault()
        setLogout(false)
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
                    {sound
                        ?
                        <a href="#" className={"sound-logo"} title={"Song"} onClick={handleSound}>
                            <img src={soundsvg} alt={"logo"} />
                        </a>
                        :
                        <a href="#" className={"sound-logo"} title={"Song"} onClick={handleSound}>
                            <img src={soundOffsvg} alt={"logo"} />
                        </a>
                    }
                    <a href="#" className={"user-logo"} title={"Account"} onClick={handleProfil}>
                        <img src={colorsvg} alt={"logo"} />
                    </a>
                    <a href="#" className={"logout-logo"} title={"Logout"} onClick={modalLogout}>
                        <img src={logoutsvg} alt={"logo"} />
                    </a>
                </div>
            </div>
                {!logout && !displayProfil &&
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
                }
                { logout && <Logout closeModal={closeModal}n/> }
                { displayProfil && <EditColor /> }
        </div>
    )
}

export default Dashboard