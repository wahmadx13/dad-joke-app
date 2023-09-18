import React, { Component } from "react";
import "../../assets/css/Joke.css";

class Joke extends Component {
  getColorAndEmoji() {
    if (this.props.votes >= 15) {
      return {
        color: "#4caf50",
        emoji: "em em-rolling_on_the_floor_laughing",
      };
    } else if (this.props.votes >= 12) {
      return {
        color: "#8bbc34a",
        emoji: "em em-laughing",
      };
    } else if (this.props.votes >= 9) {
      return {
        color: "#cddc39",
        emoji: "em em-smiley",
      };
    } else if (this.props.votes >= 6) {
      return {
        color: "#ffeb3b",
        emoji: "em em-slightly_smiling_face",
      };
    } else if (this.props.votes >= 3) {
      return {
        color: "#ffc107",
        emoji: "em em-neutral_face",
      };
    } else if (this.props.votes >= 0) {
      return {
        color: "#ff9800",
        emoji: "em em-confused",
      };
    } else {
      return {
        color: "#f44336",
        emoji: "em em-angry",
      };
    }
  }

  render() {
    const { color, emoji } = this.getColorAndEmoji();
    return (
      <div className='Joke'>
        <div className='Joke-buttons'>
          <i className='fas fa-arrow-up' onClick={this.props.upVote} />
          <span className='Joke-votes' style={{ borderColor: color }}>
            {this.props.votes}
          </span>
          <i className='fas fa-arrow-down' onClick={this.props.downVote} />
        </div>
        <div className='Joke-text'>{this.props.text}</div>
        <div className='Joke-smiley'>
          <i className={emoji} />
        </div>
      </div>
    );
  }
}

export default Joke;
