import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: screenHeight - 300, 
    },
    boxStyle: {
        backgroundColor: 'lightblue', 
        padding: 40, 
        width: 300,
        borderRadius: 10,
        marginTop: 10
    },
    rowStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 10
    },
    circleStyle: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: 30, 
        width: 30, 
        backgroundColor: 'navy', 
        borderRadius: 20
    },
   titleStyle: {
       fontSize: 20,
   },
   buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 10
   }
})