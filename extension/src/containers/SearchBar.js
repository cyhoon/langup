import React, { Component } from 'react';

import styles from '../styles/search.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ content: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        const searchWord = this.state.content;

        if (searchWord.trim().length === 0) {
            console.log('검색 단어를 입력해 주세요');
            return;
        }

        // 서버로 요청하는 작업 진행
        this.props.search(searchWord);
        this.setState({ content: '' });
    }

    render() {
        return (
            <div className={ cx('search') }>
                <form onSubmit={ this.onFormSubmit }>
                    <input type='text' value={this.state.content} onChange={this.onInputChange} placeholder="검색할 단어를 입력해 주세요" />
                    <button type='submit' className={ cx('search-btn') }>검색</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
