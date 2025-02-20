import { useState } from "react";

interface StepTwoProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function StepTwo({ formData, setFormData }: StepTwoProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-user", {
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
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Your Email</h2>
      <p className="text-gray-600 mb-6">
        Choose how you want to set up email sending.  
      </p>

      {/* Email Type Selection */}
      <div className="mb-4">
        <label className="block font-medium">Select Email Type</label>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md ${
              formData.emailType === "personal" ? " text-blue-500 font-bold " : "text-gray-500"
            }`}
            onClick={() => setFormData({ ...formData, emailType: "personal" })}
          >
            Personal (user@gmail.com / outlook.com)
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              formData.emailType === "business" ? "text-blue-500  font-bold" : "text-gray-500"
            }`}
            onClick={() => setFormData({ ...formData, emailType: "business" })}
          >
            Business (user@yourdomain.com)
          </button>
        </div>
      </div>

      {/* Personal Email (Google & Outlook OAuth) */}
      {formData.emailType === "personal" && (
  <div className="mb-4">
    <label className="block font-medium">Sign in with:</label>
    <div className="flex gap-4">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={() => window.location.href = "/api/auth/google"}
      >
        Continue with Google
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => window.location.href = "/api/auth/outlook"}
      >
        Continue with Outlook
      </button>
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
              className="w-full bg-black  p-2 border border-gray-700 text-gray-400  rounded-md  "
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-4 ">
            <label className="block font-medium">App Password *</label>
            <input
              type="password"
              className="w-full bg-black  p-2 border border-gray-700 text-gray-400  rounded-md"
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
        onClick={handleSubmit}
        disabled={loading || !formData.email || (formData.emailType === "business" && !formData.appPassword)}
      >
        {loading ? "Processing..." : "Finish Setup"}
      </button>
    </div>
  );
}
