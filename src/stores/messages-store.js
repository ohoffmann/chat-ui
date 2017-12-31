import { observable, action } from 'mobx';
import uuid from 'uuid';
import io from 'socket.io-client';
import userStore from './user-store';

const socket = io('http://localhost:8000');

class MessagesStore {
    @observable messages = [];
    @observable message = '';
    

    constructor() {
        socket.on('new message', (msg) => {
            console.log('new msg has arrived');
            if(msg.userName !== userStore.userName)
                this.addMessage(msg, false);
          });
    }

    //Sends a chat message
    @action
    addMessage(messageObj, emit) {
        this.messages.push({
            id: uuid(),
            userName: messageObj.userName,
            avatar: messageObj.avatar,
            text: messageObj.text
          });

        // tell server to execute 'new message' and send along one parameter
        if(emit)
            socket.emit('new message', messageObj);
    }

    @action
    setMessage(msg) {
        this.message = msg;
    }
}

var store = new MessagesStore();
export default store;