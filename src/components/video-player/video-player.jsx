import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.playTimeout = null;
  }

  componentDidMount() {
    const {muted, src, poster} = this.props;

    const video = this.videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = muted;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;

    const video = this.videoRef.current;

    if (isPlaying) {
      this.playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this.playTimeout);
    }
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.src = ``;
    video.poster = ``;
    video.muted = null;

    clearTimeout(this.playTimeout);
  }

  render() {
    return (
      <video
        ref={this.videoRef}
        width="280"
        height="175"
      >
        Sorry, your browser doesn&rsquo;t support embedded videos.
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
