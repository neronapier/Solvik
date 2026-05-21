'use client';

import React, { useMemo, useState } from 'react';
import { useApp } from './AppProvider';
import { Btn, Em, Reveal, SectionHead } from './ui';
import { I } from './icons';

// ─── Products ────────────────────────────────────────────────────────────────
export function Products() {
  const { openQuote } = useApp();
  const items = [
    {
      key: 'bif',
      name: 'Paneles bifaciales',
      sub: 'Monocristalinos · doble cara',
      desc: 'Máxima eficiencia. Generan energía por ambas caras, ideales para techos con buena reflexión.',
      badge: 'Más popular',
      specs: [['Potencia', 'Hasta 540 W'], ['Garantía', '25 años'], ['Eficiencia', '+15% extra']],
      img: '/assets/product-bifacial.png',
    },
    {
      key: 'mono',
      name: 'Paneles monofaciales',
      sub: 'Monocristalinos · clásico',
      desc: 'La opción confiable. Excelente relación costo-beneficio para hogares de cualquier tamaño.',
      badge: 'Mejor valor',
      specs: [['Potencia', 'Hasta 450 W'], ['Garantía', '20 años'], ['Instalación', '1 día']],
      img: '/assets/product-monofacial.png',
    },
    {
      key: 'water',
      name: 'Calentadores solares',
      sub: 'Tubos al vacío · 150–300 L',
      desc: 'Reduce hasta 80% tu gasto en gas. Agua caliente todo el día, sin contaminar.',
      badge: 'Para hogares grandes',
      specs: [['Capacidad', '150–300 L'], ['Ahorro gas', 'Hasta 80%'], ['Sin tanque', 'Eléctrico']],
      img: '/assets/product-calentador.png',
    },
  ];

  return (
    <section id="productos" className="relative bg-[var(--bg)] grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHead
            number="03"
            eyebrow="Productos"
            title={<>Equipo de primera, <Em>instalado por expertos</Em>.</>}
            subtitle="Trabajamos con tecnología certificada y la elegimos contigo según tu techo, consumo y presupuesto."
            maxW="max-w-3xl"
          />
          <Reveal>
            <Btn variant="outlineSoft" size="lg" onClick={() => openQuote()}>Ver catálogo completo <I.arrow size={16} /></Btn>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.key} delay={i + 1}>
              <article className="group bg-[var(--bg)] border border-[var(--rule)] p-6 h-full lift flex flex-col" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div className="relative overflow-hidden" style={{ borderRadius: 'var(--radius)', aspectRatio: '4 / 3' }}>
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #F4EFE3 0%, #EBE3CC 100%)' }}>
                    <img src={it.img} alt={it.name} className="absolute inset-0 w-full h-full object-contain p-6" loading="lazy" />
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-[.22em] uppercase px-2.5 py-1 rounded-full bg-[var(--bg)] text-[var(--ink)] border border-[var(--rule)]">
                    {it.badge}
                  </span>
                </div>
                <div className="mt-6 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between">
                    <span className="section-num">0{i + 1} · Catálogo</span>
                  </div>
                  <h3 className="mt-2 display-md text-[26px] text-[var(--ink)]">{it.name}</h3>
                  <p className="mt-1 text-[13px] text-[var(--ink-soft)] font-mono tracking-tight">{it.sub}</p>
                  <p className="mt-4 text-[15px] text-[var(--ink-soft)] leading-relaxed">{it.desc}</p>

                  <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-[var(--rule)] pt-4">
                    {it.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[9.5px] font-mono uppercase tracking-[.18em] text-[var(--ink-soft)]">{k}</dt>
                        <dd className="mt-1 text-[13px] font-semibold tracking-tight">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex items-center justify-between">
                    <Btn variant="ink" size="md" onClick={() => openQuote()}>Ver detalles <I.arrow size={14} /></Btn>
                    <button onClick={() => openQuote()} className="text-[13px] font-semibold tracking-tight text-[var(--brand)] hover:underline">Cotizar →</button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AI Section ──────────────────────────────────────────────────────────────
export function AISection() {
  const features = [
    { num: '01', title: 'Mantenimiento predictivo', body: 'Detectamos anomalías antes de que se conviertan en fallas. Te avisamos qué pasa y cuándo lo solucionamos.' },
    { num: '02', title: 'Limpieza inteligente', body: 'La IA sabe cuándo los paneles necesitan limpieza por polvo, hojas o residuos para no perder eficiencia.' },
    { num: '03', title: 'Predicción de producción', body: 'Calculamos cuánta energía generarás según el clima de la semana y planeamos tu consumo.' },
    { num: '04', title: 'Optimización de venta a la red', body: 'Maximizamos lo que vendes a la CFE según tu consumo histórico, tarifas y picos de demanda.' },
  ];

  return (
    <section id="ia" className="relative midnight overflow-hidden text-white">
      <div className="absolute inset-0 opacity-[.06]" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,.6) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHead
              number="04"
              eyebrow="Inteligencia artificial integrada"
              title={<>Tu sistema <Em>piensa</Em> <span style={{ color: '#EAD18C' }}>por ti.</span></>}
              subtitle="Cada panel Solvik está conectado a una capa de IA que aprende del clima, tu consumo y el estado del equipo. Tú sólo ves el ahorro."
              dark
            />
            <Reveal delay={3}>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/[.05] border border-white/10 px-4 py-2.5 text-white/80 text-[13px] tracking-tight">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sun)] animate-pulse"></span>
                Solvik AI · entrenada con +18M lecturas / día
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/[.10]" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {features.map((f, i) => (
              <Reveal key={f.num} delay={(i % 4) + 1}>
                <div className="bg-[#0A1F18] p-7 h-full hover:bg-[#102C22] transition-colors">
                  <div className="flex items-baseline justify-between">
                    <span className="display-md text-4xl" style={{ color: '#EAD18C' }}>{f.num}</span>
                    <span className="section-num" style={{ color: 'rgba(255,255,255,.5)' }}>Feature</span>
                  </div>
                  <h3 className="mt-8 display-md text-[24px] text-white">{f.title}</h3>
                  <p className="mt-2 text-white/65 text-[15px] leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── App Mockup ──────────────────────────────────────────────────────────────
export function AppMockup() {
  const features = [
    'Notificaciones inteligentes en tiempo real',
    'Visualiza tus ahorros e ingresos por energía vendida',
    'Monitorea consumo, producción y nivel de baterías',
    'Revisa la salud de tu sistema en cualquier momento',
  ];

  return (
    <section id="app" className="relative grain" style={{ background: 'color-mix(in oklab, var(--ink) 4%, var(--bg))' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 relative order-2 lg:order-1">
          <Reveal>
            <div className="relative mx-auto max-w-[320px]">
              <div className="absolute -inset-12 rounded-full opacity-60" style={{
                background: 'radial-gradient(closest-side, rgba(214,178,100,.30), transparent 70%)',
              }} />
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full opacity-40" style={{
                background: 'radial-gradient(closest-side, rgba(46,104,80,.45), transparent 70%)',
              }} />
              <div className="relative phone-shell">
                <div className="relative overflow-hidden" style={{ aspectRatio: '9 / 19.5', borderRadius: '34px', background: 'var(--bg)' }}>
                  <PhoneScreen />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-ink-900"></div>
                </div>
              </div>

              <Reveal delay={2}>
                <div className="absolute -left-10 -top-4 bg-[var(--bg)] p-3 pr-5 items-center gap-3 hidden md:flex border border-[var(--rule)] shadow-card" style={{ borderRadius: 'var(--radius)' }}>
                  <span className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--brand)', color: 'var(--brand-ink)' }}><I.bell size={18} /></span>
                  <div>
                    <div className="section-num">Alerta</div>
                    <div className="text-sm font-semibold tracking-tight">Sol a las 14:00</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="absolute -right-8 bottom-16 bg-[var(--bg)] p-3 pr-5 items-center gap-3 hidden md:flex border border-[var(--rule)] shadow-card" style={{ borderRadius: 'var(--radius)' }}>
                  <span className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--sun)', color: 'var(--ink)' }}><I.bolt size={18} /></span>
                  <div>
                    <div className="section-num">Vendido hoy</div>
                    <div className="text-sm font-semibold tracking-tight">$84.30 MXN</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <SectionHead
            number="05"
            eyebrow="App móvil · iOS y Android"
            title={<>Tu sistema solar, <Em>en tu bolsillo</Em>.</>}
            subtitle="Gratis para todos nuestros clientes. Sin anuncios, sin compras dentro de la app, sin sorpresas."
          />
          <ul className="mt-10 space-y-px border-y border-[var(--rule)]">
            {features.map((f, i) => (
              <Reveal key={f} delay={(i % 4) + 1}>
                <li className="flex items-baseline gap-5 py-4 border-b border-[var(--rule)] last:border-0">
                  <span className="font-mono text-[11px] tracking-[.2em] text-[var(--ink-soft)] w-8">0{i + 1}</span>
                  <span className="text-[17px] sm:text-[18px] text-[var(--ink)] tracking-tight">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge platform="apple" />
              <StoreBadge platform="google" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhoneScreen() {
  return (
    <div className="absolute inset-0 px-4 pt-10 pb-4" style={{ background: 'linear-gradient(180deg, var(--bg), color-mix(in oklab, var(--brand) 5%, var(--bg)) 60%, var(--bg))' }}>
      <div className="flex items-center justify-between text-[10px] font-bold text-[var(--ink)] px-1 mt-1">
        <span className="font-mono">9:41</span>
        <span className="flex items-center gap-1"><I.battery size={14} /></span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-[11px] text-[var(--ink-soft)]">Hola, María</div>
          <div className="display-md text-[19px] text-[var(--ink)]">Tu sistema hoy</div>
        </div>
        <div className="h-9 w-9 rounded-full" style={{ background: 'linear-gradient(135deg, var(--sun), #EAD18C)' }}></div>
      </div>

      <div className="mt-4 p-4 relative overflow-hidden on-ink" style={{ background: 'var(--ink)', borderRadius: 'calc(var(--radius) * .8)' }}>
        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(214,178,100,.55), transparent 70%)' }}></div>
        <div className="section-num" style={{ color: 'color-mix(in oklab, var(--ink-inverse) 55%, transparent)' }}>Producción hoy</div>
        <div className="mt-1 display-lg text-4xl">18.4 <span className="text-base on-ink-soft font-sans">kWh</span></div>
        <div className="mt-1 text-[11px] font-semibold" style={{ color: 'var(--sun)' }}>+12% vs ayer</div>

        <svg viewBox="0 0 100 30" className="mt-3 w-full h-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#D6B264" stopOpacity=".6" />
              <stop offset="100%" stopColor="#D6B264" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 22 L10 18 L20 20 L30 12 L40 14 L50 8 L60 6 L70 10 L80 4 L90 8 L100 6 L100 30 L0 30 Z" fill="url(#g1)" />
          <path d="M0 22 L10 18 L20 20 L30 12 L40 14 L50 8 L60 6 L70 10 L80 4 L90 8 L100 6" fill="none" stroke="#D6B264" strokeWidth="1.4" />
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="p-3 border border-[var(--rule)]" style={{ borderRadius: 'calc(var(--radius) * .55)', background: 'var(--bg)' }}>
          <div className="section-num">Ahorro mes</div>
          <div className="mt-1 display-md text-lg text-[var(--ink)]">$1,284</div>
          <div className="text-[10px] font-semibold" style={{ color: 'var(--brand)' }}>+8.2%</div>
        </div>
        <div className="p-3 border border-[var(--rule)]" style={{ borderRadius: 'calc(var(--radius) * .55)', background: 'var(--bg)' }}>
          <div className="section-num">Batería</div>
          <div className="mt-1 display-md text-lg text-[var(--ink)]">92%</div>
          <div className="h-1.5 mt-1 rounded-full bg-[var(--rule)] overflow-hidden"><div className="h-full" style={{ width: '92%', background: 'var(--brand)' }}></div></div>
        </div>
      </div>

      <div className="mt-3 p-3 border border-[var(--rule)] flex items-center gap-3" style={{ borderRadius: 'calc(var(--radius) * .55)', background: 'var(--bg)' }}>
        <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--sun)', color: 'var(--ink)' }}><I.bolt size={16} /></div>
        <div className="flex-1">
          <div className="text-[11px] font-semibold text-[var(--ink)] tracking-tight">Venta a CFE — pico hasta 17:30</div>
          <div className="text-[10px] text-[var(--ink-soft)] font-mono">$3.42/kWh · +18% vs promedio</div>
        </div>
      </div>
    </div>
  );
}

function StoreBadge({ platform }) {
  const isApple = platform === 'apple';
  return (
    <a href="#app" className="inline-flex items-center gap-3 bg-[var(--ink)] hover:opacity-90 on-ink px-4 py-2.5 transition-opacity" style={{ borderRadius: 'var(--radius)' }}>
      <span>{isApple ? <I.apple size={26} /> : <I.android size={24} />}</span>
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-[.22em] on-ink-soft">{isApple ? 'Download on the' : 'Get it on'}</span>
        <span className="block text-[15px] font-semibold -mt-0.5 tracking-tight">{isApple ? 'App Store' : 'Google Play'}</span>
      </span>
    </a>
  );
}

// ─── Plans ───────────────────────────────────────────────────────────────────
export function Plans() {
  const { openQuote } = useApp();
  const plans = [
    {
      key: 'renta',
      num: '01',
      tag: 'Renta mensual',
      pitch: 'Empieza sin enganche y deja todo en nuestras manos.',
      price: 'Desde',
      amount: '$899',
      period: '/mes',
      features: ['Pago mensual fijo', 'Mantenimiento incluido', 'Sin enganche', 'Cambia o actualiza tu equipo cuando quieras', 'Cancela cuando ya no la necesites'],
      cta: 'Quiero rentar',
      featured: true,
    },
    {
      key: 'credito',
      num: '02',
      tag: 'Microcrédito',
      pitch: 'El equipo es tuyo desde el día uno, a plazos accesibles.',
      price: 'Desde',
      amount: '$1,240',
      period: '/mes · 36 meses',
      features: ['Plazos flexibles (12, 24, 36, 48 meses)', 'El equipo es tuyo desde el día uno', 'Tasas accesibles a tu medida', 'Aprobación rápida en 48h', 'Mantenimiento opcional con descuento'],
      cta: 'Quiero financiar',
    },
  ];

  return (
    <section id="planes" className="relative bg-[var(--bg)] grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          number="06"
          eyebrow="Planes de pago"
          title={<>Tú <Em>decides</Em> cómo pagar.</>}
          subtitle="Dos rutas hacia la energía solar. Ambas empiezan a ahorrarte dinero desde el primer mes."
          align="center"
          maxW="max-w-2xl mx-auto"
        />

        <div className="mt-20 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <Reveal key={p.key} delay={i + 1}>
              <div className={`relative p-8 sm:p-10 h-full border lift ${p.featured ? 'bg-[var(--ink)] on-ink border-[var(--ink)]' : 'bg-[var(--bg)] text-[var(--ink)] border-[var(--rule)]'}`} style={{ borderRadius: 'var(--radius-lg)' }}>
                {p.featured && (
                  <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[.22em]" style={{ background: 'var(--sun)', color: 'var(--ink)' }}>
                    <I.star size={11} /> Recomendado
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <span className="display-lg text-5xl" style={{ color: p.featured ? 'var(--sun)' : 'var(--brand)' }}>{p.num}</span>
                  <span className="section-num" style={p.featured ? { color: 'color-mix(in oklab, var(--ink-inverse) 55%, transparent)' } : null}>{p.tag}</span>
                </div>
                <h3 className="mt-8 display-md text-[28px]">{p.pitch}</h3>

                <div className="mt-7 flex items-baseline gap-2">
                  <span className="section-num" style={p.featured ? { color: 'color-mix(in oklab, var(--ink-inverse) 55%, transparent)' } : null}>{p.price}</span>
                  <span className="display-lg text-[44px] sm:text-[56px]">{p.amount}</span>
                  <span className={`text-sm font-semibold tracking-tight ${p.featured ? 'on-ink-soft' : 'text-[var(--ink-soft)]'}`}>{p.period}</span>
                </div>

                <ul className="mt-8 space-y-px">
                  {p.features.map((f, j) => (
                    <li key={f} className={`flex items-baseline gap-4 py-3 ${j < p.features.length - 1 ? 'border-b' : ''}`} style={{ borderColor: p.featured ? 'color-mix(in oklab, var(--ink-inverse) 12%, transparent)' : 'var(--rule)' }}>
                      <span className="mt-0 inline-flex h-5 w-5 rounded-full items-center justify-center flex-shrink-0" style={{ background: p.featured ? 'var(--sun)' : 'var(--brand)', color: p.featured ? 'var(--sun-ink)' : 'var(--brand-ink)' }}>
                        <I.check size={11} sw={3} />
                      </span>
                      <span className={`text-[15px] tracking-tight ${p.featured ? 'on-ink-strong' : 'text-[var(--ink)]'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Btn variant={p.featured ? 'sun' : 'brand'} size="lg" className="mt-8 w-full" onClick={() => openQuote({ plan: p.key })}>
                  {p.cta} <I.arrow size={16} />
                </Btn>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Calculator ──────────────────────────────────────────────────────────────
export function Calculator() {
  const { openQuote, tweaks } = useApp();
  const [bill, setBill] = useState(2200);
  const savingsRate = 0.78;
  const monthlyPlan = useMemo(() => Math.max(450, Math.round(bill * 0.55 / 50) * 50), [bill]);
  const monthlySavings = useMemo(() => Math.max(0, Math.round(bill * savingsRate)), [bill]);
  const annualSavings = monthlySavings * 12;
  const co2 = useMemo(() => Math.round(bill * 0.42), [bill]);
  const percent = useMemo(() => ((bill - 600) / (8000 - 600)) * 100, [bill]);

  if (tweaks.showCalculator === false) return null;

  return (
    <section id="calculadora" className="relative bg-[var(--bg)] grain">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead
          number="07"
          eyebrow="Calculadora de ahorro"
          title={<>Mira cuánto podrías <Em>ahorrar</Em>.</>}
          subtitle="Mueve el deslizador con tu pago mensual de luz. Es una estimación; en tu cotización afinamos los números a tu techo y consumo real."
          maxW="max-w-3xl"
        />
        <Reveal delay={2}>
          <div className="mt-20 border border-[var(--rule)] p-7 sm:p-12 grid lg:grid-cols-12 gap-12 items-center bg-[var(--bg)]" style={{ borderRadius: 'var(--radius-lg)' }}>
            <div className="lg:col-span-6">
              <div className="section-num">Tu pago actual</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="display-lg text-[48px] xs:text-[56px] sm:text-[64px] md:text-[72px] text-[var(--ink)]">${bill.toLocaleString('es-MX')}</span>
                <span className="text-[var(--ink-soft)] font-medium">MXN / mes</span>
              </div>

              <input
                type="range"
                min="600" max="8000" step="50"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="brand-range mt-7 w-full"
                style={{ '--p': `${percent}%` }}
              />
              <div className="mt-2 flex justify-between text-[10.5px] font-mono text-[var(--ink-soft)] tracking-[.18em]">
                <span>$600</span><span>$2,000</span><span>$4,000</span><span>$6,000</span><span>$8,000</span>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[1200, 2200, 3500, 5500].map((q) => (
                  <button key={q} onClick={() => setBill(q)} className={`h-11 rounded-full border text-[13px] font-semibold tracking-tight transition-colors ${bill === q ? 'border-[var(--brand)] bg-[var(--brand)] on-ink' : 'border-[var(--rule)] text-[var(--ink)] hover:border-[var(--ink)]'}`}>
                    ${q.toLocaleString('es-MX')}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 relative overflow-hidden on-ink" style={{ background: 'var(--ink)', borderRadius: 'var(--radius-lg)' }}>
                <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(214,178,100,.45), transparent 70%)' }} />
                <div className="section-num on-ink-faint">Podrías ahorrar hasta</div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="display-lg text-[56px] xs:text-[64px] sm:text-[72px] md:text-[88px]" style={{ color: 'var(--sun)' }}>${monthlySavings.toLocaleString('es-MX')}</span>
                  <span className="on-ink-soft font-semibold">/ mes</span>
                </div>
                <div className="mt-1 text-sm on-ink-soft">≈ ${annualSavings.toLocaleString('es-MX')} MXN al año</div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="p-4" style={{ borderRadius: 'var(--radius)', border: '1px solid color-mix(in oklab, var(--ink-inverse) 12%, transparent)' }}>
                    <div className="section-num on-ink-faint">Plan estimado</div>
                    <div className="mt-1 display-md text-2xl">${monthlyPlan.toLocaleString('es-MX')}<span className="text-sm font-sans font-semibold on-ink-soft">/mes</span></div>
                  </div>
                  <div className="p-4" style={{ borderRadius: 'var(--radius)', border: '1px solid color-mix(in oklab, var(--ink-inverse) 12%, transparent)' }}>
                    <div className="section-num on-ink-faint">CO₂ evitado</div>
                    <div className="mt-1 display-md text-2xl">{co2}<span className="text-sm font-sans font-semibold on-ink-soft"> kg/año</span></div>
                  </div>
                </div>

                <Btn variant="sun" size="lg" className="mt-7 w-full" onClick={() => openQuote({ recibo: String(bill) })}>
                  Solicita tu cotización personalizada <I.arrow size={16} />
                </Btn>
                <p className="mt-3 text-[10.5px] on-ink-faint font-mono tracking-tight">* Estimación con promedios de irradiación solar en México. Sujeta a evaluación técnica.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
