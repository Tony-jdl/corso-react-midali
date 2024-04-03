import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice';

const Example = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p className='mb-3'>Conteggio: {count}</p>
      <button
        className='mr-3'
        aria-label='Increment value'
        onClick={() => dispatch(increment())}>Incrementa +</button>
      <button
        className='mr-3'
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>Decrementa -</button>
    </div>
  )
}

export default Example