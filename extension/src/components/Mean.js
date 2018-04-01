import React from 'react';

import styles from '../styles/mean.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default (props) => {
    return (
        <div className={cx('mean')}>
            <strong>{props.mean}</strong>
        </div>
    )
}
