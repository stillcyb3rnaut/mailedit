// components/Menu.tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
 import { Twitter, Instagram, Youtube } from "lucide-react";

 
export function Menu() {
  return (

     <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="p-2 rounded hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <HamburgerMenuIcon className="w-6 h-6 text-white" />
        </button>
      </DropdownMenu.Trigger>
    


    
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-black p-2 rounded-lg shadow-lg border border-gray-100 min-w-[200px]">
          <DropdownMenu.Item className="p-2 hover:bg-slate-900 cursor-pointer rounded-md">
            <Link href="/" className="block w-full text-white">
              Home
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-slate-900 cursor-pointer rounded-md">
            <Link href="/blog" className="block w-full  text-white">
              Blog
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-slate-900 cursor-pointer rounded-md">
            <Link href="/login" className="block w-full  text-white">
              Login
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-slate-900 cursor-pointer rounded-md">
            <Link href="/contact" className="block w-full  text-white">
              Contact
            </Link>
          </DropdownMenu.Item>

               {/* Social Media Links */}
        <div className="flex gap-6">
             {/* Footer Icon */}
    
        <Link href="https://twitter.com/aikyamllc" target="_blank">
          <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" />
        </Link>
        <Link href="https://instagram.com/aikyamllc" target="_blank">
          <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 transition-colors" />
        </Link>
        <Link href="https://youtube.com/@aikyamllc" target="_blank">
          <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
        </Link>
      </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>

 
  );
}