import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screen/login';
import BottomNavigation from './BottomNavigation/bottomNavigation';
import CommentSection from '../screen/CommentSection';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef()

const MainNavigationStack = () => {

    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                animationEnabled: false,
            }} >
                <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,

            }} />
                <Stack.Screen name="Home" component={BottomNavigation} options={{
                headerShown: false,
            }}  />
                <Stack.Screen name="Question" component={CommentSection} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigationStack;