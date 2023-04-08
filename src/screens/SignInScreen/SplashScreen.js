import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.root}>
        <Image source={require('../../../assets/awazBG.png')} style={styles.image}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        backgroundColor:'#000',
        height:'100%',
        justifyContent:'center',
    },
    image :{
     height:200,
     width:400,
    },
  })

export default SplashScreen