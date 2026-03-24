import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <aside className="h-screen bg-amber-600 w-36 fixed">
        <nav className="flex flex-col gap-2
         text-white text-2xl p-4">
          <Link href="/profile/my-account">Account</Link>
          <Link href="/profile/my-programs">Programs</Link>
        </nav>
      </aside>
      <div className="ml-36 p-4">
      {children}
      </div>
    </div>
  );
}
