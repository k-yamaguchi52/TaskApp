export const SelectTodoListActionType = {
    SELECT: 'SELECT'
  } as const;

type ValueOf<T> = T[keyof T];

type TodoList = {
    id: string;
    title: string
}

export type SelectTodoListAction = {
    type: ValueOf<typeof SelectTodoListActionType>;
    payload: TodoList;
}

export const selectList = (todoList: TodoList): SelectTodoListAction => ({
    type: SelectTodoListActionType.SELECT,
    payload: todoList
});