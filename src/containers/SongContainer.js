import React from 'react'
import songs from "../songs.js"
import SongCard from "../components/SongCard"

class SongContainer extends React.Component{

    state={
        songs: songs,
        addToPlaylist: {},
        song: {},
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
        return this.props.allSongs.map(song => {
            return <SongCard 
                key={song.id} 
                song={song} 
                showButton={true}
                userPlaylists={this.props.userPlaylists}
                addSongPlaylist={this.props.addSongPlaylist}
                allSongPlaylists={this.props.allSongPlaylists}
            />
        })
    }

    render(){
        return (
            <div>
                {this.renderSongs()}
            </div>
        )
    }
}

export default SongContainer