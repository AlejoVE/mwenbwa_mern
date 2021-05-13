import React from 'react';
import close from '../../assets/svg/close.svg'

const Ladder = (props) => {

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
                        <tr>
                            <td>1#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>3#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>4#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>5#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>6#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>7#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>8#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>9#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>10#</td>
                            <td>Pseudo</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ladder