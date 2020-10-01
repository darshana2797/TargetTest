import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MathJax from '../mathjax';
import RadioForm from 'react-native-simple-radio-button';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {styles} from './styles';

export  function Question (props)  {
    var radio_props = [];

    const [value, setValue] = useState(null)
    props.options && props.options.map((item, idx) => {
      radio_props.push(item)
    })

    return (
      <View style={{ padding: 10, backgroundColor: '#fff', flex: 1}}>
        {props.isLatex ? 
          <View style={{height: 200, display: 'flex'}}>
             <View style={styles.questionNumberStyle}>
               <Text style={{color: '#fff'}}>{props.questionNumber}</Text>
             </View>
            <Text>
              <MathJax
                style={styles.mathJaxStyle}
                html={props.question}
              />  
            </Text>
          </View>
        :  
        <View style={{height: 200, display: 'flex'}}>
          <View style={styles.questionNumberStyle}>
            <Text style={{color: '#fff'}}>{props.questionNumber}</Text>
          </View>
          <Text>{props.question}</Text>
        </View>
        }

        <RadioForm
          radio_props={radio_props}
          buttonSize={15}
          initial={props.selectedOption}
          value={props.selectedOption}
          buttonInnerColor={'#e74c3c'}
          buttonOuterColor = {'#5B2C6F'}
          onPress={(value) => {
            props.selectAnswer(value)
            setValue(value)
          }}
        />
        {value !== null && 
          <View style={styles.explainationBox}>
            <Text>
              <Text>
                <Icon name = "message-reply-text" color='#0E6655' size={18} type="MaterialCommunity"/>
              </Text>&nbsp;
              <Text  style={styles.explainationTitle}>Explaination</Text>
            </Text>
            {props.isLatex ? 
               <MathJax style={styles.mathJaxStyle2} html ={props.explaination} />
            :
            <Text style={styles.explaination}>{props.explaination}</Text>}
          </View>
        }
        {value !== null && 
          <View style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
              <View style= {{backgroundColor: '#F7DC6F', padding: 10, marginTop: 10, borderRadius: 5}}>
                {value == props.answer ? 
                <Text>
                  <Icon name="emoticon-happy" size={20} type="MaterialCommunity"/>
                  <Text>Wah Paaji..! Tussi great ho!</Text>
              </Text>
                :
                <Text>
                  <Icon name="emoticon-sad" size={20} type="MaterialCommunity"/>
                  <Text>Oops! That's a wrong one.You can get next one right!</Text>
                </Text>
                }
              </View>
          </View>
        }
      </View>
    )
}

