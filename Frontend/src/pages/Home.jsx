import React from 'react';
// import ReactDOM from 'react-dom/client';
import Slider from '../Component/Slider';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Categories from '../Component/Categories';
import Earbudscategories from '../Component/Earbudscategories'
import Laptopcategories from '../Component/Laptopcategories';
import Smartcategories from '../Component/Smartcategories';
import News from '../Component/Newsletter';
import Footer from '../Component/Footer';

function Home(){
    return(
        <div>
        <Slider />
        <Categories />
        <Laptopcategories /> 
        <Earbudscategories />
        <Smartcategories />
        <News />
        <Footer />
      

         </div>
    //    <BrowserRouter>
    //  
    //    <Routes>
    //     <Route > </Route>
    //    </Routes>
    //    </BrowserRouter>
    )
}
export default Home;