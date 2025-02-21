import Image from "next/image";
import Link from "next/link";
import { AICard } from "./Aicard";
import { Twitter, Instagram, Youtube } from "lucide-react";


export function Footer() {
  return (
    <div className="bg-black text-white flex flex-col items-center px-4 py-20 gap-6 md:gap-9">


      {/* Separator Line */}
      <div className="w-4/5 border-t border-gray-600 my-4"> </div>

      {/* Title & Logo */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-4">
        <h1 className="text-xl md:text-3xl font-bold leading-tight">
          Reach out to more opportunities with
        </h1>
        <Link href="https://mailedit.aikyam.live/" passHref>
          <Image
            className="cursor-pointer w-36 md:w-48"
            src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1740121616/brand_page/mdwqcql9unooglphrxqo.png"
            height={150}
            width={200}
            alt="Mailed It Logo"
          />
        </Link>
      </div>

      {/* AI Card Section */}
      <AICard height="200px" />

     

        {/* Social Media Links */}
        <div className="flex gap-6">
             {/* Footer Icon */}
      <Link href="https://mailedit.aikyam.live/" passHref >
      <Image src="/favicon.ico" height={30} width={30} alt="mailedit" />
      </Link>
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


      {/* Footer Text */}

      <div className="flex flex-wrap gap-3 items-center text-sm text-gray-400 justify-center text-center">
        <p>mailedit</p>
        <Link
          className="hover:text-cyan-400 transition-colors"
          href="https://ai-kyam.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          an Aikyam product
        </Link>
        <p>© 2025. Built with ❤️ in Kolkata, IN 🇮🇳</p>
      </div>

      {/* Creator Credit */}
      <p className="text-sm text-gray-400 text-center">
        by{" "}
        <Link
          className="hover:text-red-500 transition-colors"
          href="https://youtube.com/@s0umy3ndu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soumyendu Das
        </Link>
      </p>
    </div>
  );
}
