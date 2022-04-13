import State from './pages/State';

function App() {

  const handleClickItem = (item) => {
    console.log('cha', item);
  }


  return (
    <>
      <State handleClickItem ={handleClickItem}/>
    </>
  );
}

export default App;
