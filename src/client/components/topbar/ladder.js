import React from 'react';
import close from '../../assets/svg/close.svg'
import { useAsync } from 'react-async';

const loadLeaderboard = async () => 
await fetch(`${process.env.REACT_APP_API_URL}users/leaderboard`)
.then(res => (res.ok ? res : Promise.reject(res)))
.then(res => res.json())


const Ladder = (props) => {


    const { data, error, isLoading } = useAsync({ promiseFn: loadLeaderboard})
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

    return (
        <div className={"modal-topbar"}>
            <a className={"close-modal"} href="#" onClick={props.closeModal}>
                <img src={close} alt="logo" />
            </a>
            <h3>Leaderboard</h3>
            <div className={"ladder-info"}>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Pseudo</th>
                            <th>Trees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.users.map((user, i) =>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}#</td>
                                    <td>{user.userName}</td>
                                    <td>{user.treesCount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ladder