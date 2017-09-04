export default function todosReducer(todos = [], action) {
	switch(action.type) {
		case 'ADD_TODO':
			return [...todos, action.payload];
		default:
			return todos;
	}
}