import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link href="/" style ={{color: "white"}, {textDecoration: "underline"}}>Home</Link>
      <Link href="/blogs" style ={{color: "white"}}>Blogs</Link>
      <Link href="/post" style ={{color: "white"}}>Post</Link>
      <Link href="/about" style ={{color: "white"}}>About</Link>
      <Link href="/signin" style ={{color: "white"}}>Sign in</Link>
    </nav>
  );
}