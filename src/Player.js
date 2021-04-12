import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import PlayerBody from './PlayerBody';
import Footer from './Footer';

function player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <PlayerBody spotify={spotify}/>
            </div>
                <Footer />
        </div>
    )
}

export default player;