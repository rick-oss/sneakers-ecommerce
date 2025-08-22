import { useState, useEffect } from "react";
import type { CartProduct } from "../context/cartProduct";

import styles from "./ProductPage.module.css";

import Header from "../components/header/Header";
import ProductGallery from "../components/layout/ProductGallery";
import ProductInfo from "../components/layout/ProductInfo";
import AddToCart from "../components/layout/AddToCart";

import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct2 from "../assets/images/image-product-2.jpg";
import imageProduct3 from "../assets/images/image-product-3.jpg";
import imageProduct4 from "../assets/images/image-product-4.jpg";

function ProductPage() {
  const images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const handleAddToCart = (product: CartProduct) => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (product.productQuantity > 0) {
      if (existingProduct) {
        const updatedCart = cartProducts.map((cartProduct) =>
          cartProduct.id === product.id
            ? {
                ...cartProduct,
                productQuantity: cartProduct.productQuantity + product.productQuantity,
                totalPrice: cartProduct.productPrice * (cartProduct.productQuantity + product.productQuantity),
              }
            : cartProduct
        );
        setCartProducts(updatedCart);
      } else {
        setCartProducts([...cartProducts, { ...product }]);
      }
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log("Cart updated:", cartProducts);
  }, [cartProducts]);

  return (
    <div className={styles.product_page}>
      <Header cartItems={cartProducts} />
      <main className="app">
        <ProductGallery images={images} />
        <ProductInfo
          companyName="Sneaker Company"
          productTitle="Fall Limited Edition Sneakers"
          productDescription="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
        />
      </main>
      <AddToCart onAdd={handleAddToCart} />
    </div>
  );
}

export default ProductPage;
