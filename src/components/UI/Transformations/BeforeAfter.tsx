"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Icon from "../Icon/Icon";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Photo = { image: string; alt: string; label: string };

/**
 * Comparador antes/depois arrastável. Um <input type="range"> invisível
 * cobre a foto: funciona com mouse, toque e teclado (setas) sem JS extra.
 */
export default function BeforeAfter({ before, after }: { before: Photo; after: Photo }) {
  const root = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  // Ao entrar na tela, o divisor varre a foto uma vez para mostrar que é arrastável.
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const proxy = { v: 50 };
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
            onUpdate: () => setPos(proxy.v),
          })
          .to(proxy, { v: 18, duration: 0.9, ease: "power2.inOut" })
          .to(proxy, { v: 82, duration: 1.1, ease: "power2.inOut" })
          .to(proxy, { v: 50, duration: 0.8, ease: "power3.out" });
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="relative aspect-[2/3] select-none overflow-hidden rounded-xl bg-surface-container"
    >
      <Image
        src={after.image}
        alt={after.alt}
        fill
        sizes="(max-width: 768px) 100vw, 448px"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before.image}
          alt={before.alt}
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-inverse-surface/75 px-2.5 py-1 font-label-sm text-[11px] text-inverse-on-surface backdrop-blur-sm">
        {before.label}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 font-label-sm text-[11px] font-bold text-on-primary">
        {after.label}
      </span>

      {/* Divisor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg">
          <Icon name="unfold_more" className="rotate-90 text-[22px]" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Comparar ${before.label.toLowerCase()} e ${after.label.toLowerCase()}`}
        className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-primary ring-offset-2 opacity-0 peer-focus-visible:opacity-100" />
    </div>
  );
}
