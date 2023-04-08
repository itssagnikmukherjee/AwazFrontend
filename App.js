import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import SignInScreen from './src/screens/SignInScreen';
// import PhonenoScreen from './src/screens/SignInScreen/';
// import SplashScreen from './src/screens/SignInScreen/';
// import SignUpScreen from './src/screens/SignInScreen/';
import RecordingScreen from './src/screens/SignInScreen/';

const App = () => {

  return (
    <SafeAreaView style={styles.root}>
        {/* <SignInScreen /> */}
        {/* <PhonenoScreen/> */}
        {/* <SplashScreen /> */}
        {/* <SignUpScreen/> */}
        {/* <RecordingScreen/> */}
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root :{
    flex: 1,
  }
})


export default App;
