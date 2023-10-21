import CardList from './components/Card';
import items from './mock.json';
import Shared from './pages/Shared';

function App() {
  console.log(items);
  return (
    <div className='App'>
      <Shared />
      {/* <CardList items={items} /> */}
    </div>
  );
}

export default App;
