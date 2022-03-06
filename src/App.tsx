import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded, decrementOne, amountDecremented, reset } from './feature/counter/counterSlice'
import { useFetchBreedsQuery } from './feature/dogs/dogsApiSlice'
import logo from './logo.svg'
import './App.css'

function App() {

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery();

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
        <section>
          <h1>Counter</h1>
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
        </section>
        <section>
          <h1>Fetch Dogos</h1>
          Number of dogs fetched: {data.length}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) =>{
                return (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img src={breed.image.url} alt={breed.name} width={250}/></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
      </header>
    </div>
  )
}

export default App
