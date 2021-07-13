import React from "react";
import "./footer.css";

class footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <p className="credits">created by New Technologist interns</p>
        <div className="part part-1">
          <div className="shade shade-1"></div>
        </div>
        <div className="part part-2">
          <div className="shade shade-2"></div>
        </div>
        <div className="part part-3">
          <div className="shade shade-3"></div>
        </div>
        <div className="part part-4">
          <div className="shade shade-4"></div>
        </div>
        <div className="part part-5">
          <div className="shade shade-5"></div>
        </div>
      </div>
    );
  }
}

export default footer;
