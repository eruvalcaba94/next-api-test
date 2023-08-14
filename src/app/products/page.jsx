import Link from "next/link";
import getProducts from "@/libs/getProducts";

export default async function page() {
  const data = await getProducts();
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <Link href='/' className='mb-10'>
        take me home
      </Link>
      <h1 className='text-3xl font-bold'>List of products</h1>

      {data.products.map((product) => {
        return (
          <div>
            <p key={product.id}>
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}
