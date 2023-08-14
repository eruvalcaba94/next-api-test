import getProduct from "@/libs/getProduct";
import Image from "next/image";
import Link from "next/link";

export default async function UserPage({ params: { id } }) {
  const product = await getProduct(id);

  return (
    <div className='flex flex-col justify-center items-center mt-20 w-1/2 mx-auto'>
      <h1 className='text-3xl font-bold pb-5'>{product.title}</h1>
      <Image
        src={product.thumbnail}
        width={500}
        height={500}
        alt='product image'
      />
      <p className='text-xl pt-7'>{product.description}</p>
      <p className='text-xl pt-3 font-semibold'>${product.price}</p>
      <Link href='/products' className='mt-10'>
        back to products
      </Link>
    </div>
  );
}
