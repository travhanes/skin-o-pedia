import React from "react";
import "./header.css";

class header extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="logo">S K I N - O - P E D I A</h1>
          <div className="part part-1">
            <div className="shade shade-1"></div>
            <a href="#" className="nav-link">
              Home
            </a>
          </div>
          <div className="part part-2">
            <div className="shade shade-2"></div>
            <a href="#" className="nav-link">
              Study
            </a>
          </div>
          <div className="part part-3">
            <div className="shade shade-3"></div>
            <a href="#" className="nav-link">
              Explore
            </a>
          </div>
          <div className="part part-4">
            <div className="shade shade-4"></div>
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </div>
          <div className="part part-5">
            <div className="shade shade-5"></div>
            <a href="#" className="nav-link">
              About
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default header;
