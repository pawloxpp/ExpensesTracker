import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    HomeScr: {
        backgroundColor: '#aaa',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30,

    },
    AddNewScr: {
        flex: 1,
        backgroundColor: '#ae21',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ExpensesScr: {
        flex: 1,
        backgroundColor: '#f321',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    leftinptext: { 
        paddingTop: 5,
        margin: 10,
        paddingBottom:4
        
    },
    currenttext: {
        fontSize: 20,
        textAlign: 'center',
    },
    expensebox: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 45,
        backgroundColor: 'aqua',
        margin:3

    },
});
export default styles