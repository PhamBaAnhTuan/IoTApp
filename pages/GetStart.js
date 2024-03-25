import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GetStart({navigation}) {
  // const progress = (value - minValue) / (maxValue - minValue);

  // const getColorStops = () => {
  //   // Define your color stops based on the desired range
  //   return ['red', 'green']; // Example: Red to green gradient
  // };
  // const getStartAndEndPoints = () => {
  //   // Define start and end points for the gradient based on progress
  //   return [0, progress];
  // };

    return (
        <LinearGradient
          colors={['#66ffff', '#3b5998', '#192f6a']}
          style={{height:'100%'}}>

          <ImageBackground source={require('../assets/BackGround/bgshape.png')} resizeMode="cover" style={styles.bgImg}>
            
            <Text style={styles.titleText}>Smart Home App</Text>
            <Text style={styles.contentText}>Build your home with variously smart devices</Text>
            
            <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('SignInOrSignUp')} >
              <Text style={{fontSize: 22, fontWeight: '700', color: '#fff'}}>Get Start</Text>
            </TouchableOpacity>

          </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
  bgImg:{
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
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginTop: 350
    // position: 'absolute',
    // top: 350
  },
  contentText:{
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
    width: 330
  },
  startButton:{
    backgroundColor: '#66ffff',
    paddingHorizontal: 120,
    paddingVertical: 20,
    borderRadius: 30,
  }
});
