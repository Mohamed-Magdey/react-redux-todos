import { ADD_TODO, REMOVE_TODO } from './actionCreators';

const initialState = {
    todos: [],
    id: 0
};

export default function rootReducer (state = initialState, action) {
    let newState = {...state};
    switch(action.type) {
        case ADD_TODO:
            newState.id++;
            return {
                ...newState,
                todos: [...newState.todos, {task: action.task, id: newState.id}]
            };
        case REMOVE_TODO:
            let todos = state.todos.filter(val => val.id !== action.id);
            return {...state, todos};
        default:
            return state;
    }
}