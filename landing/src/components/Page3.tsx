import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion";
  import Image from "next/image";
  
  export default function Page3() {
    return (
      <div className="container mx-auto p-8 ">
        <h2 className="text-2xl font-bold text-center mb-6">
          Reduce customer questions by 80%. Increase sales by 30%.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="https://images.pexels.com/photos/240566/pexels-photo-240566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Customer Support"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>01. One minute setup, instant AI support</AccordionTrigger>
                <AccordionContent>
                 
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>02. Your AI grows smarter every day</AccordionTrigger>
                <AccordionContent>
                  
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>03. Clear pricing, powerful results</AccordionTrigger>
                <AccordionContent>
                  
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }