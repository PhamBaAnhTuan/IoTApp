import {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import PieChart from "react-native-pie-chart";
import { LinearGradient } from 'expo-linear-gradient';

import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";

export default function Home({navigation}) {

    // Sign In Function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const auth = FIREBASE_AUTH;

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

    const signInMethod = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed up successfully
      const user = userCredential.user;
      console.log('User signed in:', user);
      alert('Login successful')
      navigation.navigate("Home");
    } catch (error) {
      // Error
      console.error('Sign in error:', error);
      alert(error.message);
    }
  };
    // Firebase
    const auth = FIREBASE_AUTH;
    const handleSignOut = async () => {
    try {
        await auth.signOut();
        console.log('Signed out successfully');
        navigation.navigate('GetStart');
    } catch (error) {
        console.error('Error signing out:', error);
        
    }
    };

    // Piechart
    const widthAndHeight = 230
    const series = [70, 30]
    const sliceColor = ['#2196F3','#fff']

    return(
        <LinearGradient
              colors={['#66ffff', '#3b5998', '#192f6a']}
              style={styles.gradient}>
        <SafeAreaView style={styles.view}>
            <ScrollView style={styles.scrollView}>

                <View style={styles.navbar}>
                    <Image style={styles.img} resizeMode="contain" source={require('../assets/Profile/imgProfile.png')}></Image>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.usernameText}>TuanPham</Text>
                    <TouchableOpacity style={styles.navIcon}>
                        <Image resizeMode="contain" source={require('../assets/Icon/person.png')}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.tempTable}>
                    <Text style={{marginVertical: 12, fontWeight: '500'}}>Water Level: {series[0] + '%'}</Text>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                    >
                    </PieChart>
                </View>

                <Text style={styles.deviceText}>Active Devices</Text>

                <View style={styles.allDevice}>
                    <View style={styles.device1}>
                        <Text>1</Text>
                        <Image resizeMode="cover" source={require('../assets/Icon/Sun.png')}></Image>
                    </View>
    
                    <View style={styles.device2}>
                        <Text>2</Text>
                        <Image resizeMode="contain" source={require('../assets/Icon/Moon.png')}></Image>
                    </View>
                </View>

                <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut} >
                <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>Sign Out</Text>
              </TouchableOpacity>

            </ScrollView>
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
        // backgroundColor: '#67e6ff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    // scrollView:{
    //     flex:1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    navbar:{
        height: 80,
        width: 330,
        marginTop: 20,
    }, 
    img:{
        height: 70,
        width: 70,
        // flex: 1,
        // marginLeft: 80
    },
    welcomeText:{
        position: 'absolute',
        left: 80,
        top: 25,
        fontSize: 13,
        fontWeight: '400'
    },
    usernameText:{
        position: 'absolute',
        left: 80,
        top: 45,
        fontSize: 15,
        fontWeight: '700'
    },
    navIcon:{
        position: 'absolute',
        right: 10,
        top: 25,
        height: 30,
        width: 30,
        flex: 1,
    },
    tempTable:{
        borderWidth: 0.5,
        height: 300,
        width: 330,
        backgroundColor: '#c9e5ff',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 20,
    },
    deviceText:{
        marginTop: 25,
        fontSize: 17,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'left',
        marginBottom: 10,
    },
    allDevice:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        // width: 330,
        // height: 100,
    },
    device1:{
        borderWidth: 1,
        height: 200,
        width: 150,
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 20,
        // position: 'absolute',
        // left: 0,
    },
    device2:{
        borderWidth: 1,
        height: 200,
        width: 150,
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: 'green',
        borderRadius: 20,
        // position: 'absolute',
        // right: 0,
    },
    signOutBtn:{
    backgroundColor: '#42C83C',
    paddingHorizontal: 100,
    paddingVertical: 25,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
  },
});