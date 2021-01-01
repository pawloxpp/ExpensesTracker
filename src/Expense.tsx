import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './Styles';
import { StackParams } from '../App';




type expnse = {
    name: string,
    category: string,
    cost: number,
    id: number
}
export let expenses = Array<expnse>();
export let expenseslist = Array<expnse>();


export class Expense extends React.Component {
    constructor(props: { navigation: StackParams, name: string, category: string, cost: number }) {
        super(props)
    };
    
    state = {
        name: '',
        category: '',
        cost: 0,
    };
    
    componentDidMount() {
        this.setState({ name: this.props.name });
        this.setState({ category: this.props.category });
        this.setState({ cost: this.props.cost });
    };

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        marginBottom: 10,
                        marginTop: 10,
                    }}
                    onLongPress={() => Alert.alert(
                        'Delete',
                        'Are you sure to delete this expense?',
                        [
                            {
                                text: 'Yes', onPress: () => {
                                    expenses.map((expense, key) => {
                                        if (expense.name == this.state.name &&
                                            expense.category == this.state.category &&
                                            expense.cost == this.state.cost)
                                            expenses.splice(key, 1)
                                    });
                                    this.props.navigation.dispatch(
                                        StackActions.replace('ExpensesScreen', {})
                                    );
                                }
                            },
                            { text: 'No', onPress: () => { } }
                        ]
                    )}
                >
                    <View style={styles.expensebox} >
                        <Text style={styles.currenttext}>
                            Name: {this.state.name}
                        </Text>
                        <Text style={styles.currenttext}>
                            Category: {this.state.category}
                        </Text>
                        <Text style={styles.currenttext}>
                            Cost: {this.state.cost} $
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
};


