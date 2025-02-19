 import { Page1 } from "@/components/Page1";
import Page3 from "@/components/Page3";
import { PricingPage } from "@/components/Page4";
import Page2 from "@/components/ui/Page2";
 
 
export default function Home() {
  return (
    <div className="bg-black text-white">
     
    <Page1/>
    <Page2/>
    <Page3/>
    <PricingPage/>
    </div>
  );
}
