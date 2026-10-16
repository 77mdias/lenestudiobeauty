import Image from "next/image";
import Icon from "../Icon/Icon";

const trustBadges = [
  { value: "15+", label: "Anos de Maestria Capilar", tone: "text-primary" },
  { value: "3.5k+", label: "Cabelos Transformados", tone: "text-primary" },
  { value: "5.0 ★", label: "Avaliações das Clientes", tone: "text-tertiary" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative w-full scroll-mt-20 overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-16 lg:py-24"
    >
      {/* Glows ambiente */}
      <div className="ambient-glow -top-32 right-10 h-96 w-96 bg-primary/10" />
      <div className="ambient-glow left-0 top-1/2 h-80 w-80 bg-secondary-fixed/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Texto */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="inline-flex max-w-fit items-center gap-2.5 rounded-full bg-surface-container px-4 py-2 shadow-sm">
              <Icon name="verified" filled className="text-[18px] text-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                Haute Coiffure &amp; Estética Avançada
              </span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-display-mobile leading-none tracking-tight text-on-surface sm:text-display"
            >
              Sua melhor versão começa aqui. Realce a beleza e o poder dos seus
              cabelos.
            </h1>

            <p className="max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              Especialista em cortes, penteados, progressivas, luzes e mechas —
              cuidado personalizado para realçar a beleza natural dos seus
              cabelos.
            </p>

            <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href="#agendamento"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-label-lg text-label-lg text-on-primary shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:bg-primary-container"
              >
                <Icon name="chat" className="text-[20px]" />
                <span>Agendar Horário no WhatsApp</span>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-surface-container px-7 py-4 font-label-lg text-label-lg text-on-surface transition-all duration-200 hover:bg-surface-container-high"
              >
                <span>Conhecer Nossos Serviços</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex flex-col">
                  <span
                    className={`font-headline-md text-headline-md font-bold ${badge.tone}`}
                  >
                    {badge.value}
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
            <div className="relative w-full max-w-[300px]">
              {/* Camada deslocada atrás da moldura */}
              <div className="absolute inset-0 translate-x-5 translate-y-5 rotate-2 rounded-2xl bg-secondary-fixed/60" />

              {/* Moldura na proporção da foto — penteado inteiro, sem cortes */}
              <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-3 shadow-2xl">
                <div className="relative aspect-[349/758] w-full overflow-hidden rounded-xl">
                  <Image
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
              <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-surface-container-lowest/95 py-2.5 pl-3 pr-5 shadow-xl backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Icon
                    name="workspace_premium"
                    filled
                    className="text-[18px] text-tertiary"
                  />
                </span>
                <span className="whitespace-nowrap font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                  +15 anos de excelência
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
