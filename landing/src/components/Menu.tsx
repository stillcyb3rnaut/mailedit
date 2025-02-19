// components/Menu.tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { TwitterLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link"; // Import Link from Next.js

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

          {/* Social icons inside the dropdown */}
          <div className="flex space-x-4 p-2 border-t border-slate-900 mt-2">
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:opacity-75 transition-opacity"
            >
              <TwitterLogoIcon className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:opacity-75 transition-opacity"
            >
              <InstagramLogoIcon className="w-6 h-6 text-white" />
            </Link>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>

 
  );
}