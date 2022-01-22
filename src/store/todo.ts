import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoState {
  title: string
  completed: boolean
  createdAt: Date
}

const initialState: TodoState[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    }
  },
})

export const { add } = todoSlice.actions

export default todoSlice.reducer