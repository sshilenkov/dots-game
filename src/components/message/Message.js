import React from 'react';
import './Message.css';

import { connect } from 'react-redux';

const enhance = connect(
    ({ game }) => game
);

class Message extends React.Component {
    render() {
        const { error, message } = this.props;

        return(
            <div style={error ? {color: 'red'} : {}}>{error ? error : message}</div>
        );
    }
}

export default enhance(Message);