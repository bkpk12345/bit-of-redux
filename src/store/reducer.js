const initialState = {
	counter: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1
			}

		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			}
		case 'ADD_5':
			return {
				...state,
				counter: state.counter + action.val
			}
		case 'SUB_10':
			return {
				...state,
				counter: state.counter - action.val
			}

		default:
			return state
	}
}

export default reducer
