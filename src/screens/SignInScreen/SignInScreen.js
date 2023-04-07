import { View, Text, StyleSheet, Button, Image, Touchable, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const SignInScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.flexbox}>
        <Text style={styles.signUpbtn}>SignUP</Text>
      </View>
    
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <Text style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
    </View>
   
    <View style={styles.containerDetails}>
    <TextInput style={styles.textInput} placeholder='Name'/>
    <TextInput style={styles.textInput} placeholder='Password'/>
    <Text style={styles.customButton}>Sign In</Text>

    <View style={styles.bottomContainer}>
    <Text style={styles.loginBtns}>Login via Google</Text>
    <Text style={styles.loginBtns}>Login via Facebook</Text>
    </View>

    </View>
</View>
  )
}

const styles = StyleSheet.create({
    body:{
        height: '100%',
        backgroundColor:'#7149C6',
    },
    bottomContainer:{
      borderTopColor:'#b6b6b8',
      borderTopWidth:2,
      alignItems:'center',
      width:'95%',
      padding:10,
    },
    root:{
      alignItems:'center',
      padding:'20',
    },
    customButton:{
      width:'85%',
      margin:20,
      borderRadius:15,
      padding:18,
      alignItems: 'center',
      textAlign:'center',
      backgroundColor:'#000',
      color:'#fff',
      fontSize:18,
    },
    loginBtns:{
      borderRadius:15,
      fontSize:18,
      margin:10,
      padding:10,
      backgroundColor:'#1877F2',
      color:'#fff',
      width:'95%',
      alignItems:'center',
      textAlign:'center',
    },
    containerDetails:{
      backgroundColor:'#fff',
      height:'65%',
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      alignItems:'center',
      width:'100%',
    },
    textInput:{
      backgroundColor:'#e8e8e8',
      borderRadius:15,
      width:'85%',
      marginTop: 25,
      padding:12,
      color:'black',
      fontSize: 18,
    },
    flexbox:{
      flex:1,
      alignItems:'flex-end',
      padding:10,
    },
    heading:{
        fontSize: 35,
        marginBottom:10,
        fontFamily:'Roboto',
        color:"#fff",
    },
    para:{
        fontSize: 18,
        marginBottom:10,
        color:"#fff",
    },
    container:{
        margin:25,
        marginTop:55,
        position:"absolute",
    },
    signUpbtn:{
      color:'#fff',
      width:'20%',
      margin:20,
      fontSize:18,
    }
})

export default SignInScreen