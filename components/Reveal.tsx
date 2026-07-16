import type { CSSProperties, ReactNode } from "react";

type RevealStyle = CSSProperties & { "--reveal-delay"?: string };

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style: RevealStyle = { "--reveal-delay": `${Math.max(0, delay)}s` };

  return (
    <div className={`reveal ${className}`.trim()} data-reveal style={style}>
      {children}
    </div>
  );
}
