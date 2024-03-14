import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Todo from './components/Todo/Todo.jsx';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/create' element={<Todo></Todo>}></Route>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
