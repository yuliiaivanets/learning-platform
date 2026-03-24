import Category from "@/types/Category";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories/");
  const products: Category[] = await res.json();
  return (
    <div>
        <aside className="h-screen bg-amber-600 w-36 fixed"></aside>
        <h2 className="text-violet-700 font-bold text-2xl ml-36 p-4">List of categories</h2>
      <ul className="ml-36 p-4">
        {products.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}