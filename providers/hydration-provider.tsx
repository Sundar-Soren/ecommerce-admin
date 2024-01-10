"use client";

import React, { useEffect, useState } from "react";
import { Next13ProgressBar } from "next13-progressbar";

const HydrationProvider = ({ children }: { children: React.ReactNode }) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null;
  return (
    <div>
      <Next13ProgressBar
        height="4px"
        color="#0A2FFF"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </div>
  );
};

export default HydrationProvider;
