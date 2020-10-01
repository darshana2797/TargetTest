import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {Question} from '../components/question/Question'
import {Result} from '../components/result/Result'
import {fetchQuestions, fetchNext, markTheAnswer,retakeTest, setSelectedValue} from '../redux/actions/questionsActions'
import {styles} from './styles';


function Home(props) {

    useEffect(() => {
        props.fetchQuestions();
    })

    const [selectedOption, setSelectedOption] = useState(null)
    const selectedAnswer = (answer) => {
        setSelectedOption(answer)
        props.setSelectedValue(props.data.activeIndex, answer)
    }
    let activeIndexData = props.data && props.data.questions[props.data.activeIndex]

    return (
        <ScrollView style={styles.containerStyle}>           
            {activeIndexData ?
                <Question 
                    key = {props.data.activeIndex}
                    explaination = {activeIndexData.explaination} 
                    questionNumber = {activeIndexData.questionNumber} 
                    question = {activeIndexData.question} 
                    options = {activeIndexData.options} 
                    answer = {activeIndexData.answer} 
                    isLatex = {activeIndexData.isLatex}
                    selectAnswer = {(answer) => selectedAnswer(answer)}
                    setSelectedValue = {(value) => props.setSelectedValue(value)}
                    selectedOption = {selectedOption}
                /> 
                    :
                    <Result selectedAnswers = {props.data.selectedAnswers}/>
                    }
                    {activeIndexData  ? 
                        <View style={styles.nextButtonContainer}>
                            <TouchableOpacity
                                style={styles.nextButton}
                                onPress={()=>{
                                    props.fetchNext()
                                    props.markTheAnswer(props.data.activeIndex, selectedOption)
                                    props.setSelectedValue(props.data.activeIndex, null)
                                    setSelectedOption(null)
                                }}
                            >
                            <Text style={styles.nextButtonText}>NEXT</Text>
                            </TouchableOpacity>
                        </View>

                        :

                        <View style={styles.nextButtonContainer}>
                            <TouchableOpacity
                                style={styles.retakeButton}
                                onPress={()=>{
                                    props.retakeTest()
                                }}
                            >
                            <Text style={styles.nextButtonText}>RETAKE</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.retakeButton}
                                onPress={()=>{props.retakeTest()}}
                            >
                            <Text style={styles.nextButtonText}>GO TO PRACTICE TEST</Text>
                            </TouchableOpacity>
                        </View>
                    }
            
        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions()),
        fetchNext: () => dispatch(fetchNext()),
        markTheAnswer: (index, answer) => {
            console.log('@@@@@@@@@@@@@@@@@@@@@@@', index, answer)
            dispatch(markTheAnswer(index, answer))
        },
        setSelectedValue: (index, value) => {dispatch(setSelectedValue(index, value))},
        retakeTest: () => dispatch(retakeTest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
