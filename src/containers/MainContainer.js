import React from 'react'
import SongContainer from "./SongContainer"
import PlaylistContainer from './PlaylistContainer'
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import { Switch, Route } from "react-router-dom";


class MainContainer extends React.Component {

    state={
        userSongs: [],
        allSongs: [],
        allPlaylists: [],
        allSongPlaylists: [],
        userPlaylists: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/songs")
        .then(res=>res.json())
        .then((allSongs) => {
            fetch("http://localhost:3000/playlists")
            .then(res=>res.json())
            .then((allPlaylists) => {
                fetch("http://localhost:3000/song_playlists")
                .then(res=>res.json())
                .then((allSongPlaylists) => {
                    let userPlaylists = allPlaylists.filter(playlist => playlist.user_id === 1)
                    this.setState({allSongs, allPlaylists, userPlaylists,allSongPlaylists})
                })
            })
        });
    }



    addPlaylist = (newPlaylist) => {
        let userPlaylists = [...this.state.userPlaylists, newPlaylist]
        let allPlaylists = [...this.state.allPlaylists, newPlaylist]
        this.setState({
            allPlaylists, userPlaylists
        })
    }

    //adding songs
    addSongPlaylist = (newSongPlaylist) => {
        let allSongPlaylists = [...this.state.allSongPlaylists, newSongPlaylist]
        this.setState({allSongPlaylists})
    }

    //deleting songs off playlists
    deleteSongPlaylist = (songPlaylistId) => {
        let allSongPlaylists = this.state.allSongPlaylists
        let songPlaylistIndex = allSongPlaylists.findIndex(sp => sp.id === songPlaylistId)
        console.log(songPlaylistIndex, "song has been deleted")
        allSongPlaylists.splice(songPlaylistIndex, 1)
        this.setState({allSongPlaylists: [...allSongPlaylists]})
        // allSongPlaylists.splice()
    }

    //deleting playlist
    updateUserPlaylists = (playlistId) => {
        // let allPlaylists = this.state.allPlaylists
        // let index = allPlaylists.findIndex(p=> p.id === playlistId)
        let userPlaylists = this.state.userPlaylists 
        let playlistIndex = userPlaylists.findIndex(playlist => playlist.id === playlistId)
        console.log("this playlist has been deleted")
        userPlaylists.splice(playlistIndex, 1)
        this.setState({userPlaylists: [...userPlaylists]})
    }


    render () {
        return (
            <div>
                {/* <LoginForm/>
                <SignupForm/>
                <PlaylistContainer/>
                <SongContainer/> */}

                <Switch>
                    <Route path="/login"><LoginForm/></Route>
                    <Route path="/signup"><SignupForm/></Route>
                    <Route 
                        exact 
                        path="/"
                        render={(routerProps) => (
                            <PlaylistContainer
                                {...routerProps}
                                userPlaylists={this.state.userPlaylists}
                                allSongs={this.state.allSongs}
                                addPlaylist={this.addPlaylist}
                                deleteSongPlaylist={this.deleteSongPlaylist}
                                allSongPlaylists={this.state.allSongPlaylists}
                                updateUserPlaylists={this.updateUserPlaylists}
                                loadPlaylist={this.props.loadPlaylist}
                            />
                        )}
                    />
                    <Route 
                        exact 
                        path="/browse"
                        render={(routerProps) => (
                            <SongContainer
                                {...routerProps}
                                allSongs={this.state.allSongs}
                                userPlaylists={this.state.userPlaylists}
                                addSongPlaylist={this.addSongPlaylist}
                                allSongPlaylists={this.state.allSongPlaylists}
                            />
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default MainContainer

