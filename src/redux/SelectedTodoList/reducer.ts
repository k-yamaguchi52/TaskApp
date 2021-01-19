import { Reducer } from "redux";
import { SelectTodoListAction, SelectTodoListActionType as Type } from "./actions"

export type TodoList = {
    id: string;
    title: string;
}

export const initialTodoList = {
    id: "all",
    title: "全て"
}

const selectedTodoListReducer: Reducer<TodoList, SelectTodoListAction> = (
    state: TodoList = initialTodoList,
    action: SelectTodoListAction
): TodoList => {
    const {type, payload} = action;
    switch(type){
        case Type.SELECT:
            return payload;
        default:
            return state;
    }
};

export default selectedTodoListReducer;