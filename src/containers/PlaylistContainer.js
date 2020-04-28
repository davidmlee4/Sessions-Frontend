import React from 'react'
import Playlist from '../components/Playlist'
import CreatePlaylistForm from "../components/CreatePlaylistForm"

class PlaylistContainer extends React.Component {

    state={
        playlists: [],
        title: "",
        showForm: false
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
        alert("New playlist has been created, you savage.")
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
            />
        )
    }

    render(){
        return (
            <div>
                <h3>Playlists</h3>
                {this.state.showForm ? <button onClick={this.handleClick}>Hide Form</button> : <button onClick={this.handleClick}>Create New Playlist</button>}
                {this.state.showForm && <CreatePlaylistForm title={this.state.title} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />}
                <div>
                    {this.showPlaylists()}
                </div>
            </div>
        )
    }
}

export default PlaylistContainer