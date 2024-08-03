import logo from './logo.svg';
import './App.css';
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';
import { useGlobalContext } from './Context';

function App() {
  const data = useGlobalContext()
  return (
    <>
    <div className="App">
      Welcome to Tech  News {data}
    </div>
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  );
}

export default App;
