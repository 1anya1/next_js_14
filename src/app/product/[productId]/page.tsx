export default function Product({ params, }: { params: { productId: string } }) {
  return <h1>this is a product {params.productId}</h1>;
}
