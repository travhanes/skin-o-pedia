import React from "react";
import Header from "./header";
import Footer from "./footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>Hello World!</div>
        <Footer />
      </>
    );
  }
}

export default App;
