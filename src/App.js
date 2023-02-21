import Cart from './components/Cart'
import './App.css';

const items= [
  {id: 1, name: 'Samsung 60" LED', price: 255.49, qty: 1},
  {id: 2, name: 'Samsung 1hp split unit Air conditioner', price: 85.50, qty: 2},
  {id: 3, name: 'Standing Fan', price: 16.99, qty: 2},
  {id: 4, name: 'Surface Pump', price: 20, qty: 1}
]

function App() {
  return (
    <div className="App">
      <Cart initialItems={items}/>
    </div>
  );
}

export default App;
