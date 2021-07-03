/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import CreateUser from './app/views/createUser';
import CreateUser2 from './app/views/createUser2';
import SplashScreen from './app/views/splashScreen';
import WelcomeScreen from './app/views/welcomeScreen';
import AppStack from './app/navigator/stack';



class App extends Component {
    render(){
      return <AppStack/>;
    }

}



export default App;
