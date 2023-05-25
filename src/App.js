import './App.css';
import Quiz from './components/quizPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './components/welcome';
import Submit from './components/submitScreen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/quiz' element={<Quiz />}></Route>
      <Route path='/answer' element={<Submit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
