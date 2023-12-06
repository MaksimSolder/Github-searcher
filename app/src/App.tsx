import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
        <Navigation/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/favourites" element={<FavouritesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
