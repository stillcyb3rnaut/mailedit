"use client"

// import AuroraBallScene from "@/components/AuroraBallScene"

export  function Page1() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* <AuroraBallScene /> */}
      </div>

      {/* Centered Overlay Text */}
      <div className="absolute z-10 text-center px-6">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">
          Bored of Regular Emails?
        </h1>
        <p className="text-gray-300 text-lg sm:text-2xl mt-4">
          Impress your clients with <br />
          <span className="text-pink-400 font-semibold">Beautiful AI-Generated Emails</span>
        </p>
      </div>
    </div>
  )
}
