export const SelectTodoItemActionType = {
    SELECT: 'SELECT'
  } as const;

export type ValueOf<T> = T[keyof T];

export type TodoItem = {
    id: number;
    title: string;
    date: Date;
    description: string;
    state: 'completed'|'working';
    listId: number;
}

export type SelectTodoItemAction = {
    type: ValueOf<typeof SelectTodoItemActionType>;
    payload: TodoItem;
}

export const selectItem = (todoItem: TodoItem): SelectTodoItemAction => ({
    type: SelectTodoItemActionType.SELECT,
    payload: todoItem
});