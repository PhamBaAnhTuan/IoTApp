import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStart from "../pages/GetStart";
import SignInOrSignUp from "../pages/SignInOrSignUp";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import Home from "../pages/Home";
import { onAuthStateChanged, User, FirebaseUserState } from "@firebase/auth";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();
const Tab = createStackNavigator();

const AppNavigator = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStart"
        component={GetStart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInOrSignUp"
        component={SignInOrSignUp}
        options={{ headerShown: false }}
      >
        {/* <Tab.Navigator>
            <Tab.Screen name="SignIn" component={SignIn} />
            <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator> */}
        
      </Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
