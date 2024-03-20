import React from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import GetStart from "./GetStart";

export const SignUp = ({ navigation }) =>{
    return(
        // <ScrollView style={{flex: 1}}>
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
              <TextInput style={styles.textInput} placeholder='Full name'></TextInput>
              <TextInput style={styles.textInput} placeholder='Phone number or Email'></TextInput>
              <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}></TextInput>
  
              {/* Sign Up Btn */}
              <TouchableOpacity style={styles.signUpBtn} >
                <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>Create Account</Text>
              </TouchableOpacity>
  
              <View style={{flexDirection: 'row', alignItems: 'space-around'}}>
                <View style={{height: 1, width: 130, backgroundColor: 'black'}}></View>
                <Text style={{paddingHorizontal: 15, fontSize: 12}}>Or</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text style={styles.signUpText}>Sign In</Text></TouchableOpacity>
              </View>
  
          </SafeAreaView>
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
  // logo:{
  //   flex: 1,
  //   position: 'absolute',
  //   top: 10,
    
  // },
  view:{
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#67e6ff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  signUpTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: 180,
    fontSize: 30,
    fontWeight: '700',
    // marginVertical: 20
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
    fontWeight: '500',
    marginVertical: 3
  },
  fgPass:{
    fontSize: 14,
    fontWeight: '700',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start'
  },
  signUpBtn:{
    backgroundColor: '#42C83C',
    paddingHorizontal: 100,
    paddingVertical: 25,
    borderRadius: 30,
    marginVertical: 10
  },
  icon:{
    marginHorizontal: 50,
    marginVertical: 30
  },
  notMbText:{
    fontSize: 14,
    fontWeight: '700'
  },    
  signUpText:{
    fontSize: 14,
    fontWeight: '700',
    color: 'white'
  }
});