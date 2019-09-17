import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import LoaderImg from './LoaderImg';
import TopFilter from './TopFilter';
import ListData from './ListData';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="bar-container">
              <Header />
              <LoaderImg />
              <TopFilter />
              <ListData />
              <Footer />
          </div>
      </div>
    );
  }
}

export default App;
