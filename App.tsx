/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch
} from 'react-native';
import MainScreen from './src/screens/mainscreen/mainScreen';

const App = () => {
  
return (
    <SafeAreaView style = {{flex:1}}>
        <MainScreen/>
          </SafeAreaView>
);
};


export default App;


