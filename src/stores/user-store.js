import { observable, action } from 'mobx';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

class UserStore {
    @observable userName = "";
    avatar = '';
    

    constructor() {
        var randomNumber = Math.floor(Math.random() * 5) + 1;
        this.avatar = this.getUserImagePath(randomNumber);
    }

    getUserImagePath(randomNumber) {
        switch(randomNumber) {
            case 1:
                return 'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png';
            case 2:
                return 'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png';
            case 3:
                return 'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png';
            case 4:
                return 'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png';
            case 5:
                return 'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png';
            default:
                return '';
        }
    }

    @action
    setUsername(userName) {
        this.userName = userName;
        socket.emit('add user', userName);
    }
}

var store = new UserStore();
export default store;