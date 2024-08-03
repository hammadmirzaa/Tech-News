import logo from './logo.svg';
import './App.css';
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';

function App() {

  return (
    <>
    <div className="App">
      Welcome to Tech  News 
    </div>
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  );
}

export default App;
