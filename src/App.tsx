import { Provider } from 'react-redux'
import CounterDisplay from './components/counter-display';
import CounterEmit from './components/counter-emit';
import Pokemon from './components/pokemon';
import Todo from './components/todo';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <CounterEmit />
      <CounterDisplay />
      <Pokemon />
      <Todo />
    </Provider>
  )
}

export default App
