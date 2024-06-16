import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screen/Home';
import Login from '../screen/login';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef()

const MainNavigationStack = () => {

    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false,
                animationEnabled: false,
            }} >
                <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,

            }} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigationStack;