import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, TextInput } from 'react-native';

export default function Home() {
    return(
        <SafeAreaView style={styles.view}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.navbar}>
                    <Image style={styles.img} source={require('../assets/Profile/imgProfile.png')}></Image>
                    <Text style={styles.text}>Welcome Tuan Pham</Text>
                </View>

                <View style={styles.tempTable}>

                </View>

                <Text style={styles.deviceText}>Active Devices</Text>

                <View style={styles.option}>
                    <TextInput>type</TextInput>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view:{
        height: '100%',
        width: '100%',
        backgroundColor: '#67e6ff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    navbar:{
        // borderWidth: 1,
        height: 80,
        width: 330,
        marginTop: 20
    },
    img:{
        height: 80,
        width: 80,
        // flex: 1,
        // marginLeft: 80
    },
    text:{
        position: 'absolute',
        right: 90,
        top: 50,
        fontSize: 15,
        fontWeight: '700'
    },
    tempTable:{
        borderWidth: 1,
        height: 200,
        width: 330,
        marginTop: 20
    },
    deviceText:{
        marginTop: 20
    },
    option:{
        borderWidth: 1,
        height: 500,
        width: 330,
        marginTop: 50
    },

});