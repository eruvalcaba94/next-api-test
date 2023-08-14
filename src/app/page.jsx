import Link from "next/link";

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h1 className='text-3xl font-bold'>I am home</h1>
      <Link href='/products' className='mt-10 font-bold'>
        Products
      </Link>
    </div>
  );
}
