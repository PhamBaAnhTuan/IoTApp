import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";

export default function SignInOrSignUp({ navigation }) {
    return(
            <SafeAreaView style={styles.safeView}>
                {/* <Image source={require('../assets/Logo/Spotify.png')} style={styles.logo}></Image> */}
                <Text style={styles.title}>Smart Home App</Text>
                <Text style={styles.content}>Choose method that you wanna</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.text}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeView:{
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: '#67e6ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // logo:{
    //     position: 'absolute',
    //     top: 70,
    //     flex: 1,
    // },
    title:{
        fontSize: 26,
        fontWeight: '700',
    },
    content:{
        textAlign: 'center',
        width: 330,
        // fontSize: 17,
        // fontWeight: '300',
        marginTop: 10,
        // marginVertical: 30
    },
    btn:{
        backgroundColor: '#66ffff',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 25
    },
    text:{
        fontSize: 19,
        fontWeight: '700', 
        color: '#fff'
    }
})