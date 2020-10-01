import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILED,
    MARK_THE_ANSWER,
    FETCH_NEXT,
    RETAKE_TEST,
    SET_SELECTED_VALUE, 
} from '../constants';

const initialState = {
    questions: [
        {questionNumber: 1,
        question: 'Javascript is a -', 
        options:[
            {label:'Client-side scripting', value: 'a'}, 
            {label:'Server-side scripting', value: 'b'}, 
            {label:'Object-oriented programming language', value: 'c'}, 
            {label:'Both A, B & C', value: 'd'}
        ], 
        answer: 'c', 
        isLatex: false,
        selectedOption: null,
        explaination: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pagesand is understood by web browsers. JavaScript is also an Object based Programming language'},
        {questionNumber: 2,
        question: 'How to read and write a file using JavaScript?', 
        options:[
            {label:'Using JavaScript extensions', value: 'a'},
            {label:'Using a web page and Active X objects', value: 'b'},
            {label:'Both A & B', value: 'c'},
            {label:'None of the above', value: 'd'},
        ],  
        answer: 'c',
        isLatex: false, 
        selectedOption: null,
        explaination: 'Using Javascript extensions & Using a web page and Active X objects, we can read & write a file'},
        {questionNumber: 3,
        question: 'When $a \\ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$<br/>$\\frac{4m{{\\pi }^{2}}{{r}^{3}}}{{{r}^{2}}{{T}^{2}}}$= $\\frac{4m{{\\pi }^{2}}}{{{r}^{2}}}\\left( \\frac{{{r}^{3}}}{{{T}^{2}}} \\right)$', 
        options: [
            {label: 2, value: 'a'},
            {label: 5, value: 'b'},
            {label: 1, value: 'c'},
            {label: 7, value: 'd'}
        ],
        answer: 'c',
        isLatex: true,
        selectedOption: null,
        explaination: 'Solution<br><br>$\\frac{x-2}{x+3}=\\frac{x-3}{2}$$<br>$2(x-2)=(x-3)(x+3)$<br>$$2x-4=x^2-9$<br>$x^2-2x-5=0$<br><br>$x=\\frac{-(-2)\\pm\\sqrt{(-2)^2-4(1)(-5)}}{2(1)}$<br>$x=\\frac{2\\pm\\sqrt{24}}{2}$<br>$x=1\\pm\\sqrt{6}$'},
        {questionNumber: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.', 
        options: [
            {label: 'Lorem', value: 'a'},
            {label: 'Ipsum', value: 'b'},
            {label: 'Dolor', value: 'c'},
            {label: 'Elite', value: 'd'},
        ],
        answer: 'a',
        isLatex: false, 
        selectedOption: null,
        explaination: 'Morbi a bibendum metus. scelerisque sollicitudin enim eu venenatis.'},
    ],
    totalQuestions: 4,
    selectedAnswers: [{correctAnswers: 0}, {incorrectAnswers: 0}],
    activeIndex: 0,
    selectedOption: null
}

export default (state=initialState, action) => {
    switch (action.type) {

        case FETCH_QUESTIONS:
        case FETCH_QUESTIONS_SUCCESS: 
        case FETCH_QUESTIONS_FAILED:
            return state; 

        case MARK_THE_ANSWER:
            let selectedAnswers = state.selectedAnswers
            let questions = state.questions
            console.log('&&&&&&&&&&&&&&&&&&', questions[action.index].answer, action.answer)
            if (questions[action.index].answer == action.answer) {
                selectedAnswers[0].correctAnswers = selectedAnswers[0].correctAnswers + 1
            } else {
                selectedAnswers[1].incorrectAnswers = selectedAnswers[1].incorrectAnswers + 1
            }
            return {...state, selectedAnswers: selectedAnswers }

        case FETCH_NEXT:
            let activeIndex = state.activeIndex
            return {...state, activeIndex: activeIndex+1}
        
        case RETAKE_TEST:
            return {...state, activeIndex: 0, selectedAnswers: [{correctAnswers: 0}, {incorrectAnswers: 0}]}
        
        case SET_SELECTED_VALUE:
            let questionsObj = state.questions
            let selectedOption = state.selectedOption
            questionsObj[action.index].selectedOption == action.value
            console.log('SelectedOption -> ', selectedOption, 'Value ->', action.value)
            return {...state, questions: questionsObj}

        default:
            return state;
    }
}