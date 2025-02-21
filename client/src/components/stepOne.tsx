interface StepOneProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formData: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData: (data: any) => void;
    setStep: (step: number) => void;
  }
  
  export default function StepOne({ formData, setFormData, setStep }: StepOneProps) {
    const industries = [
      "E-commerce",
      "Finance",
      "Healthcare",
      "Education",
      "Technology",
      "Real Estate",
      "Hospitality",
    ];
  
    const tools = [
      "Shopify",
      "WordPress",
      "Google Analytics",
      "Slack",
      "Zendesk",
      "Salesforce",
      "HubSpot",
    ];
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Welcome to mailed it!</h2>
        <p className="text-gray-600 mb-6">
          Great to have you here! Let&apos;s set up your Answer HQ assistant in just a few quick steps.
        </p>
  
        {/* Company Name */}
        <div className="mb-4">
          <label className="block font-medium">Name *</label>
          <input
            type="text"
            className="w-full bg-black border border-gray-700   p-2  rounded-md"
            placeholder="Business name"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </div>
  
       
        {/* Industry Dropdown */}
        <div className="mb-4">
          <label className="block font-medium">Industry *</label>
          <select
            className="w-full bg-black  p-2 border border-gray-700 text-gray-400  rounded-md"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          >
            <option value="">Select your industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
  
        {/* Website & Business Tools Dropdown */}
        <div className="mb-4">
          <label className="block  font-medium">Website and Business Tools</label>
          <select
            className="w-full p-2 border rounded-md  bg-black  p-2 border border-gray-700 text-gray-400 "
            value={formData.tools}
            onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
          >
            <option value="">Select a tool</option>
            {tools.map((tool) => (
              <option key={tool} value={tool}>
                {tool}
              </option>
            ))}
          </select>
        </div>
  
        {/* Next Button */}
        <button
          className="px-4 py-2 bg-white text-black  rounded-md mt-4"
          onClick={() => setStep(2)}
          disabled={!formData.companyName  || !formData.industry || !formData.tools}
        >
          Next: Add email
        </button>
      </div>
    );
  }
  