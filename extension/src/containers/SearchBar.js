import React, { Component } from 'react';
import styles from '../styles/search.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ content: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className={ cx('search') }>
                <form onSubmit={ this.onFormSubmit }>
                    <input type='text' value={this.state.content} onChange={this.onInputChange} placeholder="검색할 단어를 입력해 주세요" />
                    <button type='submit' className={ cx('search_btn') }>검색</button>
                </form>
            </div>
        )
    }
}

export default SearchBar
