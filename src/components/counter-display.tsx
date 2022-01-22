import { useSelector } from 'react-redux'
import { RootState } from '../store';

interface Props { }

const CounterDisplay = (props: Props) => {
  const counter = useSelector((state: RootState) => state.counter.value);
  
  return (
    <>
      <h1>{counter}</h1>
    </>
  );
}

export default CounterDisplay;