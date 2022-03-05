import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded, decrementOne, amountDecremented, reset } from './feature/counter/counterSlice'
import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const oneClick = () => {
    dispatch(incremented());
  }

  const addMany = () => {
    dispatch(amountAdded(10));
  }

  const decrement = () => {
    dispatch(decrementOne());
  }

  const decrementMany = () => {
    dispatch(amountDecremented(10));
  }

  const resetCount = () => {
    dispatch(reset());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Redux Modern Tooling</p>
        <p>
          <button onClick={oneClick}>
            Add 1
          </button>
          <button onClick={addMany}>
            Add 10
          </button>
          <button onClick={decrement}>
            Decrement 1
          </button>
          <button onClick={decrementMany}>
            Decrement 10
          </button>
          <button onClick={resetCount}>
            Reset
          </button>
        </p>
        <p>count is: {count}</p>
      </header>
    </div>
  )
}

export default App
