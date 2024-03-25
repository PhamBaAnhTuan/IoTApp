import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { createUserWithEmailAndPassword } from "@firebase/auth";
import {FIREBASE_AUTH} from '../firebase/FirebaseConfig';

export const SignUp = ({ navigation }) =>{

  // Sign Up Function
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const handleUsernameChange = (text) => setUsername(text);
  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

      const signUp = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed up successfully
        const user = userCredential.user;
        console.log('User signed up success:', user);
        alert('Created Account')
        navigation.navigate('SignInOrSignOut');
      } catch (error) {
        // Error
        console.error('Sign up error:', error);
        alert(error.message);
      }
    };



    return(

        <LinearGradient
              colors={['#66ffff', '#3b5998', '#192f6a']}
              style={styles.gradient}>
          <SafeAreaView style={styles.view}>
            {/* <Image style={styles.logo} source={require('../assets/Logo/Spotify.png')}></Image> */}
              <Text style={styles.signUpTitle}>Sign Up</Text>
  
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Text style={styles.detailText}>If you need any support </Text>
                <TouchableOpacity onPress={() => alert('Access Spotify.com for more in4')}>
                  <Text style={styles.clickText}>Click Here</Text>
                </TouchableOpacity>
              </View>

              {/* Input */}
              <KeyboardAvoidingView behavior = 'padding'>
                
                <TextInput style={styles.textInput} 
                keyboardType='email-address'
                value={username} onChange={handleUsernameChange} 
                placeholder='Full name'>
                </TextInput>

                <TextInput style={styles.textInput}
                value={email} 
                onChangeText={handleEmailChange} 
                placeholder='Email'>
                </TextInput>

                <TextInput style={styles.textInput} 
                value={password} onChangeText={handlePasswordChange} 
                placeholder='Password' 
                secureTextEntry={true}>
                </TextInput>
              </KeyboardAvoidingView>
  
              {/* Sign Up Btn */}
              <TouchableOpacity style={styles.signUpBtn} onPress={signUp} >
                <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>Create Account</Text>
              </TouchableOpacity>
  
              <View style={{flexDirection: 'row', alignItems: 'space-around'}}>
                <View style={{height: 1, width: 130, backgroundColor: 'black'}}></View>
                <Text style={{paddingHorizontal: 10, fontSize: 15, marginTop: 50}}>Or</Text>
                <View style={{height: 1, width: 130, backgroundColor: 'black'}}></View>
              </View>
  
              {/* Another Sign In */}
              <View style={{flexDirection: 'row', alignItems: 'space-between'}}>
                <TouchableOpacity onPress={() => alert('Google')}>
                  <Image style={styles.icon} source={require('../assets/Icon/google.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Apple')}>
                  <Image style={styles.icon} source={require('../assets/Icon/apple.png')}></Image>
                </TouchableOpacity>
              </View>
  
              {/* Sign Up */}
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.notMbText}>Have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.signUpText}>Sign In</Text>
                </TouchableOpacity>
              </View>
  
          </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
  gradient:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:{
    height: '100%',
    width: '100%',
    flex: 1,
    // backgroundColor: '#67e6ff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  signUpTitle: {
    fontSize: 50,
    fontWeight: '700',
    marginTop: 100,
    marginBottom: 100,
  },
  detailText:{
    fontSize: 12,
    fontWeight: '400'
  },
  clickText:{
    fontSize: 12,
    fontWeight: '400',
    color: 'blue'
  },
  textInput:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    height: 60,
    width: 300,
    paddingLeft: 25,
    fontSize: 15,
    fontWeight: '400',
    marginVertical: 3,
    color: 'white'
  },
  fgPass:{
    fontSize: 14,
    fontWeight: '700',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start'
  },
  signUpBtn:{
    backgroundColor: '#66abcd',
    paddingHorizontal: 100,
    paddingVertical: 25,
    borderRadius: 30,
    marginVertical: 10,
  },
  icon:{
    marginHorizontal: 50,
    marginVertical: 10
  },
  notMbText:{
    fontSize: 14,
    fontWeight: '700',
    marginTop: 15
  },    
  signUpText:{
    fontSize: 14,
    fontWeight: '700',
    color: '#66ffff',
    marginTop: 15
  }
});