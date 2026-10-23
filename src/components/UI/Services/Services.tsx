import Image from "next/image";
import Icon from "../Icon/Icon";

type Service = {
  icon: string;
  image: string;
  imageAlt: string;
  badge?: { label: string; tone: string };
  tag: string;
  duration: string;
  title: string;
  description: string;
  /** Ajuste de enquadramento para recortes mais fechados (ex.: "object-top"). */
  position?: string;
};

/**
 * Especialidades da Marlene:
 * cortes, penteados, progressivas, luzes e mechas.
 */
const services: Service[] = [
  {
    icon: "content_cut",
    image: "/images/stitch/svc-corte.jpg",
    imageAlt: "Corte curto personalizado feito no estúdio",
    tag: "Visagismo",
    duration: "1h",
    title: "Cortes",
    description:
      "Cortes personalizados que valorizam o formato do seu rosto, o seu estilo e a rotina do dia a dia.",
    position: "object-top",
  },
  {
    icon: "diamond",
    image: "/images/stitch/penteado-loiro.jpeg",
    imageAlt: "Penteado com ondas em cabelo loiro",
    badge: { label: "Noivas & Madrinhas", tone: "text-tertiary" },
    tag: "Eventos",
    duration: "1h - 2h",
    title: "Penteados",
    description:
      "Penteados para noivas, madrinhas, formandas e festas, com acabamento delicado e fixação que dura a noite toda.",
  },
  {
    icon: "spa",
    image: "/images/stitch/progressiva.jpeg",
    imageAlt: "Cabelo liso e alinhado após progressiva",
    tag: "Liso duradouro",
    duration: "2h30 - 3h30",
    title: "Progressivas",
    description:
      "Alinhamento dos fios para reduzir o volume e deixar o cabelo liso, solto e com brilho por muito mais tempo.",
  },
  {
    icon: "wb_sunny",
    image: "/images/stitch/svc-luzes.jpg",
    imageAlt: "Luzes acobreadas em cabelo ondulado",
    tag: "Iluminação dos fios",
    duration: "3h - 4h",
    title: "Luzes",
    description:
      "Clareamento distribuído nos fios para um efeito iluminado e natural, do tom suave ao dourado.",
  },
  {
    icon: "auto_awesome",
    image: "/images/stitch/svc-mechas.jpg",
    imageAlt: "Mechas em cabelo longo",
    badge: { label: "Mais procurado", tone: "text-primary" },
    tag: "Sob medida",
    duration: "3h30 - 4h30",
    title: "Mechas",
    description:
      "Mechas finas ou marcadas, com contraste pensado para iluminar o rosto e dar movimento ao corte.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative w-full scroll-mt-20 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div data-aos="fade-up" className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="mb-2 font-body-sm text-body-sm font-semibold text-primary">
            Serviços
          </span>
          <h2 className="mb-4 font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
            Especialidades da Marlene
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Cortes, penteados, progressivas, luzes e mechas — cada atendimento é
            adaptado ao seu cabelo, sempre respeitando a saúde dos fios.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container-lowest transition-colors duration-300 hover:border-primary/30 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              {/* Foto com título editorial sobreposto */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className={`object-cover ${service.position ?? ""} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                {service.badge && (
                  <span
                    className={`absolute right-4 top-4 rounded-full bg-surface-container-lowest/90 px-3 py-1 font-label-sm text-label-sm backdrop-blur-sm ${service.badge.tone}`}
                  >
                    {service.badge.label}
                  </span>
                )}
                <h3 className="absolute bottom-4 left-5 right-5 font-headline-sm text-headline-sm text-white drop-shadow-sm">
                  {service.title}
                </h3>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-2">
                  <Icon name={service.icon} className="text-[20px] text-primary" />
                  <span className="font-body-sm text-body-sm font-semibold text-tertiary">
                    {service.tag}
                  </span>
                  <span className="ml-auto shrink-0 rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant">
                    {service.duration}
                  </span>
                </div>

                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {service.description}
                </p>

                <a
                  href="#agendamento"
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 py-3 font-label-lg text-label-lg text-primary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary"
                >
                  <span>Quero Agendar</span>
                  <Icon name="arrow_forward" className="text-[16px] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
