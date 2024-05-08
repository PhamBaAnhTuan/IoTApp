import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import PieChart from "react-native-pie-chart";
import { LinearGradient } from "expo-linear-gradient";

import {
  FIREBASE_APP,
  FIREBASE_AUTH,
  FIREBASE_DATA,
} from "../firebase/FirebaseConfig";
import { ref, onValue, set, push } from "firebase/database";

export default function Home({ navigation }) {
  // Firebase Authentication
  const auth = FIREBASE_AUTH;
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("Signed out successfully");
      navigation.navigate("GetStart");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Fetch Water Level from Firebase
  const db = FIREBASE_DATA;
  const [waterLevel, setWaterLevel] = useState([]);
  useEffect(() => {
    const startCountWater = ref(db, "sensor/waterLevel/");
    onValue(startCountWater, (snapshot) => {
      const dataWater = snapshot.val();
      // console.log(dataWater);
      setWaterLevel(dataWater);
    });
  }, []);

  // Send Pump events
  const [pump, setPump] = useState([]);
    const pumpEvent = async () => {
        try {
          const reference = ref(db, 'pump/');
          set(reference, {
            pump: true,
          });
          console.log("Pump: " + pump.type);
          setPump('');
        } catch (error) {
          console.error('Error sending Pump event:', error);
        }
    };

  // Send Stop Pump events
  const [stop, setStop] = useState([]);
    const stopPump = async () => {
        try {
          const reference = ref(db, 'pump/');
          set(reference, {
            stop: true,
          });
          console.log("Stop pump: " + stop.type);
          setStop('');
        } catch (error) {
          console.error('Error sending Stop pump event:', error);
        }
    };

  // Fetch Temperature from Firebase
  const [tempC, setTempC] = useState([]);
  useEffect(() => {
    const startCountTempC = ref(db, "data/tempC/");
    onValue(startCountTempC, (snapshot) => {
      const dataTempC = snapshot.val();
      // console.log(dataTempC);
      setTempC(dataTempC);
    });
  }, []);

  // Fetch Humidity from Firebase
  const [humidity, setHumidity] = useState([]);
  useEffect(() => {
    const startCountHumidity = ref(db, "data/humidity/");
    onValue(startCountHumidity, (snapshot) => {
      const dataHumidity = snapshot.val();
      // console.log(dataHumidity);
      setHumidity(dataHumidity);
    });
  }, []);

  // Fetch Light from Firebase
  const [light, setLight] = useState([]);
  useEffect(() => {
    const startCountLight = ref(db, "data/outdoorLight/");
    onValue(startCountLight, (snapshot) => {
      const dataLight = snapshot.val();
      // console.log(dataLight);
      setLight(dataLight);
    });
  }, []);

  // Fetch Fan from Firebase
  const [fan, setFan] = useState([]);
  useEffect(() => {
    const startCountFan = ref(db, "data/fan/");
    onValue(startCountFan, (snapshot) => {
      const dataFan = snapshot.val();
      // console.log(dataFan);
      setFan(dataFan);
    });
  }, []);

  // Piechart
  const widthAndHeight = 200;
  const series = [waterLevel, 100 - waterLevel];
  const sliceColor = ["#2196F3", "#fff"];

  return (
    <LinearGradient
      colors={["#66ffff", "#3b5998", "#192f6a"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.view}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.navbar}>
                    <Image style={styles.img} resizeMode="contain" source={require('../assets/Profile/imgProfile.png')}></Image>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.usernameText}>TuanPham</Text>
                    <TouchableOpacity style={styles.logoutBtn} onPress={handleSignOut}>
                        <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>Log out</Text>
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

                    {series[0] < 20 
                    ? <Text style={{fontWeight: '500', marginTop: 10}}>Low</Text>
                    : <Text style={{fontWeight: '500', marginTop: 10}}>Normal</Text>
                    }

                    <TouchableOpacity style={styles.pumpBtn} onPress={pumpEvent}>
                        <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>Pump</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stopBtn} onPress={stopPump}>
                        <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>Stop</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.deviceText}>Active Devices</Text>

                <View style={styles.allDevice}>
                    
                    <View style={styles.device1}>
                        <Text style={{marginVertical: 10, fontWeight: 500}}>Temperature</Text>
                        <Image style={{position: "absolute", top: 40, height: 70}} resizeMode="center" source={require('../assets/Icon/tempC.png')}></Image>
                        <Text style={styles.text}>{tempC}°C</Text>
                    </View>
    
                    <View style={styles.device2}>
                        <Text style={{marginVertical: 10, fontWeight: 500}}>Humidity</Text>
                        <Image style={{position: "absolute", top: 40, height: 70}} resizeMode="center" source={require('../assets/Icon/humidity.png')}></Image>
                        <Text style={styles.text}>{humidity}%</Text>
                    </View>
                    
                </View>

                <View style={styles.allDevice}>
                    
                    <View style={styles.device1}>
                        <Text style={{marginVertical: 10, fontWeight: 500}}>Outdoor Lights</Text>
                        <Image style={{position: "absolute", top: 40, height: 70}} resizeMode="center" source={require('../assets/Icon/light.png')}></Image>
                        {light == true
                         ? <Text style={styles.text}>On</Text>
                         : <Text style={styles.text}>Off</Text>
                        }
                    </View>
    
                    <View style={styles.device2}>
                        <Text style={{marginVertical: 10, fontWeight: 500}}>Fan</Text>
                        <Image style={{position: "absolute", top: 40, height: 70}} resizeMode="center" source={require('../assets/Icon/fan.png')}></Image>
                        {fan == true
                         ? <Text style={styles.text}>On</Text>
                         : <Text style={styles.text}>Off</Text>
                        }
                    </View>
                    
                </View>

          

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    height: "100%",
    width: "100%",
    // backgroundColor: '#67e6ff',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  // scrollView:{
  //     flex:1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // },
  navbar: {
    height: 80,
    width: 330,
    marginTop: 20,
  },
  img: {
    height: 70,
    width: 70,
    // flex: 1,
    // marginLeft: 80
  },
  welcomeText: {
    position: "absolute",
    left: 80,
    top: 25,
    fontSize: 13,
    fontWeight: "400",
  },
  usernameText: {
    position: "absolute",
    left: 80,
    top: 45,
    fontSize: 15,
    fontWeight: "700",
  },
  logoutBtn: {
    position: "absolute",
    right: 0,
    top: 10,
    height: 40,
    width: 80,
    flex: 1,
    backgroundColor: "#f38c0e",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  tempTable: {
    borderWidth: 0.5,
    height: 320,
    width: 330,
    backgroundColor: "#c9e5ff",
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  pumpBtn:{
    position: "absolute",
    left: 20,
    top: 250,
    height: 40,
    width: 80,
    flex: 1,
    backgroundColor: "#64adf0",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  stopBtn:{
    position: "absolute",
    right: 20,
    top: 250,
    height: 40,
    width: 80,
    flex: 1,
    backgroundColor: "#eb6e6e",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  deviceText: {
    marginTop: 25,
    fontSize: 17,
    fontWeight: "400",
    color: "#fff",
    textAlign: "left",
    marginBottom: 10,
  },
  allDevice: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 7,
  },
  device1: {
    borderWidth: 1,
    height: 160,
    width: 140,
    alignItems: "center",
    backgroundColor: "#99e5ff",
    borderRadius: 20,
    // position: 'absolute',
    // left: 0,
  },
  device2: {
    borderWidth: 1,
    height: 160,
    width: 140,
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#99e5ff",
    borderRadius: 20,
    // position: 'absolute',
    // right: 0,
  },
  text: {
    position: "absolute",
    top: 120,
    fontWeight: "500",
    fontSize: 19,
  },
});
