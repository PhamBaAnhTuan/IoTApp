import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { signInWithEmailAndPassword } from "@firebase/auth";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";

export const SignIn = ({ navigation }) => {
  // Sign In Function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

    const signInMethod = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed up successfully
      const user = userCredential.user;
      console.log('User signed in:', user.email);
      alert('Login successful')
      navigation.navigate("Home");
    } catch (error) {
      // Error
      console.error('Sign in error:', error);
      alert(error.message);
    }
  };

  return (
      <LinearGradient
              colors={['#66ffff', '#3b5998', '#192f6a']}
              style={styles.gradient}>
    <SafeAreaView style={styles.view}>
      {/* <Image style={styles.logo} source={require('../assets/Logo/Spotify.png')}></Image> */}
      <Text style={styles.signInTitle}>Sign In</Text>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text style={styles.detailText}>If you need any support </Text>
        <TouchableOpacity
          onPress={() => alert("Access Spotify.com for more in4")}
        >
          <Text style={styles.clickText}>Click Here</Text>
        </TouchableOpacity>
      </View>
      
      {/* Input */}
      <TextInput
        keyboardType="email-address"
        style={styles.textInput}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Email"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Password"
        secureTextEntry={true}
      ></TextInput>
          

      <TouchableOpacity
        onPress={() => alert("Access Spotify/help.com for more!")}>
        <Text style={styles.fgPass} >Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Btn */}
      <TouchableOpacity style={styles.signInBtn} onPress={signInMethod}>
        <Text style={{ fontSize: 15, fontWeight: "700", color: "#fff" }}>
          Sign In
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "space-around" }}>
        <View
          style={{ height: 1, width: 130, backgroundColor: "white" }}
        ></View>
        <Text style={{ paddingHorizontal: 10, fontSize: 15, marginTop: 70 }}>Or</Text>
        <View
          style={{ height: 1, width: 130, backgroundColor: "white" }}
        ></View>
      </View>

      {/* Another Sign In */}
      <View style={{ flexDirection: "row", alignItems: "space-between" }}>
        <TouchableOpacity onPress={() => alert("Google")}>
          <Image
            style={styles.icon}
            source={require("../assets/Icon/google.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Apple")}>
          <Image
            style={styles.icon}
            source={require("../assets/Icon/apple.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.notMbText}>Not a member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  // logo:{
  //   flex: 1,
  //   position: 'absolute',
  //   top: 10,

  // },
  gradient:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    height: "100%",
    width: "100%",
    // flex: 1,
    // backgroundColor: "#67e6ff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  signInTitle: {
    fontSize: 50,
    fontWeight: "700",
    marginTop: 100,
    marginBottom: 100,
    // marginVertical: 20
  },
  detailText: {
    fontSize: 12,
    fontWeight: "400",
  },
  clickText: {
    fontSize: 12,
    fontWeight: "400",
    color: "blue",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
    height: 60,
    width: 300,
    paddingLeft: 25,
    fontSize: 15,
    fontWeight: "400",
    marginVertical: 3,
    color: "white",
  },
  fgPass: {
    fontSize: 13,
    fontWeight: "500",
    marginVertical: 2,
    color:'#66abcd',
    // alignItems: 'flex-start',
  },
  signInBtn: {
    backgroundColor: "#66abcd",
    paddingHorizontal: 120,
    paddingVertical: 25,
    borderRadius: 30,
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  notMbText: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 15,
    color: '#000'
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#66ffff",
    marginTop: 15
  },
});
