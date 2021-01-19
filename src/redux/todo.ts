import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";
import { Projects } from "../data/TodoItems";

export type Task = {
  id: string;
  title: string;
  deadline?: string;
  description: string;
  // createdAt: Date;
  projectId: string;
};

export type Project = {
  id: string;
  title: string;
  // createdAt: Date;
};

export type TodoState = {
  todoList: { [id: string]: Task };
  doneList: { [id: string]: Task };
  projectList: { [id: string]: Project };
  selectedTaskId?: string;
  selectedProjectId: string;
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: {},
    doneList: {},
    projectList: {"mytask": {id: "mytask", title: "MyTask"}},
    selectedProjectId: "mytask",
  } as TodoState,
  reducers: {
    taskCreated: (
      state,
      action: PayloadAction<
        Pick<Task, "title" | "deadline" | "description" | "projectId">
      >
    ) => {
      const id = uuid();
      const createdAt = new Date();
      state.todoList[id] = { ...action.payload, id};
    },
    taskDone: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.todoList[id];

      if (task) {
        state.doneList[id] = { ...task };
        delete state.todoList[id];
      }
    },
    taskUpdated: (state, action: PayloadAction<Task>) => {
      const { id, ...data } = action.payload;
      const task = state.todoList[id];
      if (task) state.todoList[id] = { ...task, ...data };
    },
    taskDeleted: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.todoList[id];
      if (task) {
        delete state.todoList[id];
      }
    },

    projectCreated: (state, action: PayloadAction<Pick<Project, "title">>) => {
      const id = uuid();
      state.projectList[id] = { ...action.payload, id};
    },
    projectUpdated: (
      state,
      action: PayloadAction<Project>
    ) => {
      const { id, ...data } = action.payload;
      const project = state.projectList[id];
      if (project) state.projectList[id] = { ...project, ...data };
    },
    projectDeleted: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const project = state.projectList[id];
      if (project) {
        delete state.projectList[id];
        for (let taskId of Object.keys(state.todoList)) {
          const task = state.todoList[taskId];
          if (task.projectId === id) {
            delete state.todoList[taskId];
          }
        }
        for (let taskId of Object.keys(state.doneList)) {
          const task = state.doneList[taskId];
          if (task.projectId === id) {
            delete state.doneList[taskId];
          }
        }
      }
    },

    taskSelected: (state, action: PayloadAction<string|undefined>) => {
      const id = action.payload;
      state.selectedTaskId = id;
    },
    projectSelected: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const project = state.projectList[id];
      if(project || id==="") state.selectedProjectId = id;
    }
  },
});
