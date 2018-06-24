import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { myWordListRequest } from '../actions/word';

import WordBookMain from '../components/organisms/WordBookMain';

class WordBookListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => { this.props.myWordListRequest(); }

    render() {
        return (
            <div>
                <WordBookMain
                    profileImage={this.props.profileImage}
                    list={this.props.list}
                />
            </div>
        );
    }
};

const mapStateToProps = ({ auth, word }) => {
    return { ...word.myBook, ...auth.status.user };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ myWordListRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WordBookListContainer);