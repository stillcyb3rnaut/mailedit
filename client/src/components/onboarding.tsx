"use client";

import { useEffect, useState } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export function Onboarding() {
  const pathname = usePathname();
  const { data: session, status } = useSession();


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    industry: "",
    tools: [],
    email: "",
    emailVerified: false,
    verifiedEmail:"",
    emailType: "personal", // "personal" or "business"
    appPassword: "",
  });


  useEffect(() => {
    let title = "Mailed it"; // Default title

    if (pathname.includes("onboarding")) title = "Onboarding | Mailed it";
    else if (pathname.includes("dashboard")) title = "Maiks | Mailed it";
    else title =  "Overview | Mailed it"

    document.title = title;
  }, [pathname]);


 
useEffect(() => {

  const storedData = localStorage.getItem("formData");
  if (storedData) {
     setStep(2);
    setFormData(JSON.parse(storedData));  // Restore formData
  }else{
    localStorage.setItem("formData", JSON.stringify(formData));
  }
}, []);

useEffect(()=>{
  if(!session || !session.user || !session.user.email) return;

  setFormData({...formData, emailVerified:true, email: session?.user?.email, verifiedEmail: session.user.email})  
} ,[useSession,session, session?.user?.email])



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
