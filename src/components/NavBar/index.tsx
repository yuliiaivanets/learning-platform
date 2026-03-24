import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex bg-violet-700 gap-2 items-center justify-center min-h-24 text-2xl text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
       <Link href="/categories">Categories</Link>
      <Link href="/write-curator">Write to your curator</Link>
      <Link href="/profile">Profile</Link>
      
    </nav>
  );
}
