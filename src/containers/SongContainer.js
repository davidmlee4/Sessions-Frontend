import React from 'react'
import songs from "../songs.js"
import SongCard from "../components/SongCard"
import { Grid2, SongsContainerDiv, Search } from '../styled.js'
import styled from 'styled-components'

class SongContainer extends React.Component{

    state={
        songs: songs,
        addToPlaylist: {},
        song: {},
        search: ""
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            search: e.target.value
        })
    }

    searchSongs = () => {
        let songs = this.props.allSongs
        if (this.state.search !== ""){
          return songs.filter(song => song.title.includes(this.state.search) || song.artist.includes(this.state.search) )
        } else {return songs}
      }

    // current method linked to onClick for the add button for each song
    // handleChange = (song) => {
    //     fetch("http://localhost:3000/song_playlists", {
    //         method: "POST",
    //         headers: {
    //             "Accept": 'application/json',
    //             "Content-Type": 'application/json'
    //         },
    //         body: JSON.stringify({})
    //     })
    //     .then(res=>res.json())
    // }
    

    renderSongs = () => {
        return this.searchSongs().map(song => {
            return <SongCard 
                key={song.id} 
                song={song} 
                showButton={true}
                userPlaylists={this.props.userPlaylists}
                addSongPlaylist={this.props.addSongPlaylist}
                allSongPlaylists={this.props.allSongPlaylists}
                loadSongToPlay={this.props.loadSongToPlay}
            />
        })
    }

    render(){
        return (
            
            <SongsContainerDiv>
                <Search>
                Search <input className="prompt" onChange={this.onChange}/>
                </Search>
                {this.renderSongs()}
            </SongsContainerDiv>
        )
    }
}

export default SongContainer