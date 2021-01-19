import {TodoItem} from "./reducer";

export const TodoItemsActionType = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    EDIT: 'EDIT',
  } as const;

type ValueOf<T> = T[keyof T];

export type TodoItemsAction = {
    type: ValueOf<typeof TodoItemsActionType>;
    payload: TodoItem;
}

export const addItem = (todoItem: TodoItem): TodoItemsAction => ({
    type: TodoItemsActionType.ADD,
    payload: todoItem
});

export const deleteItem = (todoItem: TodoItem): TodoItemsAction => ({
    type: TodoItemsActionType.DELETE,
    payload: todoItem
});

export const editItem = (todoItem: TodoItem): TodoItemsAction => ({
    type: TodoItemsActionType.EDIT,
    payload: todoItem
})