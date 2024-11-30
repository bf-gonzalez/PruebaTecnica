import { Route, Router, Routes } from "react-router-dom"; 
import Navbar from './components/navbar/Navbar';
import Home from './views/Home'; 
import Bebidas from './views/Bebidas'; 
import Crear from './views/Crear';

function App() {
  return (
   
    <>
    
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/crear" element={<Crear />} />
      </Routes>
    </>

     

  );
}

export default App;