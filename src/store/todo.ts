import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

const p = new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  },2000)
})

export const asyncTodos = createAsyncThunk("TODOS", async (data, thunkAPI) => {
  console.log("receive by server", data);
  await p;
  return [{
    title: 'title',
    completed: false,
    createdAt: new Date()
  }, {
    title: 'title',
    completed: false,
    createdAt: new Date()
  }];
});

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
    add: {
      reducer: (state, action: PayloadAction<TodoState>) => {
        console.log('reducer')
        state.push(action.payload);
      },
      prepare: (todo: TodoState) => {
        console.log('prepare')
        return { payload: todo };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncTodos.pending, (state, action ) => {
      console.log('pending')
    })
    builder.addCase(asyncTodos.fulfilled, (state, action ) => {
      console.log('fulfilled', action.payload)
      action.payload.forEach((item) => {
        state.push(item);
      })
    })
    builder.addCase(asyncTodos.rejected, (state, action ) => {
      console.log('rejected')
    })
  },
})

export const { add } = todoSlice.actions

export default todoSlice.reducer