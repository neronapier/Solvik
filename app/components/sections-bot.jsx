'use client';

import React, { useState } from 'react';
import { useApp } from './AppProvider';
import { Btn, Em, Eyebrow, Reveal, SectionHead, isValidEmail } from './ui';
import { I } from './icons';
import { Logo } from './sections-top';

// TODO: reemplazar con el número real de WhatsApp de Solvik (formato internacional, sin signos).
const WHATSAPP_URL = 'https://wa.me/525500000000';

// ─── Testimonials ────────────────────────────────────────────────────────────
export function Testimonials() {
  const items = [
    {
      name: 'Laura Mendoza',
      city: 'Guadalajara, JAL',
      initials: 'LM',
      text: 'Pagaba $2,800 de luz cada mes. Con Solvik hoy pago $480 y la renta del sistema. Recuperé el espacio en mi presupuesto que no sabía que necesitaba.',
      stat: ['83%', 'menos en luz'],
    },
    {
      name: 'Carlos Ramírez',
      city: 'Monterrey, NL',
      initials: 'CR',
      text: 'Instalaron en una tarde, la app me explicó todo en español sencillo. La parte de IA es magia: literal me avisa cuando algo va a fallar.',
      stat: ['1 día', 'instalación'],
    },
    {
      name: 'Doña Rosa Pérez',
      city: 'Mérida, YUC',
      initials: 'RP',
      text: 'Mi tienda de abarrotes ya no sufre los apagones de verano. Vendo más, gasto menos. Mis nietos me ayudan con la app y la verdad es facilita.',
      stat: ['+22%', 'ventas verano'],
    },
  ];
  return (
    <section id="testimonios" className="relative grain" style={{ background: 'color-mix(in oklab, var(--ink) 4%, var(--bg))' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          number="08"
          eyebrow="Voces que ya cambiaron de plan"
          title={<>Familias y negocios que ya <Em>ahorran</Em> con Solvik.</>}
          subtitle="Más de 12,400 instalaciones activas en 9 estados de México y crecientes en Latam."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i + 1}>
              <figure className="bg-[var(--bg)] p-8 h-full border border-[var(--rule)] lift flex flex-col" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-1" style={{ color: 'var(--sun)' }}>
                    {Array.from({ length: 5 }).map((_, j) => <I.star key={j} size={14} stroke="currentColor" />)}
                  </div>
                  <span className="section-num">0{i + 1}</span>
                </div>
                <blockquote className="mt-6 display-md text-[22px] sm:text-[24px] leading-[1.25] text-[var(--ink)] flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="mt-7 pt-5 border-t border-[var(--rule)] flex items-center justify-between gap-4">
                  <figcaption className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-bold tracking-tight" style={{ background: 'var(--brand)', color: 'var(--brand-ink)' }}>{t.initials}</span>
                    <span>
                      <div className="font-semibold tracking-tight text-[var(--ink)] text-[15px]">{t.name}</div>
                      <div className="text-[12px] text-[var(--ink-soft)] inline-flex items-center gap-1"><I.pin size={11} /> {t.city}</div>
                    </span>
                  </figcaption>
                  <div className="text-right">
                    <div className="display-md text-2xl text-[var(--brand)]">{t.stat[0]}</div>
                    <div className="text-[10px] font-mono tracking-[.18em] uppercase text-[var(--ink-soft)]">{t.stat[1]}</div>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div className="mt-16 border-y border-[var(--rule)] grid grid-cols-2 md:grid-cols-4">
            {[
              { v: '12,400+', l: 'Hogares y negocios activos' },
              { v: '8 años',  l: 'En el mercado solar Latam' },
              { v: '$184M',   l: 'En ahorros generados' },
              { v: '98.7%',   l: 'Recomendación de clientes' },
            ].map((s, i) => (
              <div key={i} className={`py-10 px-6 ${i < 3 ? 'md:border-r' : ''} ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} border-[var(--rule)]`}>
                <div className="display-lg text-[44px] sm:text-[52px] text-[var(--ink)]">{s.v}</div>
                <div className="mt-2 text-[13px] text-[var(--ink-soft)] tracking-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export function FAQ() {
  const items = [
    { q: '¿Necesito enganche para empezar?', a: 'No. En el plan de renta mensual empiezas sin enganche y sin compras anticipadas. En el microcrédito hay opciones con $0 de enganche dependiendo de tu perfil; te lo confirmamos en tu cotización.' },
    { q: '¿Qué pasa si me mudo de casa?', a: 'Hay dos rutas: te llevamos el sistema a tu nueva dirección (con un cargo logístico) o transferimos el contrato al siguiente residente. Si ya es tuyo por microcrédito, el equipo te acompaña adonde decidas instalarlo.' },
    { q: '¿Quién se encarga del mantenimiento?', a: 'Nosotros. En el plan de renta está totalmente incluido. La IA detecta cuándo hay que limpiar, ajustar o reemplazar algo y enviamos a un técnico certificado Solvik sin costo extra.' },
    { q: '¿Cómo funciona la venta de energía a la red?', a: 'Si generas más de lo que consumes, esa energía se inyecta a la red de CFE bajo un contrato de Net Metering o Net Billing. La app te muestra cuánto vendes en tiempo real y lo refleja en tu próximo recibo.' },
    { q: '¿Cuánto tarda la instalación?', a: 'Para un sistema residencial promedio, entre 1 y 3 días hábiles tras la visita técnica. Coordinamos contigo permisos, trámites con CFE y el alta del medidor bidireccional.' },
    { q: '¿La app tiene costo?', a: 'No. La app Solvik es gratuita para clientes y futuros clientes. Sin anuncios, sin compras dentro de la app. Funciona en iOS y Android.' },
    { q: '¿Y si dejo de tener servicio o me quedo sin internet?', a: 'El sistema sigue funcionando sin internet — solo se acumulan las lecturas para sincronizar después. Y si CFE corta el servicio, las baterías opcionales mantienen energizado lo esencial.' },
  ];
  return (
    <section id="faq" className="relative bg-[var(--bg)] grain">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHead
          number="09"
          eyebrow="Preguntas frecuentes"
          title={<>Lo que la gente nos <Em>pregunta más</Em>.</>}
          subtitle="¿No encuentras tu duda? Escríbenos por WhatsApp y un asesor humano te responde en minutos."
          align="center"
          maxW="max-w-2xl mx-auto"
        />
        <div className="mt-16 border-t border-[var(--rule)]">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <details className="group border-b border-[var(--rule)]">
                <summary className="flex items-baseline gap-6 sm:gap-10 cursor-pointer py-6 sm:py-7">
                  <span className="section-num w-8 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 display-md text-[20px] sm:text-[24px] text-[var(--ink)] tracking-tight">{it.q}</span>
                  <span className="chev h-9 w-9 rounded-full bg-[var(--rule)]/40 group-hover:bg-[var(--ink)] group-hover:text-[var(--bg)] text-[var(--ink-soft)] flex items-center justify-center transition-all duration-300 flex-shrink-0"><I.chev size={16} /></span>
                </summary>
                <div className="pl-14 sm:pl-[72px] pr-12 pb-6 text-[15px] sm:text-[16px] text-[var(--ink-soft)] leading-[1.65] max-w-[60ch]">{it.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────
export function FinalCTA() {
  const { openQuote } = useApp();
  return (
    <section className="relative bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden p-10 sm:p-16 lg:p-20 on-ink" style={{ background: 'var(--ink)', borderRadius: 'var(--radius-lg)' }}>
            <div className="absolute inset-0 opacity-[.07]" style={{
              backgroundImage: 'linear-gradient(rgba(248,244,230,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(248,244,230,.4) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
            <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full" style={{
              background: 'radial-gradient(closest-side, rgba(214,178,100,.45), transparent 70%)',
            }} />
            <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full" style={{
              background: 'radial-gradient(closest-side, rgba(46,104,80,.45), transparent 70%)',
            }} />

            <div className="relative max-w-3xl">
              <Eyebrow dark>Empieza hoy · sin compromiso</Eyebrow>
              <h2 className="mt-5 display-xl text-[40px] xs:text-[52px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[104px] on-ink">
                Empieza a ahorrar <Em>con energía solar</Em><br/>
                <span style={{ color: 'var(--sun)' }}>hoy.</span>
              </h2>
              <p className="mt-7 text-lg sm:text-xl on-ink-soft max-w-xl leading-[1.5]">
                Sin enganche, sin tecnicismos. Un asesor te contacta en menos de 24 horas con una propuesta clara y a tu medida.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Btn variant="sun" size="xl" onClick={() => openQuote()}>
                  Solicita tu cotización gratis <I.arrow size={18} />
                </Btn>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 h-14 rounded-full bg-[color:color-mix(in_oklab,var(--ink-inverse)_7%,transparent)] hover:bg-[color:color-mix(in_oklab,var(--ink-inverse)_15%,transparent)] backdrop-blur border border-[color:color-mix(in_oklab,var(--ink-inverse)_30%,transparent)] on-ink font-semibold tracking-tight transition">
                  Hablar por WhatsApp
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 on-ink-soft text-[13px] section-num">
                <span style={{ color: 'color-mix(in oklab, var(--ink-inverse) 65%, transparent)' }}>Respuesta · 24h</span>
                <span className="opacity-50">·</span>
                <span style={{ color: 'color-mix(in oklab, var(--ink-inverse) 65%, transparent)' }}>Sin compromiso</span>
                <span className="opacity-50">·</span>
                <span style={{ color: 'color-mix(in oklab, var(--ink-inverse) 65%, transparent)' }}>8 años en Latam</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
export function Footer() {
  const cols = [
    { title: 'Empresa',  items: ['Nosotros', 'Equipo', 'Carreras', 'Prensa', 'Blog'] },
    { title: 'Productos',items: ['Paneles bifaciales', 'Paneles monofaciales', 'Calentadores solares', 'Baterías', 'App móvil'] },
    { title: 'Soporte',  items: ['Centro de ayuda', 'Contacto', 'Estado del servicio', 'Garantías', 'Mantenimiento'] },
    { title: 'Legal',    items: ['Aviso de privacidad', 'Términos y condiciones', 'Política de cookies', 'Certificaciones'] },
  ];
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState(false);

  return (
    <footer className="relative bg-[var(--ink)] on-ink pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="border-b border-[color:color-mix(in_oklab,var(--ink-inverse)_10%,transparent)] pb-12">
          <span className="display-lg text-[48px] xs:text-[64px] sm:text-[96px] md:text-[128px] lg:text-[180px] xl:text-[200px] block leading-[.9] tracking-tightest">
            Sol<Em>vik</Em>.
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mt-14">
          <div className="lg:col-span-4">
            <Logo onInk />
            <p className="mt-5 on-ink-soft leading-relaxed max-w-sm text-[15px]">
              Democratizando el acceso a la energía solar en Latinoamérica. Renta, microcrédito, e inteligencia artificial — todo en una app gratuita.
            </p>

            <div className="mt-8 max-w-sm">
              <div className="section-num" style={{ color: 'color-mix(in oklab, var(--ink-inverse) 55%, transparent)' }}>Newsletter · consejos para ahorrar luz</div>
              <form className="mt-3 flex bg-[color:color-mix(in_oklab,var(--ink-inverse)_6%,transparent)] border border-[color:color-mix(in_oklab,var(--ink-inverse)_15%,transparent)] rounded-full p-1" onSubmit={(e) => { e.preventDefault(); if (isValidEmail(email)) setOk(true); }}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tu@correo.com" className="flex-1 bg-transparent on-ink placeholder:on-ink-mute px-4 outline-none text-sm" />
                <button className="bg-[var(--sun)] hover:opacity-90 text-[var(--ink)] text-sm font-semibold px-4 rounded-full transition-opacity">Suscribirme</button>
              </form>
              {ok && <div className="mt-2 text-xs" style={{ color: 'var(--sun)' }}>¡Listo! Te llegará tu primer correo pronto.</div>}
            </div>

            <div className="mt-8 flex items-center gap-2">
              {[I.insta, I.x, I.fb, I.yt].map((Ic, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-[color:color-mix(in_oklab,var(--ink-inverse)_4%,transparent)] hover:bg-[color:color-mix(in_oklab,var(--ink-inverse)_12%,transparent)] border border-[color:color-mix(in_oklab,var(--ink-inverse)_10%,transparent)] flex items-center justify-center on-ink-strong hover:on-ink transition-colors" aria-label="social">
                  <Ic size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="section-num" style={{ color: 'color-mix(in oklab, var(--ink-inverse) 50%, transparent)' }}>{c.title}</div>
                <ul className="mt-5 space-y-3">
                  {c.items.map((it) => (
                    <li key={it}><a href="#" className="on-ink-strong hover:on-ink text-[15px] tracking-tight transition-colors">{it}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-[color:color-mix(in_oklab,var(--ink-inverse)_10%,transparent)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] on-ink-faint">
          <div>© 2026 Solvik Energy SAPI de CV · Hecho con sol en Ciudad de México</div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono tracking-[.16em] text-[10.5px]">
            <span>CONUEE</span><span>UL · LISTED</span><span>ISO 9001:2015</span><span>CRE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
