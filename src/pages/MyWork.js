import React from 'react';
import { Link } from 'react-scroll'
import publicHolidaysImg from '../images/publicHolidays.png'

function MyWork() {
    return (
        <div id="my-work" className="my-work">
            <h1>Mina Projekt</h1>
            <div className='wrapper'>
                <div className="container">
                    <div className='preview'>
                        <img src={publicHolidaysImg} />
                    </div>
                    <div>


                        <a href="https://github.com/Emeliie094/fetch-holidays" target="_blank"><button className="link-button">GitHub</button></a>
                        <a href="https://emeliie094.github.io/fetch-holidays/" target="_blank"><button className="link-button">Demo</button></a>
                    </div>
                </div>
                <div className="container">
                    <div className='preview'></div>
                    <div>
                        <button className="link-button">GitHub</button>
                        <button className="link-button">Demo</button>
                    </div>
                </div>
                <div className="container">
                    <div className='preview'></div>
                    <div>
                        <button className="link-button">GitHub</button>
                        <button className="link-button">Demo</button>
                    </div>
                </div>
                <div className="container">
                    <div className='preview'></div>
                    <div>
                        <button className="link-button">GitHub</button>
                        <button className="link-button">Demo</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyWork;
