import React, { Component } from 'react';

import styles from '../styles/content.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import Title from '../components/Title';
import Mean from '../components/Mean';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={cx('content')}>
                <Title word="hello" />
                <div className={cx('mean_list')}>
                    <Mean mean="1. (만났을 때의 인사로) 안녕(하세요); 인사; (전화에서나 남의 관심을 끌 때) 여보세요" />
                    <Mean mean="2. 이런, 어머나(놀라움을 나타냄)" />
                    <Mean mean="2. 이런, 어머나(놀라움을 나타냄)" />
                    <Mean mean="2. 이런, 어머나(놀라움을 나타냄)" />
                    <Mean mean="2. 이런, 어머나(놀라움을 나타냄)" />
                </div>
            </div>
        );
    }
}

export default Content;
