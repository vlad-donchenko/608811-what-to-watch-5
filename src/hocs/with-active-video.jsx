import React from "react";

const widthActiveVideo = (Component) => {
  class WithActiveVideo extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false
      };
      this._handlePlayerMouseEnter = this._handlePlayerMouseEnter.bind(this);
      this._handlePlayerMouseOut = this._handlePlayerMouseOut.bind(this);
    }

    _handlePlayerMouseEnter() {
      this.setState({
        isPlaying: true
      });
    }

    _handlePlayerMouseOut() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onPlayerMouseEnter={this._handlePlayerMouseEnter}
          onPlayerMouseOut={this._handlePlayerMouseOut}
        />
      );
    }
  }

  return WithActiveVideo;
};

export default widthActiveVideo;
