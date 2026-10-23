"use client";

import { useState } from "react";
import Icon from "../Icon/Icon";
import { whatsappLink } from "../../../lib/site";

const services = ["Corte", "Penteado", "Progressiva", "Luzes", "Mechas", "Outro"];

const reasons = [
  "Leva menos de 1 minuto para enviar",
  "Ajuda outras clientes a se sentirem confiantes",
  "Sua mensagem chega direto com a Marlene no WhatsApp",
];

const inputClass =
  "w-full rounded-xl bg-surface-container px-4 py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline/70 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40";

/**
 * Seção de depoimentos.
 *
 * Como o site ainda não tem depoimentos publicados, esta seção convida a
 * cliente a enviar o dela. O envio é feito pelo WhatsApp — não há banco de
 * dados: funciona em qualquer hospedagem estática e a mensagem chega
 * prontinha para a Marlene aprovar.
 */
export default function Feedback() {
  const [form, setForm] = useState({ name: "", service: "", text: "" });
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);

  const update = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const stars = "⭐".repeat(rating);
    const message = [
      "Olá! Quero deixar um depoimento no site do Lene Studio Beauty.",
      "",
      `*Nome:* ${form.name}`,
      `*Serviço realizado:* ${form.service}`,
      `*Nota:* ${stars} (${rating}/5)`,
      "",
      `*Depoimento:* ${form.text}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="depoimentos"
      className="relative w-full scroll-mt-20 bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div data-aos="fade-up" className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="mb-2 font-body-sm text-body-sm font-semibold text-primary">
            Depoimentos
          </span>
          <h2 className="mb-3 font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
            Sua Experiência Vale Muito
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Este espaço está sendo construído com as histórias reais de nossas
            clientes — e ele começa com você.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Convite */}
          <div className="flex flex-col gap-6 rounded-3xl border border-outline-variant/50 bg-surface-container-lowest p-8 lg:col-span-5" data-aos="fade-up">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Icon name="reviews" className="text-[24px] text-primary" />
            </div>

            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Ainda não há depoimentos por aqui
            </h3>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Se você já passou pela cadeira, seja a primeira a compartilhar
              como foi o seu atendimento. Seu depoimento é enviado pelo WhatsApp
              e publicado após a aprovação da Marlene.
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <Icon
                    name="check_circle"
                    filled
                    className="mt-0.5 text-[20px] text-primary"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário */}
          <div className="rounded-3xl border border-outline-variant/50 bg-surface-container-lowest p-8 lg:col-span-7 lg:p-10" data-aos="fade-up" data-aos-delay="120">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="testimonial-name"
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                  >
                    Seu Nome
                  </label>
                  <input
                    id="testimonial-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Como você quer ser chamada"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="testimonial-service"
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                  >
                    Serviço Realizado
                  </label>
                  <select
                    id="testimonial-service"
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Selecione o serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Sua Nota
                </span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      aria-label={`Dar ${star} estrela${star > 1 ? "s" : ""}`}
                      aria-pressed={star <= rating}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => setRating(star)}
                      className="rounded-full p-1 transition-transform duration-150 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    >
                      <Icon
                        name="star"
                        filled={star <= (hovered || rating)}
                        className={`text-[28px] ${
                          star <= (hovered || rating)
                            ? "text-tertiary"
                            : "text-outline/40"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 font-body-sm text-body-sm text-on-surface-variant">
                    {rating} de 5
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="testimonial-text"
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                >
                  Seu Depoimento
                </label>
                <textarea
                  id="testimonial-text"
                  required
                  rows={4}
                  value={form.text}
                  onChange={(e) => update("text", e.target.value)}
                  placeholder="Conte como foi seu atendimento e como você se sentiu com o resultado"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-primary py-4 font-label-lg text-label-lg text-on-primary shadow-lg shadow-primary/15 transition-colors duration-300 hover:bg-primary-container"
              >
                <Icon name="send" className="text-[20px]" />
                <span>Enviar Depoimento pelo WhatsApp</span>
              </button>

              <p className="text-center font-body-sm text-body-sm text-outline">
                Você será redirecionada para o WhatsApp com o depoimento pronto
                para enviar.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
