import React, { Component } from "react";

const shadow404 = {
    color: 'white',
    textShadow: '2px 2px 4px #000000'
  };

class NotFound extends Component {
  render() {
    return (
      <div style={shadow404}>
        Error 404 - Page not Found.
      </div>
    );
  }
}

export default NotFound;