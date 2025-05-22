import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@components/Navbar";
import { Home } from "@pages/home/Home";
import { About } from "@pages/about/About";
import { Contact } from "@pages/Contact/Contact";
import { NotFound } from "@pages/error/NotFound";
import { Footer } from "@components/Footer";
import { TopScroll } from "@components/TopScroll";
import { Bulletin } from "@pages/blog/Bullettin";
import { Search } from "@components/Search";
import { useState, createContext } from "react";
import { Chairs } from "@pages//products/chair";
import { Bed } from "@pages/products/bed";
import { Benches } from "@pages/products/bench";
import { Storage } from "@pages/products/storage";
import { Dining } from "@pages/products/dining";
import { Sofa } from "@pages/products/sofa";
import { Rug } from "@pages/products/rug";
import { Table } from "@pages/products/table";
import { Lighting } from "@pages/products/lighting";
import { LivingRoom } from "@pages/rooms/livingroom";
import { Bedroom } from "@pages/rooms/bedroom";
import { DiningRoom } from "@pages/rooms/diningroom";
import { ProductDetails } from "@pages/details/productdetails";
import { RoomDetails } from "@pages/details/roomdetails";
import { SignIn } from "@pages/authentication/signin";
import { SignUp } from "@pages/authentication/signup";
import { Cart } from "@pages/cart/cart";
import { Checkout } from "@pages/checkout/checkout";
export const AppContext = createContext();
function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <AppContext.Provider value={{ showSearch, setShowSearch }}>
      <BrowserRouter>
        {showSearch && <Search />}
        <Navbar />
        <TopScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bulletin" element={<Bulletin />} />
          <Route path="/chair" element={<Chairs />} />
          <Route path="/beds" element={<Bed />} />
          <Route path="/benches" element={<Benches />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/rug" element={<Rug />} />
          <Route path="/table" element={<Table />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:name" element={<ProductDetails />} />
          <Route path="/rooms/:name" element={<RoomDetails />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Rooms Route */}
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/dining-room" element={<DiningRoom />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
