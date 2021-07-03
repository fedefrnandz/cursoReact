import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Routes from './stackRoutes';


const Stack = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="SplashScreen" 
                component={Routes.SplashScreen}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen name="Login" component={Routes.WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;