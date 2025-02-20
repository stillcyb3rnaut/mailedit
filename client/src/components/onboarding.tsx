"use client";

import { useState } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

export function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    industry: "",
    tools: [],
    email: "",
    emailType: "personal", // "personal" or "business"
    appPassword: "",
  });

  return (
    <div className="max-w-3xl mx-auto p-9 rounded-lg shadow-md">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-6">
  <button
    className={`px-4 py-2 rounded-md ${
      step >= 1 ? "bg-blue-500 text-white" : "text-gray-500"
    }`}
    onClick={() => setStep(1)}
  >
    Your Company
  </button>

  {/* Gray Line */}
  <div className="flex-grow mx-4 border-t border-gray-600"></div>

  <button
    className={`px-4 py-2 rounded-md ${
      step === 2 ? "bg-blue-500 text-white" : "text-gray-500"
    }`}
    onClick={() => setStep(2)}
    disabled={!formData.companyName  || !formData.industry || !formData.tools}
  >
    Add Your Email
  </button>
</div>


      {/* Render Steps */}
      {step === 1 && <StepOne formData={formData} setFormData={setFormData} setStep={setStep} />}
      {step === 2 && <StepTwo formData={formData} setFormData={setFormData} />}
    </div>
  );
}
