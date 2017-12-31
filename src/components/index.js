import React from 'react';
import { observer } from 'mobx-react';
import userStore from '../stores/user-store';
import { ChatHeader } from './chat-header/chat-header';
import { TextArea } from './text-area/text-area';
import { MessageSection } from './messages-section/message-section';
import { Login } from './login/login';

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        {userStore.userName ?
          <div>
            <ChatHeader />
            <MessageSection />
            <TextArea />
          </div> :
          <Login />
        }
      </div>
    );
  }
}

export default App;