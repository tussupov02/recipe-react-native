import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="Main"
                    component={BottomTabNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigation;
