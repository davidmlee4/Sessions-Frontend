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
    counter: 0
  }


  componentDidMount = () => {
    this.setState({
      streamUrl: songs[this.state.counter]
    })
  }

  handleNext = () => {
    let counter = this.state.counter + 1
    let song = this.state.songs[counter]
    this.setState({
      streamUrl: song
    })

    this.setState({counter})
  }


  render() {
      return (
        <Router>
          <NavBar/>
          <MainContainer/>
          <div>
            <AudioPlayer src={this.state.streamUrl} showSkipControls onClickNext={this.handleNext}/>
          </div>
        </Router>
    );
  }
}

export default App;
