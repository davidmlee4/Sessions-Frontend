import React from 'react'
import { render } from 'react-dom'
import SongCard from "./SongCard"

class Playlist extends React.Component {

    state={
        show: false,
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
    handleClick = () => {
        if(this.state.songIds[0] === undefined){
            alert("This playlist doesn't contain any songs")
        } else {
        let show = !this.state.show
        this.setState({show})
        }
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
            />
        )
        
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.show ? "Hide Songs" : "Show Songs"}</button> {this.props.playlist.title} 
                <div>
                    {this.state.show && this.renderSongsOnPlaylist()}
                </div>
            </div>
        )
    }
}

export default Playlist