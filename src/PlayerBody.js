import React from 'react';
import './PlayerBody.css';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function PlayerBody({spotify}) {
    
    const [{ discover_weekly }] = useDataLayerValue();

    return (
        <div className="p__body">
            <Header spotify={spotify} />
            <div className="body__info" >
                {/* <img className="body__logo" src={discover_weekly?.images[0].url} alt="" /> */}

                 <img className="body__logo" src="https://www.savoirflair.com/wp-content/uploads/2021/03/Billie-Eilish-new-hair-billie-eilish-blonde.jpg?x88026" alt="" />
                
                

                <div className="body__infoText">
                    <strong> Playlist </strong>
                    <h2>  Discover Weekly  </h2>
                    <p>{discover_weekly?.description }</p>
                </div>  
            </div>
            <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow  track={item.track} />
        ))}
      </div>
        </div>
    )
}

export default PlayerBody
