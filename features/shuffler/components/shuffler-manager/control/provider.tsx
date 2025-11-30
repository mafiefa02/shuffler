"use client";

import { ReactNode, useState } from "react";
import { ShufflerManagerControlContext } from "./context";

export const ShufflerManagerControlProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [value, setValue] = useState("");
  return (
    <ShufflerManagerControlContext.Provider value={{ value, setValue }}>
      {children}
    </ShufflerManagerControlContext.Provider>
  );
};
