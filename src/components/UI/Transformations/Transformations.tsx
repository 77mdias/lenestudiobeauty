import Icon from "../Icon/Icon";
import BeforeAfter from "./BeforeAfter";

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
        <div data-aos="fade-up" className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <div className="mb-3 inline-flex max-w-fit items-center gap-2 rounded-full bg-surface-container px-3 py-1.5">
            <Icon name="compare" className="text-[16px] text-primary" />
            <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">
              Resultados reais, arraste para comparar
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
          {transformations.map((item, index) => (
            <article
              key={item.caseLabel}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="flex w-full flex-col overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container-lowest sm:max-w-md md:w-[calc(50%-1rem)]"
            >
              <div className="flex items-center justify-between px-5 pb-2 pt-4">
                <span className="font-title-md text-title-md font-bold text-primary">
                  {item.heading}
                </span>
                <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">
                  {item.caseLabel}
                </span>
              </div>

              <div className="p-2">
                <BeforeAfter before={item.before} after={item.after} />
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
