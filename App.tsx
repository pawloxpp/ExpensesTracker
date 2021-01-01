import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/HomeScreen';
import { AddExpenseScreen } from './src/AddExpenseScreen';
import { ExpensesScreen } from './src/ExpensesScreen';


export type StackParams = {
    HomeScreen: undefined,
    AddExpenseScreen: undefined,
    ExpensesScreen: undefined,
};


const Stack = createStackNavigator<StackParams>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='ExpensesScreen'
                    component={ExpensesScreen}
                />
                <Stack.Screen
                    name='AddExpenseScreen'
                    component={AddExpenseScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App