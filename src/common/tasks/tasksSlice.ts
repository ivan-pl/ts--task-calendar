/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./types";
import { RootState, AppDispatch } from "../../app/store";
import { taskLocalStorage } from "../../app";

type TasksState = Required<Task>[];

const initialState: TasksState = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<Task["id"]>) => {
      state = state.filter((task) => task.id !== action.payload);
    },
    update: (state, action: PayloadAction<Task>) => {
      const ind = state.findIndex((task) => task.id === action.payload.id);
      if (ind !== -1) {
        state[ind] = action.payload;
      }
    },
  },
});

export const { add, update, remove } = tasksSlice.actions;

export const addTask =
  (task: Omit<Task, "id">) => async (dispatch: AppDispatch) => {
    const id = await taskLocalStorage.addEvent(task);
    dispatch(add({ ...task, id }));
  };

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
