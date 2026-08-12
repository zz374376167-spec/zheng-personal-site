import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  environment?: "home" | "about" | "journey" | "gallery" | "interests" | "contact";
}

export function PageContainer({ children, environment = "home" }: PageContainerProps) {
  return <main className={`page-shell metal-environment metal-environment--${environment}`}>{children}</main>;
}
