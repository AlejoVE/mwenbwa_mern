import React from 'react';
import close from '../../assets/svg/close.svg'
import { useAsync } from 'react-async';

const loadGamelog = async () => 
await fetch(`${process.env.REACT_APP_API_URL}users/gamelog`)
.then(res => (res.ok ? res : Promise.reject(res)))
.then(res => res.json())

const Log = (props) => {

    const { data, error, isLoading } = useAsync({ promiseFn: loadGamelog})
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)


    return (
        <div className={"modal-topbar"}>
            <a className={"close-modal"} href="#" onClick={props.closeModal}>
                <img src={close} alt="logo" />
            </a>
            <h3>Gamelog</h3>
            <div className={"log-info"}>
                <ul>
                    {data.actions.map((action,i) => {
                        return <li key={i}>{action.actions}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Log