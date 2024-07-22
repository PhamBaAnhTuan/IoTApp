import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import Home from './pages/Home';
import TempScreen from './pages/TempScreen';


export default function App() {
  return (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      // // <Home/>
      // < TempScreen/>
  );
}
