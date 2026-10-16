import Image from "next/image";
import Icon from "../Icon/Icon";

type Transformation = {
  heading: string;
  caseLabel: string;
  before: { image: string; alt: string; label: string };
  after: { image: string; alt: string; label: string };
  title: string;
  description: string;
};

/**
 * Somente pares reais da mesma cliente — nada de comparação entre cabelos diferentes.
 */
const transformations: Transformation[] = [
  {
    heading: "Progressivas",
    caseLabel: "Caso #01",
    before: {
      image: "/images/stitch/before-antes-alinhamento.jpg",
      alt: "Antes da progressiva — cabelo com frizz e volume",
      label: "Antes",
    },
    after: {
      image: "/images/stitch/progressiva-2.jpeg",
      alt: "Depois da progressiva — cabelo liso e alinhado",
      label: "Depois",
    },
    title: "Volume reduzido, liso com movimento",
    description:
      "Fios com frizz e opacidade transformados em um liso natural, solto e com brilho duradouro.",
  },
  {
    heading: "Cortes",
    caseLabel: "Caso #02",
    before: {
      image: "/images/stitch/antes.jpg",
      alt: "Antes do corte — cabelo sem formato",
      label: "Antes",
    },
    after: {
      image: "/images/stitch/depois.jpg",
      alt: "Depois do corte — bob alinhado",
      label: "Depois",
    },
    title: "Corte alinhado e finalizado",
    description:
      "Formato desenhado de acordo com o rosto e o estilo de cada cliente, com finalização que valoriza o movimento natural dos fios.",
  },
];

export default function Transformations() {
  return (
    <section
      id="antes-e-depois"
      className="relative w-full scroll-mt-20 overflow-hidden bg-surface-container-low py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <div className="mb-3 inline-flex max-w-fit items-center gap-2 rounded-full bg-surface-container px-3 py-1.5">
            <Icon name="compare" className="text-[16px] text-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Resultados Reais &amp; Comprovados
            </span>
          </div>
          <h2 className="mb-3 font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
            Antes &amp; Depois no Lene Studio Beauty
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Trabalho com foto real, sem filtros — a transformação de quem já
            passou pela cadeira.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {transformations.map((item) => (
            <article
              key={item.caseLabel}
              className="flex w-full flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl md:w-[calc(50%-1rem)]"
            >
              <div className="flex items-center justify-between bg-surface-container p-4">
                <span className="font-title-md text-title-md font-bold text-primary">
                  {item.heading}
                </span>
                <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">
                  {item.caseLabel}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1 bg-surface-container-low p-2">
                <figure className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={item.before.image}
                    alt={item.before.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 288px"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-inverse-surface/80 px-2.5 py-1 font-label-sm text-[11px] uppercase tracking-wider text-inverse-on-surface backdrop-blur-sm">
                    {item.before.label}
                  </span>
                </figure>

                <figure className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={item.after.image}
                    alt={item.after.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 288px"
                    className="object-cover"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 font-label-sm text-[11px] font-bold uppercase tracking-wider text-on-primary">
                    {item.after.label}
                  </span>
                </figure>
              </div>

              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-headline-sm text-[18px] text-on-surface">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
