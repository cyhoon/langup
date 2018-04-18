import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import Content from '../containers/Content';

class Main extends Component {

  constructor(props) {
    super(props);
  
    this.state = { isContent: false };
  }

  render() {
    return (
      <div>
        <SearchBar />
        { this.state.isMain ? <Content /> : null }
      </div>
    );
  }
}

export default Main;
