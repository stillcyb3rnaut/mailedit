import { useState } from "react";
import { signIn } from "next-auth/react";  // ✅ Import NextAuth signIn

interface StepTwoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFormData: (data: any) => void;
}

export default function StepTwo({ formData, setFormData }: StepTwoProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [verified, setVerified] = useState(false);

  const handleOAuthLogin = async (provider: "google" | "azure-ad") => {
    try {
      // Store formData in localStorage before redirecting
      localStorage.setItem("formData", JSON.stringify(formData));
  
      await signIn(provider, { callbackUrl: "/onboarding" });  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("OAuth login failed. Try again.");
    }
  };
  

  
  const handleFinishSetup = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          emailType: formData.emailType,
          appPassword: formData.emailType === "business" ? formData.appPassword : undefined,
        }),
      });

      if (!res.ok) throw new Error("Failed to create user");

      alert("User created successfully!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


if( formData.emailVerified && formData.verifiedEmail){
  return (
   
        <div className="mt-4">
          <p className="text-green-500 font-bold">✅ Email Verified: {formData.verifiedEmail}</p>
        
          {/* Submit Button */}
      <button
        className="px-4 py-2 bg-white text-black rounded-md mt-4"
        onClick={handleFinishSetup}
        disabled={loading || !formData.email || (formData.emailType === "business" && !formData.appPassword)}
      >
        {loading ? "Processing..." : "Finish Setup"}
      </button>
        </div>
  
  )
}


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Your Email</h2>
      <p className="text-gray-600 mb-6">Choose how you want to set up email sending.</p>

      {/* Email Type Selection */}
      <div className="mb-4">
        <label className="block font-medium">Select Email Type</label>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md ${
              formData.emailType === "personal" ? "text-blue-500 font-bold" : "text-gray-500"
            }`}
            onClick={() => setFormData({ ...formData, emailType: "personal" })}
          >
            Personal (Gmail )
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              formData.emailType === "business" ? "text-blue-500 font-bold" : "text-gray-500"
            }`}
            onClick={() => setFormData({ ...formData, emailType: "business" })}
          >
            Business (Custom Domain)
          </button>
        </div>
      </div>

      {/* Personal Email (Google & Outlook OAuth) */}
      {formData.emailType === "personal" && (
        <div className="mb-4">
           <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-black border border-gray-600 text-white rounded-md"
              onClick={() => handleOAuthLogin("google")}
            >
              Continue with Google
            </button>
            {/* <button
              className="px-4 py-2 bg-black border border-gray-600 text-white rounded-md"
              onClick={() => handleOAuthLogin("azure-ad")}
            >
              Continue with Outlook
            </button> */}
          </div>
        </div>
      )}

   
      {/* Business Email (SMTP + App Password) */}
      {formData.emailType === "business" && (
        <>
          <div className="mb-4">
            <label className="block font-medium">Business Email *</label>
            <input
              type="email"
              className="w-full bg-black p-2 border border-gray-700 text-gray-400 rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">App Password *</label>
            <input
              type="password"
              className="w-full bg-black p-2 border border-gray-700 text-gray-400 rounded-md"
              value={formData.appPassword}
              onChange={(e) => setFormData({ ...formData, appPassword: e.target.value })}
            />
          </div>
        </>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Submit Button */}
      <button
        className="px-4 py-2 bg-white text-black rounded-md mt-4"
        onClick={handleFinishSetup}
        disabled={loading || !formData.verifiedEmail }
      >
        {loading ? "Processing..." : "Finish Setup"}
      </button>

     </div>
  );
}
