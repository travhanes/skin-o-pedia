import React from "react";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Explore } from "./pages/Explore";
import { Flashcard } from "./pages/flashcard";
import { Homepage } from "./pages/homepage";

export const pages = {
  About: "About",
  Contact: "Contact",
  Explore: "Explore",
  Flashcard: "Flashcard",
  Homepage: "Homepage",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: pages.Homepage };
    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen(nextPage) {
    console.log("in changeScreen now");
    this.setState((state, props) => ({
      currentPage: nextPage,
    }));
  }

  render() {
    let whichComponentToShow;

    switch (this.state.currentPage) {
      case pages.About:
        whichComponentToShow = <About changePage={this.changeScreen} />;
        break;
      case pages.Contact:
        whichComponentToShow = <Contact changePage={this.changeScreen} />;
        break;
      case pages.Explore:
        whichComponentToShow = <Explore changePage={this.changeScreen} />;
        break;
      case pages.Flashcard:
        whichComponentToShow = <Flashcard changePage={this.changeScreen} />;
        break;
      case pages.Homepage:
        whichComponentToShow = <Homepage changePage={this.changeScreen} />;
        break;
      default:
        whichComponentToShow = <Homepage changePage={this.changeScreen} />;
        break;
    }

    return (
      <>
        <div className="App">{whichComponentToShow}</div>
      </>
    );
  }
}

export default App;
