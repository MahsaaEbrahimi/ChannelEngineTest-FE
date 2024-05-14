import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OverView from './components/OverViwe';
import DetailPage from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OverView/>}/>
        <Route path='/:id' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
    
     
   
  );
}

export default App;


