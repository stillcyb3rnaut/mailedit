import ExampleCard from "@/components/MailCard";

export default function Page2() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-10 space-y-6">
      <h1 className="text-3xl font-bold">Choose an Email Template</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExampleCard
          title="Elegant Welcome Email"
          content="Welcome to our platform! We’re excited to have you onboard. Here’s a quick guide to help you get started..."
        />
        <ExampleCard
          title="Special Offer Email"
          content="Exclusive deal just for you! Get 20% off on your next purchase. Click to claim your discount now!"
        />
        <ExampleCard
          title="Newsletter Update"
          content="Stay updated with our latest features, news, and special offers. Don't miss out on what's coming next!"
        />
      </div>
    </div>
  );
}
