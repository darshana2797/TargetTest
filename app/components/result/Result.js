import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export  function Result (props)  {
    return (
        <View style={styles.wrapper}>
                <Text style={styles.titleStyle}>Chapter Name: Practice Test</Text>
                <View style={styles.boxStyle}>
                    <View style={styles.rowStyle}>
                       <Text>Total no. of questions</Text>
                       <View style={styles.circleStyle}>
                           <Text style={{color: '#fff'}}>4</Text>
                       </View>
                    </View>

                    <View style={styles.rowStyle}>
                       <Text>Correct</Text>
                       <View style={[styles.circleStyle, {backgroundColor: 'green'}]}>
                           <Text>{props.selectedAnswers[0].correctAnswers}</Text>
                       </View>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between',margin: 10}}>
                       <Text>Incorrect</Text>
                       <View  style={[styles.circleStyle, {backgroundColor: '#EC7063'}]}>
                            <Text>{props.selectedAnswers[1].incorrectAnswers}</Text>
                       </View>
                    </View>
                </View>
        </View>
    )
}