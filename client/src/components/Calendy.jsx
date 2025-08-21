import React from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <div className="w-full flex h-[45rem] justify-center">
      <InlineWidget
        url="https://calendly.com/adi108yadav"
        styles={{ height: "100%", width: "100%" }}
        pageSettings={{
          backgroundColor: "ffffff",   // white background
          primaryColor: "1e293b",      // slate-800
          textColor: "334155",         // slate-700
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        }}
      />
    </div>
  );
}
