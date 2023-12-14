import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-blue-200 h-[50px] text-black flex justify-center items-center gap-[20px]">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
