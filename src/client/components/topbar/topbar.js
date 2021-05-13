import React, { useState } from 'react';
import Ladder from './ladder'
import Log from './log'

const Topbar = () => {

    const [leader, setLeader] = useState(false)
    const [log, setLog] = useState(false)
    

    const handleModal = (e) => {
        e.preventDefault()

        setLog(false)
        setLeader(false)
    }

    const handleLog = (e) => {
        e.preventDefault()
        const leaderLink = document.querySelector('.link-leader')
        const logLink = document.querySelector('.link-log')

        if(log) {
            setLog(false)
            logLink.classList.remove('active')
        } else {
            setLog(true)
            setLeader(false)
            logLink.classList.add('active')
            leaderLink.classList.remove('active')
        }
    }

    const handleLeader = (e) => {
        e.preventDefault()
        const leaderLink = document.querySelector('.link-leader')
        const logLink = document.querySelector('.link-log')

        if(leader){
            setLeader(false)
            leaderLink.classList.remove('active')
        } else {
            setLeader(true)
            setLog(false)
            leaderLink.classList.add('active')
            logLink.classList.remove('active')
        }
    }

    return (
        <>
            <div className={"topbar"}>
                <a href="#" className="link-leader" onClick={handleLeader}>Leaderboard</a>
                <a href="#" className="link-log" onClick={handleLog}>Gamelog</a>
            </div>
            
            {leader && <Ladder closeModal={handleModal}/>}
            {log && <Log closeModal={handleModal}/>}
        </>
    )
}

export default Topbar