import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStart from "../pages/GetStart";
import SignInOrSignUp from "../pages/SignInOrSignUp";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import Home from "../pages/Home";
import TempScreen from "../pages/TempScreen";
import { onAuthStateChanged, User, FirebaseUserState } from "@firebase/auth";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
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
      <Stack.Screen
        name="TempScreen"
        component={TempScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
