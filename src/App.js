import './App.css';
import Stockchart from './Components/StockChart';
//이거 말고 게임 페이지라는 Page 컴포넌트에서 import 해오기
import LogIn from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/stocks" element={<Stockchart></Stockchart>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
