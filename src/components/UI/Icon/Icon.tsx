import type { CSSProperties } from "react";

type IconProps = {
  /** Nome do ícone em Material Symbols Outlined (ex.: "chat", "star"). */
  name: string;
  className?: string;
  /** Renderiza o ícone preenchido (FILL 1) — usado em estrelas, selos e badges. */
  filled?: boolean;
  /** Classe de tamanho do Tailwind (ex.: "text-[18px]"). */
  style?: CSSProperties;
};

/**
 * Ícone do sistema de design (Material Symbols Outlined).
 * Centraliza o uso do icon font para que tamanho/fill sejam consistentes.
 */
export default function Icon({
  name,
  className = "",
  filled = false,
  style,
}: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined select-none ${className}`}
      style={
        filled
          ? {
              fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
              ...style,
            }
          : style
      }
    >
      {name}
    </span>
  );
}
