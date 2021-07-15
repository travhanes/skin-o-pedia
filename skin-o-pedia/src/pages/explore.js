import React from "react";
import { pages } from "../app";
import "../header.css";
import "../footer.css";
import "../Explore.css";
import "../style.css";


 //import { SearchBox } from '@fluentui/react/lib/SearchBox';

 //export const SearchBoxUnderlinedExample = () => <SearchBox placeholder="Search" underlined={true} />;

export class Explore extends React.Component {
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


      {/* BODY */}
  
      <div>
        <h1 className="page-title">SKIN-dex</h1>
        </div>

    {/* <div className="search-bar">
      <input type="text" className="form-control" placeholder="Search A Skin Condition..." />
      </div> */}
      
      <div className="ui icon input">
            <input type="text" placeholder="Search for a condition..."></input>
            <i className="search icon"></i>
      </div>
      {/* <div>{ SearchBox }</div>  */}  {/**still figuring this component out */}


        <div className="condition-table">
      <table>
      <thead className="thead-dark">
        <tr>
          <th></th>
          <th>Condition Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>Eczema</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Kawasaki Disease</td>
        </tr>
      </tbody>
    </table>
      </div>
      


      {/* FOOTER */}
        <div>
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
