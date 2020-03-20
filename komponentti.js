import React, { Component } from 'react';

import {
  View,
  Image,
  ImageBackground,
  Text, 
  StyleSheet
} from 'react-native';

class Komponentti extends Component {

  constructor(props) {
    super(props);
    let p = this.props;
       
  }
  render() {
    return(

        <View>


            <Text>
                Moika

            </Text>





        </View>





        
    )
  }
}

const styles = StyleSheet.create({
  asBgImg:{
    width: "100%", 
    height: "100%",
    flex:1, 
  },  
  asImg:{
    position:'absolute',
    width: "100%", 
    height: "100%",  
  },  
  img:{
    position:'absolute',
    width: "100%",
    height: "100%",
  }, 
});

export default Komponentti;