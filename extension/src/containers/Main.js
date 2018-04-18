import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/SearchBar';
import Content from '../containers/Content';

class Main extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        { this.props.mainContainer ? <Content /> : null }
      </div>
    );
  }
}

function mapStateToProps({main}) {
  return main;
}

export default connect(mapStateToProps)(Main);
