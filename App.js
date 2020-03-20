

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Component,
} from 'react-native';

import Komponentti from "./components/komponentti.js"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dayNoteOn:false
    };
  }



  render(){
    
    return (
    <View>
      <Komponentti/>
      <Text>Moikka</Text>
    </View>
    )
  }
}

export default App;