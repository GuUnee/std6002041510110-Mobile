import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

// write component
class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
    }
    onChangeEmail(e){
        console.log('onChangeEmail', e)
        this.setState({email: e})
    }
    onChangePassword(e) {
        console.log('onChangePassword', e)
        this.setState({ password: e})
    }
    onPress() {
        console.log(this.setState)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response => {
                console.log(' token ', response.data.data.token)
            })
    }
    render() {
        return (
            <View>
              <TextInput
                style={{ hight: 20, fontWeight: 'bold', fontSize: 25 }}
                placeholder="Email"
                value={this.state.email}
                onChangeText={this.onChangeEmail}
            />
                <TextInput
                    secureTextEntry
                    style={{ height: 80, fontWeight: 'bold', fontSize: 25 }}
                    placeholder="Password"
                    value={this.state.ps600assword}
                    onChangeText={this.onChangePassword.bind(this)}
                
            />
                <Button title="Login"
                onPress={this.onPress.bind(this)}
            />
                
            </View>
        );
    }
}
export default Login;