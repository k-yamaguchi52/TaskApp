import { Reducer } from "redux";
import { SelectTodoItemAction, SelectTodoItemActionType as Type } from "./actions";

export type TodoItem = {
    id: number;
    title: string;
    date: Date;
    description: string;
    state: 'completed'|'working';
    listId: number;
}

const selectedTodoItemReducer: Reducer<TodoItem | null, SelectTodoItemAction> = (
    state: TodoItem | null = null,
    action: SelectTodoItemAction
): TodoItem | null => {
    const {type, payload} = action;
    switch(type){
        case Type.SELECT:
            return payload;
        default:
            return state;
    }
};

export default selectedTodoItemReducer;