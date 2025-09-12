import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import type { CartProduct } from "../context/cartProduct";

import styles from "./ProductPage.module.css";

import Header from "../components/header/Header";
import CarouselGallery from "../components/productGallery/CarouselGallery";
import GridGallery from "../components/productGallery/GridGallery";
import ProductInfo from "../components/layout/ProductInfo";
import AddToCart from "../components/layout/AddToCart";

import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct2 from "../assets/images/image-product-2.jpg";
import imageProduct3 from "../assets/images/image-product-3.jpg";
import imageProduct4 from "../assets/images/image-product-4.jpg";

import imageThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import imageThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import imageThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import imageThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

function ProductPage() {
  const mobileGallery = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
  const desktopGallery = [
    {
      image: imageProduct1,
      thumbnail: imageThumbnail1,
    },
    {
      image: imageProduct2,
      thumbnail: imageThumbnail2,
    },
    {
      image: imageProduct3,
      thumbnail: imageThumbnail3,
    },
    {
      image: imageProduct4,
      thumbnail: imageThumbnail4,
    },
  ];

  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const isDesktopScreen = useMediaQuery("(min-width: 960px)");
  const isTabletScreen = useMediaQuery("(min-width: 520px)");

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

  const renderGallery = () => {
    if (isDesktopScreen) {
      return <DesktopProductGallery gallery={desktopGallery} />;
    } else {
      return <ProductGallery images={mobileGallery} />;
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.product_page}>
      <Header cartItems={cartProducts} removeItem={handleRemoveItem} isDesktop={isTabletScreen} />
      <main className={styles.main_content}>
        {renderGallery()}
        <section className={styles.main_section}>
          <ProductInfo
            companyName="Sneaker Company"
            productTitle="Fall Limited Edition Sneakers"
            productDescription="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
          />
          <AddToCart onAdd={handleAddToCart} />
        </section>
      </main>
    </div>
  );
}

export default ProductPage;
