import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import NotFound from "./components/notFound/NotFound";
import NotFoundProduct from "./components/notFoundProduct/NotFoundProduct";

// Estilos globales
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="/404" element={<NotFoundProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
