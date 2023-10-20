import Card from './Card';
import image from './image.png';

function App() {
  return (
    <>
      <Card 
      src={image}
      createdAt={'2023-10-20T15:30:08Z'} 
      content={'Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.'}
      />    
      <Card 
      createdAt={'2023. 3. 15'} 
      content={'Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.'}
      />
    </>

  );
}

export default App;
