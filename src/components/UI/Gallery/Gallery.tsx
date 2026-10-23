import Image from "next/image";
import Icon from "../Icon/Icon";
import { site } from "../../../lib/site";

type GalleryPhoto = {
  image: string;
  alt: string;
  caption: string;
  /** Ajuste de enquadramento para recortes mais fechados (ex.: "object-top"). */
  position?: string;
};

/**
 * Galeria com os recortes reais enviados pela equipe do estúdio.
 */
const galleryImages: GalleryPhoto[] = [
  {
    image: "/images/stitch/hero.jpg",
    alt: "Cabelo liso e alinhado",
    caption: "Liso Perfeito",
  },
  {
    image: "/images/stitch/progressiva.jpeg",
    alt: "Progressiva em cabelo longo",
    caption: "Progressiva",
  },
  {
    image: "/images/stitch/penteado-loiro.jpeg",
    alt: "Penteado com ondas em cabelo loiro",
    caption: "Penteado com Ondas",
    position: "object-top",
  },
  {
    image: "/images/stitch/penteados.jpeg",
    alt: "Penteado clássico preso",
    caption: "Penteado Clássico",
  },
  {
    image: "/images/stitch/svc-liso.jpg",
    alt: "Corte bob alinhado e finalizado",
    caption: "Corte & Finalização",
  },
  {
    image: "/images/stitch/progressiva-2.jpeg",
    alt: "Cabelo liso e alinhado após progressiva",
    caption: "Liso Alinhado",
  },
  {
    image: "/images/stitch/svc-luzes.jpg",
    alt: "Luzes acobreadas em cabelo ondulado",
    caption: "Luzes",
  },
  {
    image: "/images/stitch/svc-mechas.jpg",
    alt: "Mechas em cabelo longo",
    caption: "Mechas",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="w-full scroll-mt-20 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div data-aos="fade-up" className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block font-body-sm text-body-sm font-semibold text-primary">
              Galeria de Clientes
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
              Trabalhos Feitos no Estúdio
            </h2>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-surface-container px-5 py-2.5 font-label-lg text-label-lg text-on-surface transition-colors hover:bg-surface-container-high"
          >
            <Icon name="photo_camera" className="text-[18px]" />
            <span>Siga {site.instagramHandle}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((photo, index) => (
            <figure
              key={photo.caption}
              data-aos="zoom-out"
              data-aos-delay={(index % 4) * 80}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={`object-cover ${photo.position ?? ""} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]`}
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                <span className="font-label-sm text-label-sm text-white">
                  {photo.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
