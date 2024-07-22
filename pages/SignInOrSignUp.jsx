import {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, Platform, StatusBar } from "react-native";
import {createStackNavigator} from '@react-navigation/stack'
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { TabNavigator} from "../navigation/TabNavigator";
import { LinearGradient } from 'expo-linear-gradient';


export default function SignInOrSignUp({ navigation }) {

    // const auth = FIREBASE_AUTH;
    const handleSignOut = async () => {
    try {
        await auth.signOut();
        console.log('Signed out successfully');
        navigation.navigate('GetStart');
    } catch (error) {
        console.error('Error signing out:', error);
        
    }
    };
    return(
        <SafeAreaView style={{height: '100%', width:'100%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0}}>
            <LinearGradient
                colors={['#66ffff', '#3b5998', '#192f6a']}
                style={{height:'100%'}}>
                <SafeAreaView style={styles.safeView}>
                    <Text style={styles.title}>Smart Home App</Text>
                    <Text style={styles.content}>Choose method that you wanna</Text>
                    
                    <View >
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.text}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </SafeAreaView>
                
    );
}

const styles = StyleSheet.create({
    safeView:{
        height: '100%',
        width: '100%',
        flex: 1,
        // backgroundColor: '#67e6ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 26,
        fontWeight: '700',
    },
    content:{
        textAlign: 'center',
        width: 330,
        fontSize: 17,
        fontWeight: '500',
        marginVertical: 10,
        // marginVertical: 30
    },
    btn:{
        backgroundColor: '#66ffff',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    text:{
        fontSize: 17,
        fontWeight: '700', 
        color: 'black'
    }
})