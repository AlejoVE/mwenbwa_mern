import React from 'react'
import {useSetColor} from '../hooks/hooks'
import {useSelector} from 'react-redux'


const EditColor = () => {
    const setColor = useSetColor()
    const state = useSelector((state) => state)
    const uid = state.auth.uid
    const currentColor = state.auth.color

    const changeColor = (e) => {
        const color = e.target.value
        const root = document.querySelector(':root');
        switch (color) {
            case "blue":
                root.style.setProperty('--color-theme', "#00aaff93");
                root.style.setProperty('--color-theme-hover', "#00aaffec");
                root.style.setProperty('--color-theme-marker', "radial-gradient(#00aaff83, #00aaff3b)");
                break;
            case "green":
                root.style.setProperty('--color-theme', "#1aad57bd");
                root.style.setProperty('--color-theme-hover', "#18e06bb6");
                root.style.setProperty('--color-theme-marker', "radial-gradient(#1aad57bd, #1aad5741)");
                break;
            case "purple":
                root.style.setProperty('--color-theme', "#a29bfe93");
                root.style.setProperty('--color-theme-hover', "#a29bfec2");
                root.style.setProperty('--color-theme-marker', "radial-gradient(#a29bfee1, #a29bfe77)");
                break;
            default:
                break;
        }
        setColor(uid, color)
    }
    return (
       
        <form method={"post"} action={""} className={"edit-color"}>
            <h4 className={"change-color"}>Change color :</h4>
            <div className={"colors colors-edit"}>     
                <div className={"inputs-color edit-inputs"}>
                    <input
                        name="color"
                        type="radio"
                        id="blue"
                        value="blue"
                        onClick={changeColor}
                        defaultChecked={currentColor === "blue" ? "checked" : ""}

                    />
                    <label className={"blue"} htmlFor={"blue"}></label>
                    <input
                        name="color"
                        type="radio"
                        id="purple"
                        value="purple"
                        onClick={changeColor}
                        defaultChecked={currentColor === "purple" ? "checked" : ""}
                        


                    />
                    <label className={"purple"} htmlFor={'purple'}></label>
                    <input
                        name="color"
                        type="radio"
                        id="green"
                        value="green"
                        onClick={changeColor}
                        defaultChecked={currentColor === "green" ? "checked" : ""}
                    />
                    <label className={"green"} htmlFor={"green"}></label>
                </div>
            </div>
        </form>
    )
}

export default EditColor