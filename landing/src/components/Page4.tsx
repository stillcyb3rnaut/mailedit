'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export   function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Choose the perfect plan</h2>
      <div className="flex justify-center gap-4 mb-6">
        <Button  onClick={() => setBillingCycle("monthly")} variant={billingCycle === "monthly" ? "default" : "outline"}>Monthly</Button>
        <Button onClick={() => setBillingCycle("yearly")} variant={billingCycle === "yearly" ? "default" : "outline"}>Yearly (2 months free)</Button>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        {/* Basic Plan */}
        <Card className="w-80 p-6 text-center border rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <p className="text-gray-500">For startups</p>
          </CardHeader>
          <CardContent>
            <h3 className="text-4xl font-bold">{billingCycle === "monthly" ? "$83" : "$990"}</h3>
            <p className="text-gray-500">/month ({billingCycle === "yearly" && "$990 yearly"})</p>
            <p className="mt-4">Includes 300 answers per month</p>
            <ul className="text-left mt-4 space-y-2">
              <li>✅ Store 100 pages of knowledge</li>
              <li>✅ Import from website</li>
              <li>✅ Customize common questions</li>
              <li>✅ Basic analytics and themes</li>
              <li>✅ Email support</li>
            </ul>
            <Button className="mt-6 w-full">Get started without trial</Button>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card className="w-80 p-6 text-center border rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <p className="text-gray-500">For businesses scaling their customer service</p>
          </CardHeader>
          <CardContent>
            <h3 className="text-4xl font-bold">{billingCycle === "monthly" ? "$208" : "$2,490"}</h3>
            <p className="text-gray-500">/month ({billingCycle === "yearly" && "$2,490 yearly"})</p>
            <p className="mt-4">Includes 1,500 answers per month</p>
            <ul className="text-left mt-4 space-y-2">
              <li>✅ Everything in Basic, plus:</li>
              <li>✅ Import from PDFs and text</li>
              <li>✅ Fully managed for you</li>
              <li>✅ Advanced analytics and themes</li>
              <li>✅ Priority email support</li>
            </ul>
            <Button className="mt-6 w-full">Get started without trial</Button>
          </CardContent>
        </Card>

        {/* Growth Plan */}
        <Card className="w-80 p-6 text-center border rounded-lg shadow-lg">
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
            <Button className="mt-6 w-full">Schedule a demo</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

