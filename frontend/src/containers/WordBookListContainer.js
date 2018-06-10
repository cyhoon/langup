import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { myWordListRequest } from '../actions/word';

import WordBookMain from '../components/organisms/WordBookMain';

class WordBookListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('component will mount');
    }

    render() {

        this.props.myWordListRequest();

        return (
            <div>
                <WordBookMain />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ myWordListRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WordBookListContainer);