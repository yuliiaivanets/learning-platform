import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href="/profile/myAccount">My Account</Link>
        <Link href="/profile/myGroups">My Groups</Link>
      </nav>

      {children}
    </div>
  );
}
