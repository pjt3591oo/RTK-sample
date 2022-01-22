import { useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counter';

interface Props {}

const CounterEmit = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={ () => dispatch(increment())} >+</button>
      <button onClick={ () => dispatch(decrement())}>-</button>
    </>
  );
}

export default CounterEmit;