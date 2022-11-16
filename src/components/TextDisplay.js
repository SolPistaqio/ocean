import { Component } from "react";

class TextDisplay extends Component {
  state = {
    fadeOut: false,
  };
  async componentDidUpdate(prevProps) {
    if (this.props.index !== prevProps.index) {
      await this.fade();
      this.setState({ fadeOut: false });
    }
    if (this.props.speed !== prevProps.speed) {
      clearTimeout(this.timer);
      this.fade();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fade() {
    const time = (this.props.speed - 1) * 1000;
    if (!this.props.paused) {
      this.timer = setTimeout(() => {
        this.setState({ fadeOut: true });
      }, time);
    }
  }

  render() {
    return (
      <div className="content">
        <h2
          className={this.state.fadeOut ? "animateTextOut" : "animateText"}
          key={this.props.index}
        >
          {this.props.text}
        </h2>
      </div>
    );
  }
}

export default TextDisplay;
