import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookContextProvider from '../src/contexts/BookContext';

const App = () => {
  return (
    <BookContextProvider>
      <Router>
        <div className="App">
          <header>
            <Header />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </BookContextProvider>
  );
};

export default App;