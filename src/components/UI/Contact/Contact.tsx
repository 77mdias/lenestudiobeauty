import Icon from "../Icon/Icon";
import { site, whatsappLink } from "../../../lib/site";

/**
 * Agendamento — feito exclusivamente pelo WhatsApp.
 * O botão abre o chat direto com a Marlene, já com a mensagem pronta.
 */
export default function Contact() {
  return (
    <section
      id="agendamento"
      className="relative w-full scroll-mt-20 bg-surface-container-low py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div data-aos="fade-up" className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="mb-2 font-body-sm text-body-sm font-semibold text-primary">
            Agendamento
          </span>
          <h2 className="mb-3 font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
            Garanta Seu Momento Exclusivo
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            O agendamento é feito somente pelo WhatsApp: sem formulário, sem
            espera e com atendimento direto com a Marlene.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Chamada direta para o WhatsApp */}
          <div className="relative flex flex-col items-start justify-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary shadow-lg shadow-primary/15 sm:p-10 lg:col-span-7" data-aos="fade-up lg:p-12">
            <div className="ambient-glow -right-16 -top-16 h-64 w-64 bg-on-primary/10" />
            <div className="ambient-glow -bottom-20 left-10 h-56 w-56 bg-secondary-fixed/20" />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-on-primary/15">
              <Icon name="chat" className="text-[28px]" />
            </div>

            <div className="relative flex flex-col gap-3">
              <h3 className="font-headline-md text-headline-md text-on-primary">
                Agende direto pelo WhatsApp
              </h3>
              <p className="max-w-md font-body-md text-body-md leading-relaxed text-on-primary/90">
                Toque no botão, conte o que deseja fazer com o seu cabelo e
                escolha o melhor horário. Você fala direto com a Marlene, sem
                intermediários.
              </p>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-3 rounded-full bg-surface-container-lowest px-8 py-4 font-label-lg text-label-lg text-primary shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-surface-container"
            >
              <Icon name="chat" className="text-[20px]" />
              <span>Chamar no WhatsApp</span>
            </a>

            <div className="relative flex flex-col gap-1">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-title-md text-title-md text-on-primary transition-colors hover:text-primary-fixed"
              >
                <Icon name="phone_iphone" className="text-[18px]" />
                {site.phoneDisplay}
              </a>
              <span className="font-body-sm text-body-sm text-on-primary/75">
                Resposta rápida em horário comercial
              </span>
            </div>
          </div>

          {/* Informações do estúdio */}
          <div className="flex flex-col gap-6 rounded-3xl border border-outline-variant/50 bg-surface-container-lowest p-8 lg:col-span-5 lg:p-10" data-aos="fade-up" data-aos-delay="120">
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Informações de Contato
            </h3>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon name="phone_iphone" className="text-[20px] text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  WhatsApp (chat direto)
                </span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="font-title-md text-title-md font-bold text-on-surface transition-colors hover:text-primary"
                >
                  {site.phoneDisplay}
                </a>
                <span className="font-body-sm text-body-sm text-outline">
                  Toque para abrir a conversa
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon name="location_on" className="text-[20px] text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Endereço do Estúdio
                </span>
                <span className="font-body-md text-body-md font-semibold text-on-surface">
                  {site.address.line1}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {site.address.line2}
                </span>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 font-label-sm text-label-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-container"
                >
                  <Icon name="map" className="text-[16px]" />
                  Como chegar
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon name="schedule" className="text-[20px] text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Horários de Funcionamento
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  {site.hours.weekdays}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  {site.hours.saturday}
                </span>
                <span className="font-body-sm text-body-sm font-semibold text-primary">
                  {site.hours.sunday}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
