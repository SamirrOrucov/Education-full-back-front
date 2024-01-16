import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./assets/layouts/MainLayout/MainLayout";
import HomePage from "./assets/page/Home/HomePage";
import AddPage from "./assets/page/Add/AddPage";
import BasketPage from "./assets/page/Basket/BasketPage";
import Wishlist from "./assets/page/Wishlist/Wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/basket" element={<BasketPage/>} />
            <Route path="/wishlist" element={<Wishlist/>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
