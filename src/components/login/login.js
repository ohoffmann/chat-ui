import React from 'react';
import userStore from '../../stores/user-store';

import './login.css';

export class Login extends React.Component {
    userName = '';
    render() {
        return (
            <div className="login-page">
                <div className="login-center">
                    <h3 className="title">What's your name?</h3>
                    <input className="user-name-input" type="text" maxLength="14" onKeyPress={this.onKeyPress} />
                </div>
            </div>
        );
    }

    onKeyPress = (e) => {
        if(e) {
            if ((e.which === 13 || e.keyCode === 13) && e.target.value !== '') {
                userStore.setUsername(e.target.value.trim());
            }
        }
    }
}