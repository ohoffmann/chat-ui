import React from 'react';
import { observer } from 'mobx-react';
import userStore from '../../stores/user-store';
import messagesStore from '../../stores/messages-store';

import './text-area.css';

@observer
export class TextArea extends React.Component {
  render() {
    var imgPath = userStore.avatar;
    return (
      <div className="ta-container">
        <div className="ta-user-details">
          <div className="ta-user-name">{userStore.userName}</div>
          <div className="ta-user-image">
            <img src={imgPath} width="80px" height="80px" alt="Pokemon" />
          </div>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)} className="ta-user-text-container">
          <div className="ta-user-text-container">
              <textarea onKeyPress={this.onEnterPressed} onChange={(e) => this.handleChange(e)} placeholder="Type your message..." value={messagesStore.message} className="ta-user-text" />
              <input type="submit" value="Send" className="ta-user-send-btn" />
          </div>
        </form>
      </div>
    );
  }

  onEnterPressed = (e) => {
    if(e) {
      if ((e.which === 13 || e.keyCode === 13) && e.target.value !== '') {
        this.setMessage();
      }
    }
  }

  setMessage() {
    if(messagesStore.message === '') {
      return;
    }
    messagesStore.addMessage({
      userName: userStore.userName,
      avatar: userStore.avatar,
      text: messagesStore.message
    }, true);
    messagesStore.setMessage('');
  }

  handleSubmit = (event) => {
    this.setMessage();
    event.preventDefault();
  }

  handleChange = (event) => {
    messagesStore.setMessage(event.target.value);
  }
}