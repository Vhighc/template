
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
// import TodoList from './Components/Todos/TodoList';
import PageOne from './Pages/frontPage'
import PageTwo from './Pages/backPage'




 
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path='/' element={<PageOne />} />       
         <Route path='/backpage' element={<PageTwo />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;





    