export default async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=0");

  if (!res.ok) {
    throw new Error("Could not find products");
  }

  return res.json();
}
