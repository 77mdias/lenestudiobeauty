import Image from "next/image";
import Icon from "../Icon/Icon";

const highights = [
  {
    icon: "verified_user",
    title: "Produtos Certificados",
    description:
      "Fórmulas orgânicas, sem formol e dermatologicamente testadas.",
  },
  {
    icon: "spa",
    title: "Experiência Relaxante",
    description:
      "Ambiente climatizado, café gourmet e atenção individual.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative w-full scroll-mt-20 overflow-hidden bg-surface-container-lowest py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Visual */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl bg-surface-container p-2 shadow-2xl">
                <div className="relative h-[480px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/stitch/penteados.jpeg"
                    alt="Marlene Dias, especialista em beleza"
                    fill
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 flex max-w-xs items-center gap-3 rounded-2xl bg-surface-container-lowest p-4 shadow-xl sm:-left-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon name="psychology" className="text-[24px] text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-[15px] font-bold text-on-surface">
                    Visagismo Aplicado
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Estudos e certificações constantes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full bg-surface-container px-3.5 py-1.5">
              <Icon name="favorite" filled className="text-[18px] text-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                Conheça Marlene Dias
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
              &ldquo;Amo o que faço. Cuidar de você e transformar sua autoestima
              é o nosso maior propósito.&rdquo;
            </h2>

            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              Com mais de uma década e meia dedicada à arte da coiffure, Marlene
              Dias construiu o Lene Studio Beauty como um santuário de bem-estar e
              sofisticação. Sua abordagem une o rigor técnico de produtos
              importados de ponta ao carinho de um atendimento humanizado e
              exclusivo.
            </p>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Aqui, você não é apenas mais um horário em uma agenda lotada. Cada
              mulher recebe um diagnóstico capilar pormenorizado, avaliação da
              saúde dos fios e um protocolo personalizado para garantir que o
              resultado seja deslumbrante e duradouro.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {highights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl bg-surface-container p-4"
                >
                  <Icon
                    name={item.icon}
                    className="mt-0.5 text-[20px] text-primary"
                  />
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      {item.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
