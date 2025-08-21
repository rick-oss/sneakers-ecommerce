// Estrutura para os produtos adicionados no carrinho
export interface CartProduct {
  id: number;
  image: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  totalPrice: number;
}
