import React from 'react';
import {connect} from 'react-redux';
import actions from './actions';
import store from './store';

const QuestionCard = ({questions, number, disabled}) => {

	const {question, correct_answer, answers} = questions[number];


	const userAns = () => {
		store.dispatch({type : actions.DISABLE_ALL_ANS, payload : {data: []}})
	}
	return <div>
		<p>Q:{number + 1}:{question}</p>
		<div className="row">
		{
			answers.map((answer, index) => {
				 return	<div className="col-6" key={index}>
				 	{index + 1}: <button className={`btn ${disabled ? disabled && answer === correct_answer ? 'btn-success' : 'btn-danger' : 'btn-primary'}`} onClick={userAns} value={answer} disabled={disabled}>{answer}</button>
				 	</div>
				 
			})
		}
		</div>
	</div>
}

const defaultState = state => ({
	number : state.number,
	questions: state.questions,
	disabled : state.disabled_ans

})
export default connect(defaultState)(QuestionCard);