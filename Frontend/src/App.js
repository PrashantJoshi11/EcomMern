
import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/Product';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Navbar from "../src/Component/Navbar";
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Addproducts from './pages/AddProducts';
import Protected from './Component/Protected';
// import { useEffect, useState } from 'react';


function App() {

  return (
   
    
      <BrowserRouter>
        <Navbar />
      <Routes>
         <Route path="/*" element={<NoPage />} />
        <Route  path='/' element={<Protected Component={Home}  />} />
        <Route  path='/products' element={<Protected Component={ProductList}  />} />
        <Route  path='/products/:category' element={<Protected Component={ProductList} />} />
        <Route  path='/product/:id' element={<Protected Component={SingleProduct}  />} />
        <Route  path='/products/product/:id' element={<Protected Component={SingleProduct}  />} />

        <Route  path='/products/:category/product/:id' element={<Protected Component={SingleProduct}  />} />
        <Route  path='/Addproducts' element={<Protected Component={Addproducts}  />} />
        <Route  path='/Cart' element={<Protected Component={Cart}  />} />
        <Route  path='/Login' element={<Protected Component={Login}  />} />
        <Route  path='/AddProducts' element={<Protected Component={Addproducts}  />} />

        <Route  path='/Register' element= {<Register />} />
      
      </Routes>
      </BrowserRouter>


  


  );
  
}

export default App;
