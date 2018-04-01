import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../styles/content.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import Title from '../components/Title';
import Mean from '../components/Mean';

/**
 * Redux 적용시키면 될 듯.
 */
class Content extends Component {
    // constructor(props) {
    //     super(props);
    // }

    renderMean(mean) {
        return (
            <Mean key={mean.idx} mean={mean.content} />
        );
    }

    render() {
        return (
            <div className={cx('content')}>
                <Title word={this.props.word} />
                <div className={cx('mean_list')}>
                    {this.props.means.map(this.renderMean)}
                </div>
            </div>
        );
    }
}

function mapStateToProps({search}) {
    return search;
}

export default connect(mapStateToProps)(Content);
