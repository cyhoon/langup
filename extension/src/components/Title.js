import React from 'react';

import styles from '../styles/title.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default (props) => {
    return (
        <div className={cx('title')}>
            <h2>{props.word}</h2>
        </div>
    );
}
