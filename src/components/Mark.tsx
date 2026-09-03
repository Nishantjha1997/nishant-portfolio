import { LiquidMark } from "./LiquidMark";

export function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={`mark${small ? " mark-small" : ""}`} aria-hidden="true">
      <LiquidMark />
    </span>
  );
}
