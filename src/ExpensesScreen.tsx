import React from 'react';
import { View, Text, Button, } from 'react-native';
import styles from './Styles';
import { Expense, expenses } from './Expense'
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../App';


export const ExpensesScreen = ({ navigation, route }: StackScreenProps<StackParams, 'ExpensesScreen'>) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <View style={{ flex:1 }}>
                <ScrollView >
                    {expenses.map((item) => {
                        return (
                            <Expense
                                key={item.id}
                                name={item.name}
                                category={item.category}
                                cost={item.cost}
                                navigation={navigation}
                            />
                        );
                    })};
                </ScrollView>
                <View style={{
                    flexDirection: 'column-reverse',
                    borderColor: 'blue',
                    height:30,
                    borderWidth: 1,
                    borderRadius: 45,
                    backgroundColor: 'aqua',
                    margin:3,
                }}>
                    <Text style={styles.currenttext}>
                        Sum:{expenses.reduce((a, b) => a = a + b.cost, 0)} $
                    </Text>
                </View>
            </View>
        </View>
        
    );
};
export default ExpensesScreen