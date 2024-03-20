import React from 'react';
// import { NavigationContainer } from 'react-native'; 
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import GetStart from './pages/GetStart';
import { SignIn } from './pages/SignIn'; // Import const use {}
import { SignUp } from './pages/SignUp'; // Import const use {}
import  SignInOrSignUp  from './pages/SignInOrSignUp'; // Import Function not use {}
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
      
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      
  );
}
