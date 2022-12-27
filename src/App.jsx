import React from 'react'; // se importan las dependencias necesarias,react, estilos, cada uno de los componentes que se necesitan, sobre todo Las rutas de react router dom para poder navegar en la app.
import './App.jsx';
import '../src/styles/App.css'
import Menu from './components/Header-Footer/Menu';
import Category from './components/Category/Category';
import ShoppingCar from './components/ShoppingCar/ShoppingCar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom'


function App() {
   return (
<div className="App">
   <Routes>
      <Route path='/' element={<Menu />}>
         <Route path='category' element ={<Category />}/>
         <Route path='/' element ={<Home />}/>
         <Route path='shoppingcar' element ={<ShoppingCar />}/>
      </Route>
   </Routes>
</div>); 
}
export default App;