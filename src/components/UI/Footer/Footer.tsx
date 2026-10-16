import Image from "next/image";
import Icon from "../Icon/Icon";
import { site, whatsappLink } from "../../../lib/site";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços Especializados", href: "#servicos" },
  { label: "Galeria de Resultados", href: "#galeria" },
  { label: "Casos Antes e Depois", href: "#antes-e-depois" },
  { label: "Biografia Marlene Dias", href: "#sobre" },
];

const socials = [
  { icon: "photo_camera", href: site.instagram, label: "Instagram" },
  { icon: "public", href: "#", label: "Site" },
  { icon: "mail", href: `mailto:${site.email}`, label: "E-mail" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-low text-on-surface">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={`Logo ${site.name}`}
                width={355}
                height={357}
                className="h-12 w-12 shrink-0 object-contain"
              />
              <span className="font-headline-sm text-headline-sm text-primary">
                {site.name}
              </span>
            </div>
            <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
              Ateliê de alta estética e transformação capilar comandado por
              Marlene Dias. Uma experiência exclusiva dedicada à valorização da
              sua identidade e beleza autêntica.
            </p>
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full bg-surface-container px-3 py-1.5">
              <Icon name="verified" filled className="text-[18px] text-tertiary" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Selo de Excelência Premium
              </span>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <span className="font-title-md text-title-md text-primary">
              Navegação Rápida
            </span>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <Icon name="chevron_right" className="text-[16px] text-outline" />
                  <a
                    href={link.href}
                    className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div className="flex flex-col gap-4">
            <span className="font-title-md text-title-md text-primary">
              Horários &amp; Conexão
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-label-lg text-label-lg text-on-surface">
                Atendimento com Hora Marcada
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {site.hours.weekdays}
                <br />
                {site.hours.saturday}
                <br />
                {site.hours.sunday}
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <span className="font-label-lg text-label-lg text-on-surface">
                Redes Sociais &amp; Contato
              </span>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-all hover:bg-primary-container hover:text-on-primary-container"
                  >
                    <Icon name={social.icon} className="text-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="flex flex-col gap-4">
            <span className="font-title-md text-title-md text-primary">
              Localização
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              <Icon name="map" className="text-[18px] text-primary" />
              <span>Ver rota no Google Maps</span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-fit items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-container"
            >
              <Icon name="chat" className="text-[16px]" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/60 pt-8 sm:flex-row">
          <p className="font-body-sm text-body-sm text-outline">
            © {currentYear} {site.name}. Todos os direitos reservados. Design
            refinado &amp; curadoria exclusiva.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body-sm text-body-sm text-outline transition-colors hover:text-primary"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="font-body-sm text-body-sm text-outline transition-colors hover:text-primary"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
