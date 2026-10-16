import Icon from "../Icon/Icon";
import { whatsappLink } from "../../../lib/site";

export default function FloatingWhatsApp() {
  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Atendimento VIP via WhatsApp"
        className="flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-on-primary shadow-[0_10px_25px_-4px_rgba(138,72,83,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-primary-container"
      >
        <Icon name="chat" className="text-[22px]" />
        <span className="hidden font-label-lg text-label-lg md:inline">
          Atendimento VIP WhatsApp
        </span>
      </a>
    </aside>
  );
}
