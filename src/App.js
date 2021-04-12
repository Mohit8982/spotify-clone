import React, { useEffect } from "react";
import './App.css';
import Login from './Login'
import { getTokenFromURi } from "./spotify";
import spotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new spotifyWebApi();

function App() {

  
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURi();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token : _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      });

      spotify.getUserPlaylists().then((list) => {
        dispatch({
          type: "SET_PLAYLIST",
          playList : list
        })
      });

      spotify.getPlaylist('1obWSz8Nr7P7PIpvwSpa8v').then((discover) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly : discover
        })
      });

    }
  }, []);
  
  return (
    <div className="App">
      {
        token ? (<Player spotify={ spotify }/>) : (<Login />)
      }
    </div>
  );
}


// eslint-disable-next-line no-lone-blocks
{/* <Player spotify={ spotify }/> : passing value to other component is one way & other way is setting value in datalayer */ }

export default App;
