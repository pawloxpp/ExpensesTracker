import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import styles from './Styles';
import { expenses, expenseslist } from './Expense'
import { StackActions } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../App';



export const AddExpenseScreen = ({ navigation, route }: StackScreenProps<StackParams, 'AddExpenseScreen'  >) => {
    let setname = ''
    let setcategory = ''
    let setcost = 0
    let expenseslen = expenses.length
    let listlen = expenseslist.length
    return (
        <View style={{
            flexDirection: 'row',
            flex: 1
        }}>
            <View style={{ flex: 3 }}>
                <Text style={styles.leftinptext}>
                    Enter name:
                </Text>
                <Text style={styles.leftinptext}>
                    Enter category:
                </Text>
                <Text style={styles.leftinptext}>
                    Enter cost:
                </Text>
            </View>
            <View style={{ flex:7 }}>
                <TextInput
                    inlineImageLeft='car'
                    numberOfLines={1}
                    placeholder='e.g. Pizza'
                    onChangeText={(text) => { setname = text }}
                />
                <TextInput
                    numberOfLines={1}
                    placeholder='e.g. Food'
                    onChangeText={(text) => { setcategory = text }}
                />
                <TextInput
                    keyboardType='numeric'
                    placeholder='e.g. 25'
                    onChangeText={(text) => { setcost = parseInt(text) }}
                />
                <Button
                    title='Dodaj'
                    onPress={() => {
                        expenses.push({ name: setname, category: setcategory, cost: setcost, id: expenseslen });
                        expenseslist.push({ name: setname, category: setcategory, cost: setcost, id: listlen });
                        navigation.dispatch(
                            StackActions.replace('AddExpenseScreen', {})
                        );
                        Alert.alert('Succesfuly added','Now you can go to your expenses')
                    }}
                />
            </View>
        </View>
        );
};
export default AddExpenseScreen