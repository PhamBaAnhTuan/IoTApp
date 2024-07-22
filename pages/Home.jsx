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
  Button,
  ToastAndroid,
  Dimensions,
  Platform,
  StatusBar
} from "react-native";
import PieChart from "react-native-pie-chart";
import { LinearGradient } from "expo-linear-gradient";

import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DATA } from "../firebase/FirebaseConfig";
import { ref, onValue, set, push } from "firebase/database";
import TempScreen from "./TempScreen";


export default function Home({ navigation }) {
  // Firebase Authentication
  const auth = FIREBASE_AUTH;
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("Signed out successfully");
      ToastAndroid.show('Log out successful', ToastAndroid.SHORT);
      navigation.navigate("GetStart");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Fetch Water Level
  const db = FIREBASE_DATA;
  const [waterLevel, setWaterLevel] = useState([]);
  const [range, setRange] = useState([]);
  const [state, setState] = useState([]);
  useEffect(() => {
    const getWaterLevel = async () => {
      try {
        const waterRef = ref(db, "sensor/waterLevel/");
        onValue(waterRef, (snapshot) => {
          const data = snapshot.val();
          // console.log(dataWater);
          setWaterLevel(data);
        });
      } catch (error) {
        console.error("Error fetching water level:", error);
      }
    };
    getWaterLevel();

    // Get range
    const getRange = async () => {
      try {
        const rangeRef = ref(db, "sensor/range/");
        onValue(rangeRef, (snapshot) => {
          const data = snapshot.val();
          // console.log(dataWater);
          setRange(data);
        });
      } catch (error) {
        console.error("Error fetching range:", error);
      }
    };
    getRange();

    // Get state
    const getState = async () => {
      try {
        const stateRef = ref(db, "sensor/state/");
        onValue(stateRef, (snapshot) => {
          const data = snapshot.val();
          // console.log(dataWater);
          setState(data);
        });
      } catch (error) {
        console.error("Error fetching state:", error);
      }
    };
    getState();
  }, []);


  // Send Pump events
  // const [pump, setPump] = useState([]);
  // const pumpEvent = async () => {
  //   try {
  //     const reference = ref(db, 'pump/');
  //     set(reference, {
  //       pump: true,
  //     });
  //     console.log("Pump: " + pump.type);
  //     ToastAndroid.show('Pumping', ToastAndroid.SHORT);
  //     setPump('');
  //   } catch (error) {
  //     console.error('Error sending Pump event:', error);
  //   }
  // };


  // Piechart
  const widthAndHeight = 200;
  const series = [waterLevel, 300 - waterLevel];
  const sliceColor = ["#2196F3", "#fff"];

  return (
    <SafeAreaView style={styles.view}>
      <LinearGradient
        colors={["#66ffff", "#3b5998", "#192f6a"]}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

          <View style={styles.navbar}>
            <Image style={styles.img} resizeMode="contain" source={require('../assets/Profile/imgProfile.png')}></Image>

            <View style={styles.wrap}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.usernameText}>TuanPham</Text>
            </View>

            <TouchableOpacity style={styles.logoutBtn} onPress={handleSignOut}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: '#fff' }}>Log out</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.container1} onPress={() => navigation.navigate('TempScreen')}>
            <Text style={styles.text}>Mực nước hiện tại:</Text>
            <Text style={styles.text2}>{waterLevel} cm</Text>
            <PieChart
              series={series}
              sliceColor={sliceColor}
              widthAndHeight={widthAndHeight}
            />
          </TouchableOpacity>

          <View style={styles.container2}>
            <Text style={styles.text}>Mực nước yêu cầu:</Text>
            <Text style={styles.text2}>{range} cm</Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.text}>Trạng thái máy bơm:</Text>
            <Text style={styles.text2}>{state}</Text>
          </View>

        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    // flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navbar: {
    height: 110,
    width: '100%',
    // marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#c9e5ff'
  },
  img: {
    height: 70,
    width: 70,
    // flex: 1,
    // marginLeft: 80
  },

  wrap: {
    height: '100%',
    width: 100,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10
  },
  welcomeText: {
    fontSize: 13,
    fontWeight: "400",
  },
  usernameText: {
    fontSize: 15,
    fontWeight: "700",
  },

  logoutBtn: {
    height: 40,
    width: 80,
    backgroundColor: "#f38c0e",
    borderRadius: 10,
    marginVertical: 17,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 80
  },


  container1: {
    height: 300,
    // width: 330,
    backgroundColor: "#c9e5ff",
    marginTop: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },

  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 5,
    color: 'blue'
  },

  container2: {
    height: 100,
    // width: 330,
    backgroundColor: "#c9e5ff",
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
