"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "../Icon/Icon";
import { navLinks, site } from "../../../lib/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-surface/85 backdrop-blur-xl transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_1px_8px_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${site.name} — ir para o início`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt={`Logo ${site.name}`}
            width={355}
            height={357}
            className="h-12 w-12 shrink-0 object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
              {site.name}
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
              {site.tagline}
            </span>
          </div>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-5 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant transition-colors duration-200 hover:text-primary"
            >
              {link.short}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#agendamento"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary shadow-sm transition-all duration-200 hover:bg-primary-container sm:inline-flex"
          >
            <Icon name="chat" className="text-[18px]" />
            <span>Agendar via WhatsApp</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high xl:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="text-[22px]" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegação principal mobile"
          className="border-t border-outline-variant/60 bg-surface/98 px-6 pb-6 pt-2 backdrop-blur-xl xl:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-outline-variant/40 py-3 font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
