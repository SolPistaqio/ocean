import TextDisplay from "./TextDisplay";
import { Component } from "react";
import React from "react";
import Finished from "./Finished";
import ControlButtons from "./ControlButtons";

const text =
  "Begin in a comfortable seated position. Feel rooted, safe, and comfortable through your seat. This guided meditation script will help you feel less anxious. Take a deep breath in through your nose, and out through your mouth. Inhale for a count of three, and exhale for a count of six. Try to keep your breathing at this slow pace. As you inhale, imagine that you are breathing in calmness, peace, and strength. As you exhale, imagine that you are breathing out all of your anxiety, stress, and worry. There is nothing for you to worry about right now in this present moment. All there is to do in this moment is breathe. Feel your anxiety slip away with each exhale. If your mind drifts to feelings of worry, be mindful. Notice it, without judgment, and then bring your attention back to the breath. You are strong and can handle anything life throws at you. Notice how calm you feel as you sit and breathe. Make a long exhale, and take this feeling of relaxation with you.";

const textArray = text.split(". ");

class MeditationGuide extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.toggleplay = this.toggleplay.bind(this);
    this.togglemute = this.togglemute.bind(this);
    this.replay = this.replay.bind(this);
    this.toggleSpeed = this.toggleSpeed.bind(this);
  }
  state = {
    currentStringIndex: 0,
    paused: false,
    finished: false,
    speed: 5,
    muted: false,
  };

  toggleplay() {
    this.state.paused
      ? this.audioRef.current.play()
      : this.audioRef.current.pause();

    this.setState({ paused: !this.state.paused });
  }

  togglemute() {
    this.audioRef.current.muted = !this.state.muted;
    this.setState({ muted: !this.state.muted });
  }

  toggleSpeed() {
    if (this.state.speed === 5) {
      this.setState({ speed: 4 });
    } else if (this.state.speed === 4) {
      this.setState({ speed: 6 });
    } else {
      this.setState({ speed: 5 });
    }
    this.setTimer();
  }

  replay() {
    this.setState({
      currentStringIndex: 0,
      paused: false,
      finished: false,
    });
  }

  setTimer() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.tick(), this.state.speed * 1000);
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (
      !this.state.paused &&
      this.state.currentStringIndex < textArray.length + 1
    ) {
      this.setState({
        currentStringIndex: this.state.currentStringIndex + 1,
      });
      this.setTimer();
    } else if (this.state.currentStringIndex === textArray.length + 1) {
      this.setState({
        finished: true,
      });
    }
  }
  render() {
    return (
      <>
        {this.state.finished ? (
          <>
            <Finished />
          </>
        ) : (
          <>
            <TextDisplay
              speed={this.state.speed}
              index={this.state.currentStringIndex}
              text={textArray[this.state.currentStringIndex]}
              paused={this.state.paused}
            />
          </>
        )}
        <audio autoPlay loop ref={this.audioRef}>
          <source src="sound.mp3" type="audio/mpeg"></source>
        </audio>
        <ControlButtons
          control={this.state}
          toggleplay={this.toggleplay}
          togglemute={this.togglemute}
          replay={this.replay}
          toggleSpeed={this.toggleSpeed}
        />
      </>
    );
  }
}

export default MeditationGuide;
