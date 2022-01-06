import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Contacts from "./components/Contacts";

// main structure
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contacts" />
        <div className="container">
          <Contacts />
        </div>

      </div>
    );
  }
}

export default App;
