import './App.css';
import Stockchart from './Components/StockChart';
//이거 말고 게임 페이지라는 Page 컴포넌트에서 import 해오기
import LogIn from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/stocks" element={<Stockchart></Stockchart>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
