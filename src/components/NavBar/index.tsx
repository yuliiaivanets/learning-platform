import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex bg-violet-700 gap-2 items-center justify-center min-h-24">
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
      <Link href="/writeCurator">Write to your curator</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
