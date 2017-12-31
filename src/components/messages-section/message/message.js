import React from 'react';
import userStore from '../../../stores/user-store';

import './message.css';

export class Message extends React.Component {
  render() {
    var style = {
        backgroundColor: this.props.msg.userName === userStore.userName ? 'cornflowerblue' : 'lightgreen'
    }
    return (
      <div className="message-container">
        <div className="message-part ms-image">
          <img src={this.props.msg.avatar} width="32px" height="32px" alt="Pokemon" />
        </div>
        <div className="message-part ms-sender">
            {this.props.msg.userName}
        </div>
        <div className="ms-message-container" style={style}>
          <div className="ms-message" >
            {this.props.msg.text}
          </div>
        </div>
      </div>
    );
  }
}