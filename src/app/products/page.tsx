import Product from "@/types/Product";
import Link from "next/link";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: Product[] = await res.json();
  // { next : {revalidate: 60}} -ISR могло быть ту вместо 5 строки
  return (
    <div>
      <aside className="h-screen bg-amber-600 w-36 fixed"></aside>
      <h2 className="text-violet-700 font-bold text-2xl ml-36 p-4">
        Our products
      </h2>
      <ul className="ml-36 p-4">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//SERVER cOMPONENTS
// SSG - static side generation когда один раз генерируется при билде - и дальше не меняется
// по умолчанию стоит SSG
// SSR - server side rendering - на каждый запрос
// ESR - incremental static regeneration - когда обновление по таймеру или по условию
// { next : {revalidate: 60}}
