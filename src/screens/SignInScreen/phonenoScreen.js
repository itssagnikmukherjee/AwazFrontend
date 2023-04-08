import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import PhoneInput from 'react-native-phone-number-input'

const PhonenoScreen = () => {
   const [phoneNumeber,setPhoneNumber] = useState('')
  return (
    <View style={styles.body}>
        <View style={styles.container}>
      <Text style={styles.heading}>Enter your phone number</Text>
      <Text style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        <View style={styles.phoneNo}>
        <PhoneInput 
        defaultValue={phoneNumeber}
        style={styles.phoneNo}
        />
        </View>
      <Text style={styles.button}>Continue</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        height: '100%',
        backgroundColor:'#7149C6',
        alignItems:'center',
    },
    phoneNo:{
        marginTop:20,
        borderRadius:100,
    },
    container:{
        width:'80%',
        marginTop:'30%'
    },
    para:{
marginTop:15,
color:'#fff'
    },
    heading:{
        fontSize:30,
color:'#fff'

    },
    button:{
        color:'#fff',
        padding:10,
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'#1877F2',
        width:'35%',
        borderRadius:15,
        marginTop:190,
    }
})

export default PhonenoScreen