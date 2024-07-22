import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GetStart({ navigation }) {
  return (
    <SafeAreaView style={styles.safeView}>
      <LinearGradient
        colors={['#66ffff', '#3b5998', '#192f6a']}
        style={{ height: '100%' }}>

        <ImageBackground source={require('../assets/BackGround/bgshape.png')} resizeMode="contain" style={styles.bgImg}>

          <Text style={styles.titleText}>Smart Home App</Text>
          <Text style={styles.contentText}>Build your home with variously smart devices</Text>

          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('SignInOrSignUp')} >
            <Text style={{ fontSize: 17, fontWeight: '700', color: 'black' }}>Get Start</Text>
          </TouchableOpacity>

        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    height: '100%',
    width: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  
  bgImg: {
    height: '100%',
    width: '100%',
    flex: 1,
    // backgroundColor: '#67e6ff',
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
    marginTop: 500
    // position: 'absolute',
    // top: 350
  },
  contentText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    // marginTop: 10,
    width: 330
  },
  startButton: {
    backgroundColor: '#66ffff',
    paddingHorizontal: 120,
    paddingVertical: 15,
    borderRadius: 10,
  }
});
