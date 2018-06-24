import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { myWordBookShowRequest } from '../actions/word';
import InformationMain from '../components/organisms/InformationMain';
import WordMain from '../components/organisms/WordMain';
import ErrorBlock from '../components/molecules/ErrorBlock';

class WordBookDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        this.props.myWordBookShowRequest(this.props.bookIdx);
    }

    render() {
        console.log('status: ', this.props.status);
        return (
            <div>
                {
                    this.props.status !== 'FAILURE' ?
                        <div>
                            <InformationMain
                                title={`${this.props.title}`}
                                explanation={`${this.props.createDate}`}
                                buttonText="수정하기"
                            />
                            <WordMain
                                words={this.props.words}
                            />
                        </div>
                        :
                        <ErrorBlock 
                            title="단어장을 볼 수 없습니다"
                            description="단어장이 존재하지 않거나 비공개 일 수 있습니다 "
                        >
                            <Link to='/' style={{ textDecoration: 'underline', color: '#03a87c' }}>Langup으로 돌아가기</Link>
                        </ErrorBlock>
                }
            </div>
        );
    };
};

const mapStateToProps = ({ word }) => {
    console.log('word: ', word);
    return { ...word.focusBook };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ myWordBookShowRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WordBookDetailContainer);