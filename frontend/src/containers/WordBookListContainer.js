import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { myWordListRequest } from '../actions/word';
import WordBookMain from '../components/organisms/WordBookMain';
import ErrorBlock from '../components/molecules/ErrorBlock';
import InformationMain from '../components/organisms/InformationMain';

class WordBookListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => { 
        this.props.isLoggedIn ? this.props.myWordListRequest() : '';
    }

    render() {
        console.log('this props: ', this.props);
        return (
            <div>
                {this.props.isLoggedIn ?
                    <div>
                        <InformationMain
                            title="나만의 단어장"
                            explanation="회원님의 단어장을 보여 줍니다"
                            buttonText="단어장 추가"
                        />
                        <WordBookMain
                            profileImage={this.props.profileImage}
                            list={this.props.list}
                        />
                    </div>
                    :
                    <ErrorBlock 
                        title="로그인이 필요한 서비스입니다"
                        description="나의 단어장 기능을 이용하시려면 로그인을 해 주세요 "
                    >
                        <Link to='/login' style={{ textDecoration: 'underline', color: '#03a87c' }}>로그인 바로가기</Link>
                    </ErrorBlock>
                }
            </div>
        );
    }
};

const mapStateToProps = ({ auth, word }) => {
    return { ...word.myBook, isLoggedIn: auth.status.isLoggedIn, ...auth.status.user };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ myWordListRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WordBookListContainer);