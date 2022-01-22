import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { add, TodoState } from '../store/todo';

interface Props { }

const Todo = (props: Props) => {
  const [text, setText] = useState<string>('');

  const todos: TodoState[] = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  
  return (
    <div>
      <div>
        <input value={text} onChange={e => setText(e.target.value)}></input>
        <button onClick={() => dispatch(add({title: text, createdAt: new Date(), completed: false}))}>등록</button>
      </div>

      <ul>
        {todos.map((todo: TodoState, idx: number) => (
          <li key={idx}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;