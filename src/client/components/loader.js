import React from 'react'
import ReactLoading from 'react-loading';

const Loader = () => {
    return (
        <div className={"loader loader-page"}>
            <div className={"overlay"}>
                <ReactLoading
                    className='loading-component'
                    type='spinningBubbles'
                    color='#fff'
                    height='20%'
                    width='15%'
                />
            </div>
        </div>
    )
}

export default Loader