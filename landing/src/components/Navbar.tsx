// components/Navbar.tsx
import Image from "next/image";
import { Menu } from "./Menu";
import Link from "next/link";
  
export function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-around items-center shadow-sm">
      {/* "mailed it." text */}
      <Link href="https://mailedit.aikyam.live/" passHref>
        <Image
          className="cursor-pointer"
          src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1740121616/brand_page/mdwqcql9unooglphrxqo.png"
          height={150}
          width={200}
          alt="Mailed It Logo"
        />
      </Link>      {/* <div className="font-bold text-white lowercase text-lg">mailed it.</div> */}

      {/* Menu component */}
      <Menu />
 
      
    </nav>
  );
}