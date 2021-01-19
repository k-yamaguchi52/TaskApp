import { Reducer } from "redux";
import { TodoItemsAction, TodoItemsActionType as Type } from "./actions";

export type TodoItem = {
    id: string;
    title: string;
    date: Date;
    description: string;
    state: 'completed'|'working';
    listId: string;
}

export const initialTodoItemsState: TodoItem[] = [
    {
        id: "1",
        title: 'TODO1',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'working',
        listId: "1"
    },
    {
        id: "2",
        title: 'TODO2',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'working',
        listId: "1"
    },
    {
        id: "3",
        title: 'TODO3',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'completed',
        listId: "2"
    },
];

const todoItemsReducer: Reducer<TodoItem[], TodoItemsAction> = (
    state: TodoItem[] = initialTodoItemsState,
    action: TodoItemsAction,
): TodoItem[] => {

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

export default todoItemsReducer;