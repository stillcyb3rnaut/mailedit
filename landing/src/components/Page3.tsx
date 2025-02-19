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
                  Get started in minutes with our intuitive self-service platform. Just
                  connect your website and upload your docs - our AI instantly builds
                  your secure Knowledge Vault. Want personalized guidance? Schedule a
                  free 15-minute call with me (Jacky, the founder) and I&apos;ll help optimize
                  your setup. No tech expertise needed - everything is designed to get
                  you up and running quickly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>02. Your AI grows smarter every day</AccordionTrigger>
                <AccordionContent>
                  Make Answer HQ truly yours - from matching your website&apos;s design to
                  speaking in your brand&apos;s tone. Customize Quick Questions that your
                  customers ask, and discover new ones through our analytics dashboard.
                  As customers interact with your AI assistant, you&apos;ll see exactly what
                  they&apos;re asking, helping you continuously improve your knowledge base.
                  Your assistant gets smarter every day, ensuring customers always get
                  accurate answers in your unique voice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>03. Clear pricing, powerful results</AccordionTrigger>
                <AccordionContent>
                  Simple, usage-based pricing: pay for the responses you need. Basic
                  includes 300 responses/month (~10/day), Pro includes 1,500
                  responses/month (~50/day). All plans include unlimited knowledge
                  storage and analytics. No hidden fees or complexity - just scalable
                  customer service that grows with you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }