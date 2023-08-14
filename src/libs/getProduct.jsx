export default async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("failed to get product");
  }

  return res.json();
}
