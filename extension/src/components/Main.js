import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import Content from '../containers/Content';

class Main extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Content />
      </div>
    );
  }
}

export default Main;
