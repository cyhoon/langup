import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordBookListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                WordBookListContainer
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
};

export default connect(mapStateToProps, null)(WordBookListContainer);