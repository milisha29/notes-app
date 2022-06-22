import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Notespage from './pages/Notespage'
import Header from './components/Header'
import NoteMine from './pages/NoteMine.js'
function App() {
  return (
    <Router>
    <div className="container">
      <div className="app">
   <Header/>
  <Route component={Notespage} path="/" exact></Route>
  <Route path="/:id" component={NoteMine}></Route>
  </div>
    </div>
    </Router>
  );
}

export default App;
