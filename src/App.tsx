import "./App.css";

import imageProduct1 from "./assets/images/image-product-1.jpg";

import Header from "./components/layout/Header";
import ProductGallery from "./components/layout/ProductGallery";
import ProductInfo from "./components/layout/ProductInfo";
import AddToCart from "./components/layout/AddToCart";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <ProductGallery images={imageProduct1} />
        <ProductInfo
          companyName="Sneaker Company"
          productTitle="Fall Limited Edition Sneakers"
          productDescription="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
        />
      </main>
    </>
  );
}

export default App;
