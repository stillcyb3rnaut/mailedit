'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const pathname = usePathname();

    useEffect(() => {
      let title = "Mailed it"; // Default title
  
      if (pathname.includes("onboarding")) title = "Onboarding | Mailed it";
      else if (pathname.includes("mails")) title = "Maiks | Mailed it";
      else title =  "Overview | Mailed it"
      
      document.title = title;
    }, [pathname]);


  return (
    <div>
      welcome to mailed it
    </div>
  );
}
