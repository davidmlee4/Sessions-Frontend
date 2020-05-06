import React from 'react'
import Playlist from '../components/Playlist'
import CreatePlaylistForm from "../components/CreatePlaylistForm"
import { PlaylistContainerHeader, PlaylistButton } from "../styled.js"

class PlaylistContainer extends React.Component {

    state={
        userPlaylists: [],
        title: "",
        showForm: false,
        update: ""
    }

    componentDidMount(){
        this.setState({
            userPlaylists: this.props.userPlaylists
        })
    }

    handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        this.setState({
          [key]: value
        })
      }

    handleSubmit = (event) => {
        event.preventDefault()
        let title = this.state.title
        fetch("http://localhost:3000/playlists", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                user_id: 1
            })
        })
        .then(res=>res.json())
        .then(data=> {this.props.addPlaylist(data)})
        this.setState({title: ""})
    }

    handleClick = () => {
        let showForm = !this.state.showForm
        this.setState({
            showForm
        })
    }

    // componentDidMount(){
    //     let playlists = this.props.playlists.filter(playlist => playlist.user_id === 1)
    //     console.log(this.props.playlists)
    //     this.setState({playlists})
    // }

    showPlaylists = () => {
        // let userPlaylists = this.props.allPlaylists.filter(playlist => playlist.user_id === 1)
        return this.props.userPlaylists.map(playlist => 
            <Playlist 
                key={playlist.id} 
                playlist={playlist} 
                allSongs={this.props.allSongs} 
                allSongPlaylists={this.props.allSongPlaylists}
                deleteSongPlaylist={this.props.deleteSongPlaylist}
                updateUserPlaylists={this.props.updateUserPlaylists}
                loadPlaylist={this.props.loadPlaylist}
                loadSongToPlay={this.props.loadSongToPlay}
            />
        )
    }

    render(){
        return (
            <div>
                <PlaylistContainerHeader>Playlists</PlaylistContainerHeader>
                {this.state.showForm ? <PlaylistButton onClick={this.handleClick}>Hide Form</PlaylistButton> : <PlaylistButton onClick={this.handleClick}>Create New Playlist</PlaylistButton>}
                {this.state.showForm && <CreatePlaylistForm title={this.state.title} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />}
                <div>
                    {this.showPlaylists()}
                </div>
            </div>
        )
    }
}

export default PlaylistContainer