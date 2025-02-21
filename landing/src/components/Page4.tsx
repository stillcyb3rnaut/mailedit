"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Choose the perfect plan</h2>
      
      {/* Billing Cycle Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <Button
          onClick={() => setBillingCycle("monthly")}
          className={`px-6 py-2 ${billingCycle === "monthly" ? "bg-white text-black" : "bg-black text-white"}`}
        >
          Monthly
        </Button>
        <Button
          onClick={() => setBillingCycle("yearly")}
          className={`px-6 py-2 ${billingCycle === "yearly" ? "bg-white text-black" : "bg-black text-white"}`}
        >
          Yearly (2 months free)
        </Button>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        
        {/* Basic Plan */}
        <Card className="w-80 p-6 text-center  bg-black text-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <p className="text-gray-500">For startups</p>
          </CardHeader>
          <CardContent>
            <h3 className="text-4xl font-bold">{billingCycle === "monthly" ? "$9" : "$8"}</h3>
            <p className="text-gray-500">/month {billingCycle === "yearly" && "($99 yearly)"}</p>
            <p className="mt-4">Includes 300 answers per month</p>
            <ul className="text-left mt-4 space-y-2">
              <li>✅ Store 100 pages of knowledge</li>
              <li>✅ Import from website</li>
              <li>✅ Customize common questions</li>
              <li>✅ Basic analytics and themes</li>
              <li>✅ Email support</li>
            </ul>
            <Button className="mt-6 bg-white text-black w-full">Get started without trial</Button>
          </CardContent>
        </Card>

        {/* Pro Plan (Bigger & Animated) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Card className="w-96 p-8 text-center border border-yellow-500 rounded-lg shadow-xl">
            <CardHeader>
              <CardTitle className="text-yellow-500">Pro</CardTitle>
              <p className="text-gray-500">For businesses scaling their customer service</p>
            </CardHeader>
            <CardContent>
              <h3 className="text-5xl font-bold">{billingCycle === "monthly" ? "$49" : "$45"}</h3>
              <p className="text-gray-500">/month {billingCycle === "yearly" && "($500 yearly)"}</p>
              <p className="mt-4">Includes 1,500 answers per month</p>
              <ul className="text-left mt-4 space-y-2">
                <li>✅ Everything in Basic, plus:</li>
                <li>✅ Import from PDFs and text</li>
                <li>✅ Fully managed for you</li>
                <li>✅ Advanced analytics and themes</li>
                <li>✅ Priority email support</li>
              </ul>
              <Button className="mt-6 w-full bg-yellow-500 text-black">Get started without trial</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Growth Plan */}
        <Card className="w-80 p-6 text-center bg-black text-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle>Growth</CardTitle>
            <p className="text-gray-500">For large organizations needing full control</p>
          </CardHeader>
          <CardContent>
            <h3 className="text-4xl font-bold">Contact us</h3>
            <p className="mt-4">Custom AI answers per month</p>
            <ul className="text-left mt-4 space-y-2">
              <li>✅ Everything in Pro, plus:</li>
              <li>✅ Connect multiple websites</li>
              <li>✅ Bespoke features and integrations</li>
              <li>✅ Custom branding and themes</li>
              <li>✅ Dedicated Slack group</li>
            </ul>
            <Button className="mt-6 bg-white text-black w-full">Schedule a demo</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
