import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function GetStart({ navigation }) {
    return (
        <ImageBackground source={require('../assets/BackGround/bgshape.png')} resizeMode="cover" style={styles.bgImg}>
          {/* <Image source={require('../assets/Logo/Spotify.png')} style={styles.logo}></Image> */}
          <Text style={styles.titleText}>Smart Home App</Text>
          <Text style={styles.contentText}>Build your home with variously smart devices</Text>
          
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('SignInOrSignUp')} >
            <Text style={{fontSize: 22, fontWeight: '700', color: '#fff'}}>Get Start</Text>
          </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  bgImg:{
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#67e6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // logo:{
  //   position: 'absolute',
  //   top: 60,
  // },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    marginTop: 400
    // position: 'absolute',
    // top: 350
  },
  contentText:{
    fontSize: 17,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
    width: 330
  },
  startButton:{
    backgroundColor: '#67e6ff',
    paddingHorizontal: 120,
    paddingVertical: 20,
    borderRadius: 30,
  }
});
