import React from 'react';
import {connect} from 'react-redux'
import store from './store';
import actions from './actions';
import Question from './QuestionCard'
function App({questions, questionNo, loading, number, gameOver, disabled}) {

    
    const startQuiz = () => {
        store.dispatch({type : actions.GET_QUESTIONS, payload: {data: []}});
    }
    if(loading){
        return <h2>Loading...</h2>
    }
    const nextQuestion = () => {
        store.dispatch({type : actions.NEXT_QUESTION, payload: {data: []}})
    }
    const againStart = ()  => {

        store.dispatch({type : actions.GET_QUESTIONS, payload: {data: []}})
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-6 offset-3">
                <h2>Quiz App</h2>
                {questions.length > 0 && <Question />}
                {
                    questions.length === 0 &&
                <button className="btn btn-outline-primary" onClick={startQuiz}>Start</button>
                }
                {    
                    questions.length > 0 && number + 1 < questions.length && disabled && 
                    
               
                   
                
                <button className="btn btn-outline-primary" onClick={nextQuestion}>Next Question</button>
                        
                }
                {
                    number + 1 === questions.length && disabled &&
                        <button className="btn btn-primary" onClick={againStart}>Again Start</button>
                }
            </div>
        </div>
    </div>
  );
}



    const defaultState = (state) => {
        return {
            questions: state.questions,
            questionNo : state.questionNo,
            loading: state.loading,
            number: state.number,
            gameOver : state.gameOver,
            disabled : state.disabled_ans
        }
    }

export default connect(defaultState)(App);
