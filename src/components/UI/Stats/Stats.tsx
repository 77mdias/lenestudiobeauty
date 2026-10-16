import Icon from "../Icon/Icon";

const pillars = [
  {
    icon: "auto_awesome",
    iconWrap: "bg-primary/10",
    iconTone: "text-primary",
    title: "+3.500 Cabelos",
    description: "Transformações com saúde capilar",
  },
  {
    icon: "diamond",
    iconWrap: "bg-tertiary-fixed/30",
    iconTone: "text-tertiary",
    title: "100% Premium",
    description: "Cosméticos nobres & bioativos",
  },
  {
    icon: "schedule",
    iconWrap: "bg-secondary-fixed/50",
    iconTone: "text-secondary",
    title: "Atendimento VIP",
    description: "Privacidade & pontualidade total",
  },
  {
    icon: "face_retouching_natural",
    iconWrap: "bg-surface-container",
    iconTone: "text-primary",
    title: "Visagismo Real",
    description: "Harmonia com seu estilo e tom",
  },
];

export default function Stats() {
  return (
    <section className="relative w-full bg-surface-container-lowest py-10 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${pillar.iconWrap}`}
              >
                <Icon name={pillar.icon} className={`text-[24px] ${pillar.iconTone}`} />
              </div>
              <div>
                <span className="block font-title-md text-title-md font-bold text-on-surface">
                  {pillar.title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {pillar.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
