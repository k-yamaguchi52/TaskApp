import {TodoListItem} from "./reducer";

export const TodoListActionType = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    EDIT: 'EDIT',
  } as const;

type ValueOf<T> = T[keyof T];

export type TodoListAction = {
    type: ValueOf<typeof TodoListActionType>;
    payload: TodoListItem;
}

export const addList = (todoList: TodoListItem): TodoListAction => ({
    type: TodoListActionType.ADD,
    payload: todoList
});

export const deleteList = (todoList: TodoListItem): TodoListAction => ({
    type: TodoListActionType.DELETE,
    payload: todoList
});

export const editList = (todoList: TodoListItem): TodoListAction => ({
    type: TodoListActionType.EDIT,
    payload: todoList
})