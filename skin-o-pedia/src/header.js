import React from "react";
import "./style.css";

class header extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="part-1">
            <div className="shade-1"></div>
            <a href="#">Home</a>
          </div>
          <div className="part-2">
            <div className="shade-2"></div>
            <a href="#">Study</a>
          </div>
          <div className="part-3">
            <div className="shade-3"></div>
            <a href="#">Explore</a>
          </div>
          <div className="part-4">
            <div className="shade-4"></div>
            <a href="#">Contact Us</a>
          </div>
          <div className="part-5">
            <div className="shade-5"></div>
            <a href="#">About</a>
          </div>
        </div>
      </>
    );
  }
}

export default header;
