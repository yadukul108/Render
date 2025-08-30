import React from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <>
    <h1 className="text-xl md:text-4xl font-medium text-slate-700 mb-4 md:mb-0 text-center">Schedule your First Meeting below</h1>
    <div className="w-full flex h-[30rem] md:h-[45rem] px-4 justify-center">
      
      <InlineWidget
  url="https://calendly.com/adi108yadav"
  styles={{ height: "100%", width: "100%" }}
  pageSettings={{
    backgroundColor: "f1f5f9",   // slate-100
    primaryColor: "1e293b",      // slate-800
    textColor: "1e293b",         // red-700
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
  }}
/>

    </div>
    </>
  );
}
