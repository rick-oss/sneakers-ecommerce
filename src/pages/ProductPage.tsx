import { useState, useEffect } from "react";

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
  const [cartProducts, setCartProducts] = useState([
    {
      id: 0,
      image: "",
      productName: "",
      productPrice: 0,
      productQuantity: 0,
      totalPrice: 0,
    },
  ]);

  const handleAddToCart = (product: {
    id: number;
    image: string;
    productName: string;
    productPrice: number;
    productQuantity: number;
    totalPrice: number;
  }) => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.id === product.id
          ? {
              ...cartProduct,
              quantity: cartProduct.productQuantity + product.productQuantity,
              totalPrice: cartProduct.productPrice * (cartProduct.productQuantity + product.productQuantity),
            }
          : cartProduct
      );
      setCartProducts(updatedCart);
    } else {
      setCartProducts([...cartProducts, { ...product }]);
    }
  };

  useEffect(() => {
    console.log("Cart updated:", cartProducts);
  }, [cartProducts]);

  return (
    <div className={styles.product_page}>
      <Header />
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
