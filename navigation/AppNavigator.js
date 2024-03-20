import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GetStart from '../pages/GetStart';
import SignInOrSignUp from '../pages/SignInOrSignUp';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='GetStart' component={GetStart} options={{ headerShown: false }}/>
            <Stack.Screen name='SignInOrSignUp' component={SignInOrSignUp} options={{ headerShown: false }}/>
            <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: true }}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true }}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;