import {combineReducers} from "redux";
import selectedTodoItemReducer from "./SelectedTodoItem/reducer";
import selectedTodoListReducer from "./SelectedTodoList/reducer";
import todoItemsReducer from "./TodoItems/reducer";
import todoListReducer from "./TodoList/reducer";

export type State = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    todoItems: todoItemsReducer,
    todoList: todoListReducer,
    selectedTodoItem: selectedTodoItemReducer,
    selectedTodoList: selectedTodoListReducer
});

export default rootReducer;