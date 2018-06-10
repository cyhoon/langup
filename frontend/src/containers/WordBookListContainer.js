import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { myWordListRequest } from '../actions/word';

import WordBookMain from '../components/organisms/WordBookMain';

class WordBookListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => { this.props.myWordListRequest(); }

    render() {
        return (
            <div>
                <WordBookMain
                    list={this.props.list}
                />
            </div>
        );
    }
};

const mapStateToProps = ({ word }) => {
    return { ...word.myBook };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ myWordListRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WordBookListContainer);