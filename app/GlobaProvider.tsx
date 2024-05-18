import React from "react";
import { Toaster } from "react-hot-toast";

export function GlobaProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}

export default GlobaProvider;
