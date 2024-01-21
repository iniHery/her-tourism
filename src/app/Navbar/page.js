// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="text-white ">
//       <div className="flex justify-between items-center">
//         <div className="text-xl">
//           <Link href="/">
//             <span className="font-bold">Her</span>Tourism.
//           </Link>
//         </div>
//         <div className="flex justify-between items-center gap-[40px] font-light">
//           <div>Home</div>
//           <div>Tour</div>

//           <div>Blog</div>
//         </div>
//         <div>
//           <button className="bg-white px-8 py-2 text-black rounded-lg">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// Navbar.js

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    // Tambahkan event listener untuk menghandle scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-white fixed top-0 left-0 right-0 transition-all duration-300 opacity-85 ${
        isScrolled ? "bg-[#171717] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full md:w-full lg:mx-auto max-w-screen-xl p-4">
        <div className="text-xl">
          <Link href="/">
            <span className="font-bold">Bali Jadma </span>Tour.
          </Link>
        </div>
        <div className="flex justify-between items-center gap-[40px] font-light">
          <div>Home</div>
          <div>Tour</div>
          <div>Blog</div>
        </div>
        <div>
          <button className="bg-[#008cff] px-8 py-2 text-white rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
