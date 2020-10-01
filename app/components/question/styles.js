import { StyleSheet, Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
    wrapper: {

        flex:1
    },
    container: {
        height: '100%',
        display: 'flex'
    },
    questionNumberStyle: {
        height: 50,
        width: 50, 
        backgroundColor: 'green', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderColor: 'green',  
        borderBottomRightRadius: 20, 
        borderWidth: 2, 
        flexDirection: 'row'
    },
    mathJaxStyle: {
       height: 350,
        overflow: 'visible',
        width: Dimensions.get('window').width - 60,
    },
    mathJaxStyle2: {
        height: 250,
        overflow: 'visible',
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width - 60,
    },
    explainationBox: {
        height:'auto',
        overflow: 'visible',
        width: screenWidth-20,
        backgroundColor: '#D1F2EB',
        padding: 10,
        borderRadius: 5,
        borderColor: 'lightblue',
        borderWidth: 1,
        marginTop: 20
    },
    explainationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0E6655'
    },
    explaination: {
        marginTop: 20,
        color: '#212F3C'
    }
})