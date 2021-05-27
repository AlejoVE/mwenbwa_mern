import React from 'react'

const Rules = (props) => {

    return (
        <div className={"container-rules"}>
            <div className={"rules-info"}>
                <div className={"title-rules"}>
                    <p>Welcome to</p>&nbsp;<h1 className={""}>Mwenbwa</h1>&nbsp;<p><span className={"span-red"}>!</span></p>
                </div>
                <p>This game is so <span className={"span-blue"}>simply</span> and <span className={"span-blue"}>fun</span>, you can buy <span className={"span-red"}>all the trees</span> in the city of <strong id={"city"}>Liège</strong>.</p>
                <p><span className={"bold"}>The goal</span> ? Have as many <strong>trees</strong> as possible, overtake <span className={"span-red"}>your opponents</span> !</p>
                <p id={"p-rules-middle"}>The money in the game are leaves 🍂, you can collect them every 15 minutes depending on the number of trees you have, or <span className={"span-red"}>lose</span> half of them after one hour 🌬️</p>
                <p id={"p-summary"}>In summary you can :</p>
                <ul className={"summary-ul"}>
                    <li><span className={"span-red"}>Buy a tree</span>, even if another user bought it 😏</li>
                    <li><span className={"span-red"}>Lock a tree</span> and keep it forever !</li>
                    <li>Consult the number of trees and leaves <span className={"span-blue"}>in real time</span></li>
                    <li>Access to the ranking of the <span className={"span-blue"}>best players</span></li>
                    <li>Choose a color theme</li>
                    <li>See when a user is <span className={"span-blue"}>registered</span>, <span className={"span-blue"}>logged</span> in and <span className={"span-blue"}>bought</span> or <span className={"span-blue"}>locked</span> a tree</li>
                </ul>
                <br />
                <p>So ? <span className={"span-red"}>Come and conquer</span> as many trees as possible 🌳</p>
                <button className={"button-rules"} onClick={props.handleRules}>See you in the game ! 🎮</button>
            </div>
        </div>
    )
}

export default Rules