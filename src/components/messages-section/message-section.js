import React from 'react';
import { observer } from 'mobx-react';
import { Message } from './message/message';
import messagesStore from '../../stores/messages-store';

import './message-section.css';

@observer
export class MessageSection extends React.Component {
  render() {
    return (
      <div className="ms-container">
        <div id="chat-screen" className="ms-container-inside">
            {messagesStore.messages.map(msg => {
                return <Message key={msg.id} msg={msg} />
            })}
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    var chatScreen = document.getElementById('chat-screen');
    chatScreen.scrollTop = chatScreen.scrollHeight - chatScreen.clientHeight;
  }
}