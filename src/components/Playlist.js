import React from 'react'
import { render } from 'react-dom'
import SongCard from "./SongCard"
import { Playlists, PlaylistTitle, Button, PlaylistDeleteButton } from '../styled.js'


class Playlist extends React.Component {

    state={
        show: false,
        edit: false,
        playlistSongs: [],
        songIds: [],
        songPlaylistIds: [],
        filteredSongPlaylists: []
    }

    // renders the playlist songs by fetching all songPlaylists and filtering by playlist_id
    componentDidMount(){
        this.fetchSongPlaylists()
    }

    fetchSongPlaylists = () =>{
        let filteredSongPlaylists = this.props.allSongPlaylists.filter(sp => sp.playlist_id === this.props.playlist.id)
        let songIds = []
        let songPlaylistIds = []
        songIds = filteredSongPlaylists.map(songPlaylist => songPlaylist.song_id )
        songPlaylistIds = filteredSongPlaylists.map(sp => sp.id )
        // console.log("infetchSongPlaylists:", songPlaylistIds)
        this.setState({songIds, songPlaylistIds, filteredSongPlaylists})
    }


    // toggles showing the songs on the playlist
    handleShowClick = () => {
        let show = !this.state.show
        this.setState({show})
    }

    // toggles showing the delete buttons for each song (edit state)
    handleEditClick = () => {
        let edit = !this.state.edit
        this.setState({edit})
    }

    // render songs using the array of songIds set in state
    renderSongsOnPlaylist = () => {
        let playlistSongs = []
        playlistSongs = this.state.songIds.map(id => {
            return this.props.allSongs.find(song => song.id === id)
        })
        // console.log(this.props.playlist.id, this.state.songIds)
        
        return playlistSongs.map(song => 
            <SongCard 
                key={song.id} 
                song={song} 
                songPlaylistIds={this.state.songPlaylistIds} 
                showButton={false} 
                fetchSongPlaylists={this.fetchSongPlaylists} 
                playlistId={this.props.playlist.id}
                filteredSongPlaylists={this.state.filteredSongPlaylists}
                deleteSongPlaylist={this.props.deleteSongPlaylist}
                edit={this.state.edit}
                loadSongToPlay={this.props.loadSongToPlay}
            />
        )
        
    }

    // passes up array of songs back up to App to play in audio player
    load = () => {
        let playlistSongs = this.state.songIds.map(id => {
            return this.props.allSongs.find(song => song.id === id)
        })

        this.props.loadPlaylist(playlistSongs, this.props.playlist.title)

    }

    deletePlaylist = () => {
        // let songPlaylistIds = this.state.songPlaylistIds

        fetch("http://localhost:3000/delete_playlist", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                song_playlist_ids: this.state.songPlaylistIds
              })
        })
        fetch(`http://localhost:3000/playlists/${this.props.playlist.id}`,
        {method: "DELETE"})
        this.props.updateUserPlaylists(this.props.playlist.id)
    }

    render(){
        return (
            <Playlists>
                <PlaylistTitle onClick={this.handleShowClick}>{this.props.playlist.title}</PlaylistTitle> 
                <div>
                    <div>
                        {this.state.show && <Button onClick={this.load}>PLAY</Button>}{this.state.show &&  <Button onClick={this.handleEditClick}>EDIT</Button>}{this.state.edit && <PlaylistDeleteButton onClick={this.deletePlaylist}>Delete Playlist</PlaylistDeleteButton> }
                    </div>
                    {this.state.show && this.renderSongsOnPlaylist()}
                </div>
            </Playlists>
        )
    }
}

export default Playlist