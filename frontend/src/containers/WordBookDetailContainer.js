import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WordBookDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                WordBookDetailContainer
            </div>
        );
    };
};

const mapStateToProps = () => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(WordBookDetailContainer);