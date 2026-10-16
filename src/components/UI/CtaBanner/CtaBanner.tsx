import Icon from "../Icon/Icon";

export default function CtaBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-primary to-primary-container py-16 text-on-primary">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-12">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-headline-md text-headline-md font-bold">
            Pronta para transformar seu visual?
          </h3>
          <p className="max-w-xl font-body-md text-body-md text-on-primary-container opacity-90">
            Reserve sua data e viva uma experiência relaxante de beleza pensada
            exclusivamente para valorizar sua essência.
          </p>
        </div>
        <a
          href="#agendamento"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-surface-container-lowest px-8 py-4 font-label-lg text-label-lg text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:bg-surface-container"
        >
          <Icon name="calendar_today" className="text-[20px]" />
          <span>Solicitar Consulta VIP</span>
        </a>
      </div>
    </section>
  );
}
