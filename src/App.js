import React from 'react';
import './App.css';
// import { Switch, Route } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import MainContainer from "./containers/MainContainer";
// import AudioPlayer from "./components/AudioPlayer"
import NavBar from "./components/NavBar";
import AnimalCrossing from "./songs/Animal Crossing.mp3"
import songs from "./songs"
import { BrowserRouter as Router } from "react-router-dom";
import { AppDiv } from "./styled";




class App extends React.Component {

  state= {
    streamUrl: "",
    songs: songs,
    counter: 0,
    queue: [],
    playlistToLoad: []
  }

  //need previous song state to handlePrevious on click
  //show current song playing

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

  findSong = () => {
    return this.state.songs['Toosie Slide']
  }

  loadPlaylist = (playlist) => {
    //creates an array of songs by their title and artist
    let playlistToLoad = playlist.map(song => song.title + "-" + song.artist)
    this.setState({playlistToLoad})

    //creates an array of songs by querying database by title
    let queue = playlist.map(song => songs[song.title])
    this.setState({queue})

    //reset the counter to zero on each load playlist
    let counter = 0 
    this.setState({counter})
  }

  render() {
    console.log(this.state.queue)
      return (
        <Router>
          <NavBar/> 
          <MainContainer loadPlaylist={this.loadPlaylist}/>
          <div>
            <AudioPlayer src={this.state.queue[this.state.counter]} showSkipControls onClickNext={this.handleNext} onClickPrevious={this.handlePrevious} onEnded={this.handleNext} autoPlay/>
            <div>
              Current:
                <h4>{this.state.playlistToLoad[0] && this.state.playlistToLoad[this.state.counter].split("-")[0]}</h4>
                <h5>{this.state.playlistToLoad[0] && this.state.playlistToLoad[this.state.counter].split("-")[1]}</h5>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
