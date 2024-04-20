// import {useState, useEffect} from 'react';
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
// import GetStart from './pages/GetStart';
// import { SignIn } from './pages/SignIn'; // Import const use {}
// import { SignUp } from './pages/SignUp'; // Import const use {}
// import  SignInOrSignUp  from './pages/SignInOrSignUp'; // Import Function not use {}
// import TabNavigator from './navigation/TabNavigator';

// import {onAuthStateChanged, User} from '@firebase/auth';
// import { FIREBASE_AUTH } from './firebase/FirebaseConfig';

import AppNavigator from './navigation/AppNavigator';
import Home from './pages/Home';


export default function App() {
  return (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      // <Home/>
  );
}
