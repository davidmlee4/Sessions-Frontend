import React from 'react'
import AddSongToPlaylistForm from "./AddSongToPlaylistForm"
import { DeleteButton, Grid2, Button, Row, Col2, Col3, Songs, DeleteButtonHolder } from '../styled.js'


class SongCard extends React.Component {

    state={
        showAddToPlaylistForm: false,
        playlist: "-"
    }

    handleAddClick = () => {
        let showAddToPlaylistForm = !this.state.showAddToPlaylistForm
        this.setState({showAddToPlaylistForm})
    }

    handleDeleteClick = () => {
        let songPlaylist = this.props.filteredSongPlaylists.find(sp => sp.song_id === this.props.song.id && sp.playlist_id === this.props.playlistId)
        console.log("you're trying to DELETE a song from a playlist", songPlaylist.id)
        fetch(`http://localhost:3000/song_playlists/${songPlaylist.id}`,{
            method: "DELETE"
        })
        this.props.deleteSongPlaylist(songPlaylist.id)
        this.props.fetchSongPlaylists()
    }

    handlePlaylistSelection = (event) => {
        this.setState({
            playlist: event.target.value
        })
    }

    addSongToPlaylist = (event) => {
        console.log("hello you're trying to add song to playlist")
        if (this.state.playlist === "-"){
            alert("You must select a playlist")
        } else { 
            //querying allSongPlaylists to see if the song already exists on the playlist
            //should return an object in song variable if true
            let song = this.props.allSongPlaylists.find(songPlaylist => songPlaylist.song_id === this.props.song.id && songPlaylist.playlist_id === this.props.playlistId)
            if(song && song !== undefined){
                alert("This song is already on this playlist")
            } else {
                fetch("http://localhost:3000/song_playlists", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    song_id: this.props.song.id,
                    playlist_id: this.state.playlist
                })
                })
                .then(res=>res.json())
                .then(songPlaylist => {
                    console.log("success",songPlaylist)
                    this.props.addSongPlaylist(songPlaylist)
                    this.setState({showAddToPlaylistForm: false})
                })
            }
            // need to re-render songs in playlist container by fetching songPlaylists
        }
    }
    
    render(){
        return (
            <Songs>
                {this.props.edit ? <DeleteButton onClick={this.handleDeleteClick}>Remove</DeleteButton> : null} {this.props.showButton && <Button onClick={this.handleAddClick}>+</Button> }{this.props.showButton && <Button onClick={() => this.props.loadSongToPlay(this.props.song)}>Play</Button> } 
                <Grid2>
                    <Row>
                        <Col2>
                            {this.state.showAddToPlaylistForm && <AddSongToPlaylistForm userPlaylists={this.props.userPlaylists} playlist={this.state.playlist} addSongToPlaylist={this.addSongToPlaylist} handlePlaylistSelection={this.handlePlaylistSelection}/>}
                            {this.props.song.title}
                        </Col2>
                    </Row> 
                    <Row>
                        <Col3>
                            {this.props.song.artist}
                        </Col3>
                    </Row>
                </Grid2>
            </Songs>
        )
    }
}

export default SongCard