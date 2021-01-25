import store from './store';

const url = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;

const shuffleArray = (arr: any[]) => {
	return arr.sort(() => Math.random() - 0.5);
}

export const getQuestions = async () => {
	const response = await fetch(url);
	const data = await response.json();
	const {results} = data;
	const mixedAns = results.map(result => {
		return {
			...result,
			answers : shuffleArray([...result.incorrect_answers, result.correct_answer])
		}
	})



	store.dispatch({type: 'SET_QUESTIONS', payload : {data: mixedAns}})
}