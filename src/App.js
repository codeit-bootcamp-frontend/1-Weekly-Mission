import CardList from './components/Card';
import items from './mock.json';

function App() {
  console.log(items);
  return (
    <div className='App'>
      <CardList items={items} />
    </div>
  );
}

export default App;
