import React from 'react';
import './App.css';
// import { Switch, Route } from "react-router-dom";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import MainContainer from "./containers/MainContainer";
// import AudioPlayer from "./components/AudioPlayer"
import NavBar from "./components/NavBar";
import AnimalCrossing from "./songs/Animal Crossing.mp3"
import songs from "./songs"
import { BrowserRouter as Router } from "react-router-dom";
import { Grid, Row, Col, ArtistPlaying, TitlePlaying, Current,Image, CurrentPlaylist } from "./styled";



class App extends React.Component {

  state= {
    streamUrl: "",
    songs: songs,
    counter: 0,
    queue: [],
    playlistToLoad: [],
    albumArtworkArray: []
  }


  // componentDidMount = () => {
  //   this.setState({
  //     streamUrl: songs[this.state.counter]
  //   })
  // }

  handleNext = () => {
    let counter = this.state.counter + 1
    // let song = this.state.queue[counter]
    // this.setState({
    //   streamUrl: song
    // })

    this.setState({counter})
  }


  handlePrevious = () => {
    if(this.state.counter === 0){
      let counter = 0 
      this.setState({counter})
    } else {
      let counter = this.state.counter - 1 
      this.setState({counter})
    }
  }


  loadPlaylist = (playlist,title) => {
    //creates an array of songs by their title and artist
    let playlistToLoad = playlist.map(song => [song.title,song.artist,title])
    this.setState({playlistToLoad})

    //creates an array of songs by querying database by title
    let queue = playlist.map(song => songs[song.title])
    this.setState({queue})

    let albumArtworkArray = playlist.map(song => song.media)
    this.setState({albumArtworkArray})

    //reset the counter to zero on each load playlist
    let counter = 0 
    this.setState({counter})
  }

  loadSongToPlay = (song) => {

    let one = [song.title, song.artist, ""]
    let playlistToLoad = [one, ...this.state.playlistToLoad]
    this.setState({playlistToLoad})

    let queue = [songs[song.title], ...this.state.queue]
    this.setState({queue})

    let albumArtworkArray = [song.media,...this.state.albumArtworkArray]
    this.setState({albumArtworkArray})

    let counter = 0
    this.setState({counter})

  }

  loadCurrentTitle = () => {
    if(this.state.playlistToLoad[this.state.counter] !== undefined){
      return this.state.playlistToLoad[this.state.counter][0]
    } else {
      return
    }
  }

  loadCurrentArtist = () => {
    if(this.state.playlistToLoad[this.state.counter] !== undefined){
      return this.state.playlistToLoad[this.state.counter][1]
    } else {
      return
    }
  }

  loadPlaylistTitle = () => {
    if(this.state.playlistToLoad[this.state.counter] !== undefined){
      return this.state.playlistToLoad[this.state.counter][2]
    }
  }

  loadAlbumArtwork = () => {
    if(this.state.playlistToLoad[this.state.counter] !== undefined){
      return this.state.albumArtworkArray[this.state.counter]
    }
  }

  render() {
    console.log(this.state.albumArtworkArray)
      return (
        <Router>
          <NavBar/> 
          <div>
            <AudioPlayer 
              layout="stacked-reverse" 
              src={this.state.queue[this.state.counter] && this.state.queue[this.state.counter]} 
              showSkipControls 
              onClickNext={this.handleNext} 
              onClickPrevious={this.handlePrevious} 
              onEnded={this.handleNext} 
              autoPlay
            />
          </div>
          <Grid>
            <Row>
              <Col>
                <MainContainer 
                loadPlaylist={this.loadPlaylist}
                loadSongToPlay={this.loadSongToPlay}
              />
              </Col>
            </Row>
            <Row>
              <Col>
                  <Current>{this.state.playlistToLoad[0] && "Currently Playing"}</Current>
                  <CurrentPlaylist>{this.loadPlaylistTitle()}</CurrentPlaylist>
                  {this.state.albumArtworkArray[this.state.counter] && <Image><img src={this.loadAlbumArtwork()} width="275" height="275"/></Image>}
                  <TitlePlaying>{this.loadCurrentTitle()}</TitlePlaying>
                  <ArtistPlaying>{this.loadCurrentArtist()}</ArtistPlaying>
              </Col> 
            </Row>
          </Grid>
       
        </Router>
    );
  }
}

export default App;
