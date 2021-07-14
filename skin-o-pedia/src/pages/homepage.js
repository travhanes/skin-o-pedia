import React from "react";
import { pages } from "../app";
import "../header.css";
import "../footer.css";
import "../style.css";

export class Homepage extends React.Component {
  render() {
    return (
      <>
        {/* HEADER */}
        <div className="container">
          <h1 className="logo">S K I N - O - P E D I A</h1>
          <div className="part part-1">
            <div className="shade shade-1"></div>
            <a
              href="#"
              onClick={(e) => this.props.changePage(pages.Homepage)}
              className="nav-link"
            >
              Home
            </a>
          </div>
          <div className="part part-2">
            <div className="shade shade-2"></div>
            <a
              href="#"
              onClick={(e) => this.props.changePage(pages.Flashcard)}
              className="nav-link"
            >
              Flashcard
            </a>
          </div>
          <div className="part part-3">
            <div className="shade shade-3"></div>
            <a
              href="#"
              onClick={(e) => this.props.changePage(pages.Explore)}
              className="nav-link"
            >
              Explore
            </a>
          </div>
          <div className="part part-4">
            <div className="shade shade-4"></div>
            <a
              href="#"
              onClick={(e) => this.props.changePage(pages.Contact)}
              className="nav-link"
            >
              Contact Us
            </a>
          </div>
          <div className="part part-5">
            <div className="shade shade-5"></div>
            <a
              href="#"
              onClick={(e) => this.props.changePage(pages.About)}
              className="nav-link"
            >
              About
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div>Homepage</div>
          <div className="searchbar">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."></input>
              <i className="search icon"></i>
            </div>
          </div>
        </div>

        {/* FOOTER */}
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
      </>
    );
  }
}
