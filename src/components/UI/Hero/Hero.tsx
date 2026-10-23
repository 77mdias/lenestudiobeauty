"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Icon from "../Icon/Icon";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const trustBadges = [
  { value: 15, decimals: 0, suffix: "+", label: "Anos de Maestria Capilar", tone: "text-primary" },
  { value: 3.5, decimals: 1, suffix: "k+", label: "Cabelos Transformados", tone: "text-primary" },
  { value: 5, decimals: 1, suffix: " ★", label: "Avaliações das Clientes", tone: "text-tertiary" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        // Ambiente: as luzes respiram devagar atrás do conteúdo.
        gsap.to("[data-glow]", {
          x: "random(-40, 40)",
          y: "random(-30, 30)",
          scale: "random(0.9, 1.15)",
          duration: 9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 2,
        });

        // Parallax suave da vitrine ao rolar.
        gsap.to("[data-parallax]", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });

        // Divide as linhas só com a fonte final carregada; desfaz no fim para o texto refluir no resize.
        const intro = contextSafe!(() => {
          // Antes dos .from(): eles gravam o estado atual como destino, e o CSS começa em hidden.
          gsap.set("[data-hero]", { autoAlpha: 1 });
          const self = SplitText.create("#hero-heading", { type: "lines", mask: "lines" });
          const tl = gsap.timeline({
            defaults: { ease: "expo.out" },
            onComplete: () => self.revert(),
          });
          tl.from("[data-hero='eyebrow']", { y: 16, autoAlpha: 0, duration: 0.8 })
            .from(self.lines, { yPercent: 105, duration: 1.2, stagger: 0.09 }, "<0.1")
            .from(
              "[data-hero='frame']",
              { clipPath: "inset(100% 0% 0% 0% round 16px)", duration: 1.4, ease: "expo.inOut" },
              0.15,
            )
            .from("[data-hero='photo']", { scale: 1.3, duration: 1.8, ease: "expo.out" }, "<0.3")
            .from("[data-hero='backplate']", { rotation: -8, x: -20, y: -20, autoAlpha: 0, duration: 1.2 }, "<0.2")
            .from(
              "[data-hero='fade']",
              { y: 24, autoAlpha: 0, duration: 1, stagger: 0.1 },
              "-=1.4",
            )
            .from("[data-hero='seal']", { y: 20, scale: 0.8, autoAlpha: 0, duration: 0.9, ease: "back.out(2)" }, "-=0.8");

          gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
            const target = Number(el.dataset.count);
            const decimals = Number(el.dataset.decimals);
            const counter = { v: 0 };
            tl.to(
              counter,
              {
                v: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = counter.v.toFixed(decimals).replace(".", ",") + el.dataset.suffix;
                },
              },
              "<0.05",
            );
          });
        });
        // Strict Mode monta/desmonta antes das fontes: só roda se este contexto ainda estiver ativo.
        let active = true;
        document.fonts.ready.then(() => active && intro());
        return () => {
          active = false;
        };
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative w-full scroll-mt-20 overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-16 lg:py-24"
    >
      {/* Glows ambiente */}
      <div data-glow className="ambient-glow -top-32 right-10 h-96 w-96 bg-primary/10" />
      <div data-glow className="ambient-glow left-0 top-1/2 h-80 w-80 bg-secondary-fixed/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Texto */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div
              data-hero="eyebrow"
              className="inline-flex max-w-fit items-center gap-2.5 rounded-full border border-outline-variant/60 px-4 py-2"
            >
              <Icon name="verified" filled className="text-[18px] text-primary" />
              <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">
                Haute coiffure &amp; estética avançada
              </span>
            </div>

            <h1
              id="hero-heading"
              data-hero
              className="font-display text-display-mobile leading-[1.05] tracking-tight text-on-surface sm:text-display"
            >
              Sua melhor versão começa aqui. Realce a beleza e o poder dos seus
              cabelos.
            </h1>

            <p
              data-hero="fade"
              className="max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant"
            >
              Especialista em cortes, penteados, progressivas, luzes e mechas —
              cuidado personalizado para realçar a beleza natural dos seus
              cabelos.
            </p>

            <div
              data-hero="fade"
              className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center"
            >
              <a
                href="#agendamento"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-label-lg text-label-lg text-on-primary shadow-lg shadow-primary/15 transition-colors duration-300 hover:bg-primary-container"
              >
                <Icon name="chat" className="text-[20px]" />
                <span>Agendar Horário no WhatsApp</span>
              </a>
              <a
                href="#servicos"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-label-lg text-label-lg text-on-surface ring-1 ring-outline-variant transition-colors duration-200 hover:bg-surface-container"
              >
                <span>Conhecer Nossos Serviços</span>
                <Icon
                  name="arrow_forward"
                  className="text-[18px] transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Trust badges */}
            <div
              data-hero="fade"
              className="grid grid-cols-3 gap-4 border-t border-outline-variant/50 pt-6"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex flex-col">
                  <span
                    data-count={badge.value}
                    data-decimals={badge.decimals}
                    data-suffix={badge.suffix}
                    className={`font-headline-md text-headline-md font-bold tabular-nums ${badge.tone}`}
                  >
                    {badge.value.toFixed(badge.decimals).replace(".", ",")}
                    {badge.suffix}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vitrine visual */}
          <div className="relative flex justify-center pb-6 lg:col-span-5">
            <div data-parallax className="relative w-full max-w-[300px]">
              {/* Camada deslocada atrás da moldura */}
              <div
                data-hero="backplate"
                className="absolute inset-0 translate-x-5 translate-y-5 rotate-2 rounded-2xl bg-secondary-fixed/60"
              />

              {/* Moldura na proporção da foto — penteado inteiro, sem cortes */}
              <div
                data-hero="frame"
                className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-3 shadow-xl shadow-primary/10"
              >
                <div className="relative aspect-[349/758] w-full overflow-hidden rounded-xl">
                  <Image
                    data-hero="photo"
                    src="/images/stitch/penteado-hair-main-home.jpeg"
                    alt="Penteado com ondas em cabelo longo — trabalho da Marlene Dias"
                    fill
                    priority
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Selo de experiência */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <div
                  data-hero="seal"
                  className="flex items-center gap-2.5 rounded-full bg-surface-container-lowest/95 py-2.5 pl-3 pr-5 shadow-lg backdrop-blur"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Icon
                      name="workspace_premium"
                      filled
                      className="text-[18px] text-tertiary"
                    />
                  </span>
                  <span className="whitespace-nowrap font-body-sm text-body-sm font-semibold text-on-surface">
                    +15 anos de excelência
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
