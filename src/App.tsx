import "./App.css";

import imageProduct1 from "./assets/images/image-product-1.jpg";

import Header from "./components/layout/Header";
import ProductGallery from "./components/layout/ProductGallery";
import ProductInfo from "./components/layout/ProductInfo";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <ProductGallery images={imageProduct1} />
      </main>
    </>
  );
}

export default App;
