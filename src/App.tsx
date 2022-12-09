import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Watch from "./Components/Products/Watch";
import Jacket from "./Components/Products/Jacket";
import Shoe from "./Components/Products/Shoe";




function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path={"/"}>
                <Route path={"/"} element={<Jacket/>}/>
                <Route path={"/shoe"} element={<Shoe/>}/>
                <Route path={"/jacket"} element={<Jacket/>}/>
                <Route path={"/watch"} element={<Watch/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
