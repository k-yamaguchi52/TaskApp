import { Reducer } from "redux";
import { TodoListAction, TodoListActionType as Type } from "./actions";

export type TodoListItem = {
    id: string;
    title: string;
}

export const initialTodoListState: TodoListItem[] = [
    {
        id: "1",
        title: 'リスト１'
    },
    {
        id: "2",
        title: 'リスト２',
    }
];

const todoListReducer: Reducer<TodoListItem[], TodoListAction> = (
    state: TodoListItem[] = initialTodoListState,
    action: TodoListAction,
): TodoListItem[] => {

    const {type, payload} = action;

    switch(action.type){
        case Type.ADD:
            return [
                ...state,
                payload
            ];
        case Type.DELETE:
            return state.filter(e => e.id !== payload.id);
        case Type.EDIT:
            return state.map(e => e.id === payload.id ? payload : e);
        default:
            return state
    }
};

export default todoListReducer;