import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InformationMain from '../components/organisms/InformationMain';

import { myWordBookShowRequest } from '../actions/word';
import WordMain from '../components/organisms/WordMain';

class WordBookDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        this.props.myWordBookShowRequest(this.props.bookIdx);
    }

    render() {
        return (
            <div>
                <InformationMain
                    title={`${this.props.title}`}
                    explanation={`${this.props.createDate}`}
                    buttonText="수정하기"
                />
                <WordMain
                    userWords={this.props.userWords}
                />
            </div>
        );
    };
};

const mapStateToProps = ({ word }) => {
    return { ...word.focusBook };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ myWordBookShowRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WordBookDetailContainer);