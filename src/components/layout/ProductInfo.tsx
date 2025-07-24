import styles from "./ProductInfo.module.css";

interface ProductInfoProps {
  companyName: string;
  productTitle: string;
  productDescription: string;
}

function ProductInfo({ companyName, productTitle, productDescription }: ProductInfoProps) {
  return (
    <section className={styles.product_info}>
      <p className={styles.company_name}>{companyName.toLocaleUpperCase()}</p>
      <h1>{productTitle}</h1>
      <p className={styles.product_description}>{productDescription}</p>
    </section>
  );
}

export default ProductInfo;
