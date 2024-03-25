import {createStackNavigator} from '@react-navigation/stack'
import { SignIn } from '../pages/SignIn';
import { SignUp } from "../pages/SignUp";

const Tab = createStackNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SignIn" component={SignIn} />
            <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
    )
}

export default TabNavigator;