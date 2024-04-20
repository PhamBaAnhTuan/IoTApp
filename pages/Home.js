import React, {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import PieChart from "react-native-pie-chart";
import { LinearGradient } from 'expo-linear-gradient';

import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DATA } from "../firebase/FirebaseConfig";
import { ref, onValue } from "firebase/database";


export default function Home({navigation}) {

    // Firebase Authentication
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

    // Fetch Data from Firebase
    const db = FIREBASE_DATA;
    const [waterLevel, setWaterLevel] = useState([]);
    useEffect(() => {
        const startCountWater = ref(db, 'data/waterLevel/');
        onValue(startCountWater, (snapshot) => {
            const dataWater = snapshot.val();
            // console.log(dataWater);
            setWaterLevel(dataWater);
        });
        
    }, []);

    const [tempC, setTempC] = useState([]);
    useEffect(() => {
        const startCountTempC = ref(db, 'data/tempC/');
        onValue(startCountTempC, (snapshot) => {
            const dataTempC = snapshot.val();
            // console.log(dataTempC);
            setTempC(dataTempC);
        })
    }, []);

    const [humidity, setHumidity] = useState([]);
    useEffect(() => {
        const startCountHumidity = ref(db, 'data/humi/');
        onValue(startCountHumidity, (snapshot) => {
            const dataHumidity = snapshot.val();
            // console.log(dataHumidity);
            setHumidity(dataHumidity);
        })
    }, []);
      
    
    // Piechart
    const widthAndHeight = 230
    const series = [waterLevel, 100-waterLevel]
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
                    <TouchableOpacity style={styles.logoutBtn} onPress={handleSignOut}>
                        <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>Sign Out</Text>
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
                            <Text style={{marginVertical: 10, fontWeight: 500}}>Temperature</Text>
                            <Image style={{position: "absolute", top: -50}} resizeMode="center" source={require('../assets/Icon/tempC.png')}></Image>
                            <Text style={{position: "absolute", top: 145, fontWeight: 700, fontSize: 20}}>{tempC}°C</Text>
                        </View>
    
                    <View style={styles.device2}>
                        <Text style={{marginVertical: 10, fontWeight: 500}}>Humidity</Text>
                        <Image style={{position: "absolute", top: -50}} resizeMode="center" source={require('../assets/Icon/humidity.png')}></Image>
                        <Text style={{position: "absolute", top: 145, fontWeight: 700, fontSize: 20}}>{humidity}%</Text>
                    </View>
                </View>

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
    logoutBtn:{
        position: 'absolute',
        right: 0,
        top: 10,
        height: 50,
        width: 100,
        flex: 1,
        backgroundColor: '#f38c0e',
        paddingVertical: 14,
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
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
        backgroundColor: '#e57391',
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
        backgroundColor: '#27a09e ',
        borderRadius: 20,
        // position: 'absolute',
        // right: 0,
    },
    
});