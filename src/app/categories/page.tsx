import Category from "@/types/Category";
import Link from "next/link";
import Image from "next/image";
import { CategoryCard } from "@/components/category-card";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories/");
  const categories: Category[] = await res.json();

  const categoriesList = (
    <ul className="flex flex-wrap items-center justify-center gap-5">
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryCard category={category}/>
          {/* <div className=" bg-violet-200  rounded-2xl shadow-2xl p-2 w-58 flex flex-col gap-2 items-center">
          <Link href={`/categories/${category.id}`}><h3 className="text-violet-700 hover:underline">{category.name}</h3></Link>
          <Image className="cursor-pointer"
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  unoptimized
                />
          </div> */}
        </li>
      ))}
    </ul>
  );
  return (
    <section className="min-h-screen bg-orange-100 py-6 px-4 md:px-20">
      <h2 className="text-violet-700 font-bold text-2xl mb-8 text-center">
        Categories
      </h2>
      {categoriesList}
    </section>
  );
}
