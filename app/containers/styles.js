import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff'
    },
    nextButtonContainer: {
        display: 'flex', 
        alignItems:'center', 
        justifyContent: 'center'
    },
    nextButton: {
        height: 50, 
        width: 300, 
        backgroundColor: '#2874A6', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 30
    },
    nextButtonText: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#fff'
    },
    retakeButton: {
        height: 50, 
        width: 300, 
        backgroundColor: '#2874A6', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: 10
    }
})