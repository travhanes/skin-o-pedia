import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />
      <div>Hello World!</div>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
