import './App.css';
import Stockchart from './Components/StockChart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/stocks" element={<Stockchart></Stockchart>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
