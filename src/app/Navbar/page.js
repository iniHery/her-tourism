import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-white ">
      <div className="flex justify-between items-center">
        <div className="text-xl">
          <Link href="/">
            <span className="font-bold">Her</span>Tourism.
          </Link>
        </div>
        <div className="flex justify-between items-center gap-[40px] font-light">
          <div>Home</div>
          <div>Tour</div>

          <div>Blog</div>
        </div>
        <div>
          <button className="bg-white px-8 py-4 text-black rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
