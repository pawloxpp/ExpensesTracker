import React from 'react';
import { View, Text, Button, } from 'react-native';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../App';




export const HomeScreen = ({ navigation, route }: StackScreenProps<StackParams, 'HomeScreen'>) => {
    return (
        <View style={styles.HomeScr}>
            <Text>
                Witam, co chcesz dzis zrobic?
            </Text>
            <Button
                title='Przejdz do moich wydatkow'
                onPress={() => navigation.navigate('ExpensesScreen')}
            />
            <Button
                title='Dodaj nowy wydatek'
                onPress={() => navigation.navigate('AddExpenseScreen')}
            />
        </View>
    );
};
