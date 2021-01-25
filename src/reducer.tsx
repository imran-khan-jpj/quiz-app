import {getQuestions} from './ApiCalls'

type InitialStatePropsTypes = {
	questions: any[];
	totalQuestions : number;
	loading: boolean;
	number: number;
	gameOver: boolean;
	disabled_ans : boolean;
}




type ActionType = { type : string; payload: { id?: number; data: any[]} }
const inintialState: InitialStatePropsTypes = { 
		questions : [], 
		totalQuestions : 10,
		loading: false,
		number: 0,
		gameOver: false,
		disabled_ans : false,
	}

const reducer = (state = inintialState, action: ActionType) => {
	if(action.type === 'GET_QUESTIONS'){
		getQuestions();
		return {...state, loading: true, number : 0, questions: []}
	}else if(action.type === 'SET_QUESTIONS'){	

		return {...state, questions : [...state.questions, ...action.payload.data], loading: false}
	}else if(action.type === 'NEXT_QUESTION'){

			return {...state, number : state.number + 1, disabled_ans : false}
	}else if(action.type === 'DISABLE_ALL_ANS'){
		return {...state, disabled_ans : true}
	}

	return state;
}

export default reducer;