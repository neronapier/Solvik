'use client';

import React, { useEffect, useState } from 'react';
import { useApp } from './AppProvider';
import { Btn, Em, Eyebrow, Reveal, SectionHead } from './ui';
import { I } from './icons';

export function Logo({ light, onInk }) {
  let boxStyle;
  let textClass;
  if (light) {
    boxStyle = { background: 'rgba(255,255,255,.10)', color: '#F8F4E6' };
    textClass = 'text-white';
  } else if (onInk) {
    boxStyle = { background: 'color-mix(in oklab, var(--ink-inverse) 12%, transparent)', color: 'var(--ink-inverse)' };
    textClass = 'on-ink';
  } else {
    boxStyle = { background: 'var(--ink)', color: 'var(--bg)' };
    textClass = 'text-[var(--ink)]';
  }
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="SolarFlex inicio">
      <span className="relative inline-flex h-9 w-9 items-center justify-center" style={{ borderRadius: 'calc(var(--radius) * .5)', ...boxStyle }}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6 7.4 7.4M16.6 16.6l1.8 1.8M5.6 18.4 7.4 16.6M16.6 7.4l1.8-1.8" />
        </svg>
      </span>
      <span className={`text-[19px] tracking-tight ${textClass}`} style={{ fontFamily: 'var(--display-font), serif', letterSpacing: '-0.01em' }}>
        SolarFlex
      </span>
    </a>
  );
}

export function Navbar() {
  const { openQuote, scrollTo, tweaks, setTweak } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isDark = tweaks.mode === 'dark';
  const toggleMode = () => setTweak('mode', isDark ? 'light' : 'dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overDark = !scrolled && tweaks.heroLayout === 'cinematic';

  const links = [
    { id: 'como-funciona', t: 'Cómo funciona' },
    { id: 'productos',     t: 'Productos' },
    { id: 'planes',        t: 'Planes' },
    { id: 'app',           t: 'App' },
    { id: 'faq',           t: 'Preguntas' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${overDark ? 'bg-transparent' : 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--rule)]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <Logo light={overDark} />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className={`h-10 px-4 rounded-full text-[13.5px] font-medium tracking-tight transition-colors ${overDark ? 'on-ink-strong hover:on-ink' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'}`}>
              {l.t}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMode}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
            className={`relative h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${overDark ? 'bg-[color:color-mix(in_oklab,var(--ink-inverse)_10%,transparent)] backdrop-blur border border-white/15 text-white' : 'bg-[var(--rule)]/50 hover:bg-[var(--rule)] text-[var(--ink)] border border-[var(--rule)]'}`}
          >
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{ opacity: isDark ? 1 : 0, transform: `rotate(${isDark ? 0 : -90}deg) scale(${isDark ? 1 : 0.5})` }}>
              <I.sun size={17} />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{ opacity: isDark ? 0 : 1, transform: `rotate(${isDark ? 90 : 0}deg) scale(${isDark ? 0.5 : 1})` }}>
              <I.moon size={17} />
            </span>
          </button>
          <Btn variant={overDark ? 'sun' : 'ink'} size="md" className="hidden sm:inline-flex" onClick={() => openQuote()}>
            Solicita tu cotización
          </Btn>
          <button className={`lg:hidden h-10 w-10 rounded-full flex items-center justify-center transition-colors ${overDark ? 'bg-[color:color-mix(in_oklab,var(--ink-inverse)_10%,transparent)] backdrop-blur' : 'bg-[var(--rule)]/50'}`} onClick={() => setOpen((o) => !o)} aria-label="Menú">
            {open ? <I.close stroke={overDark ? '#fff' : 'var(--ink)'} /> : <I.menu stroke={overDark ? '#fff' : 'var(--ink)'} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-[var(--bg)] border-t border-[var(--rule)] px-5 py-3">
          {links.map((l) => (
            <button key={l.id} onClick={() => { setOpen(false); scrollTo(l.id); }} className="block w-full text-left py-3 text-[var(--ink)] font-medium border-b border-[var(--rule)] last:border-0">
              {l.t}
            </button>
          ))}
          <Btn variant="ink" size="md" className="mt-3 w-full" onClick={() => { setOpen(false); openQuote(); }}>
            Solicita tu cotización
          </Btn>
        </div>
      )}
    </header>
  );
}

function HeroVisual({ aspect = '4 / 5', minimal = false }) {
  return (
    <div className="relative overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', aspectRatio: aspect, background: '#1A1F2A' }}>
      <img
        src="/assets/hero-home.png"
        alt="Casa con paneles solares en hora dorada"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, transparent 50%, rgba(8,18,12,.45) 100%)'
      }} />
      {!minimal && (
        <div className="hidden sm:flex absolute top-3 right-3 sm:top-5 sm:right-5 bg-[var(--ink)] on-ink px-3 py-2 items-center gap-2 shadow-card" style={{ borderRadius: 'calc(var(--radius) * .7)' }}>
          <I.spark size={13} stroke="var(--sun)" />
          <span className="text-[10px] sm:text-[11px] tracking-[.18em] uppercase font-mono">IA <span className="opacity-60">·</span> 24/7</span>
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const { scrollTo, tweaks } = useApp();
  const layout = tweaks.heroLayout || 'cinematic';

  if (layout === 'editorial') {
    return (
      <section id="top" className="relative pt-32 pb-12 bg-[var(--bg)] grain">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center justify-between">
              <Eyebrow>SolarFlex · Edición 04 · 2026</Eyebrow>
              <span className="section-num hidden sm:inline">Renta · Microcrédito · IA</span>
            </div>
          </Reveal>
          <div className="rule mt-4"></div>

          <Reveal delay={1}>
            <h1 className="mt-10 display-xl text-[44px] xs:text-[56px] sm:text-[78px] md:text-[100px] lg:text-[124px]">
              Energía solar<br/>
              <Em>en tu hogar,</Em><br/>
              <span style={{ color: 'var(--brand)' }}>sin pagar todo<br/>de golpe.</span>
            </h1>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <HeroVisual aspect="16 / 10" />
            </div>
            <div className="lg:col-span-5">
              <p className="text-[18px] sm:text-[20px] leading-[1.55] text-[var(--ink-soft)] max-w-md">
                Renta paneles solares o accede a microcréditos flexibles. Ahorra desde el primer mes y gestiona todo desde tu celular con inteligencia artificial.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn variant="ink" size="xl" onClick={() => scrollTo('calculadora')}>Calcula tu ahorro <I.arrow size={16} /></Btn>
                <Btn variant="outlineSoft" size="xl" onClick={() => scrollTo('como-funciona')}>Ver cómo funciona</Btn>
              </div>
              <TrustList compact className="mt-8" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'split') {
    return (
      <section id="top" className="relative bg-[var(--bg)] pt-20 grain">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center lg:min-h-[100vh] py-16 sm:py-20">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>+12,400 hogares · 9 estados</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-5 display-xl text-[40px] xs:text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[88px]">
                Energía solar <Em>en tu hogar</Em>, sin pagar todo de golpe.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.55] text-[var(--ink-soft)] max-w-xl">
                Renta paneles o accede a microcréditos flexibles. Ahorra desde el primer mes y gestiona todo desde tu celular con inteligencia artificial.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Btn variant="ink" size="xl" onClick={() => scrollTo('calculadora')}>Calcula tu ahorro <I.arrow size={16} /></Btn>
                <Btn variant="outlineSoft" size="xl" onClick={() => scrollTo('como-funciona')}>Ver cómo funciona</Btn>
              </div>
            </Reveal>
            <TrustList className="mt-10" />
          </div>
          <div className="lg:col-span-6 relative">
            <HeroVisual aspect="4 / 5" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="top" className="relative min-h-[100vh] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A1F18 0%, #143E30 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 50% at 80% 30%, rgba(214,178,100,.30), transparent 70%), radial-gradient(50% 40% at 10% 90%, rgba(46,104,80,.45), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-16 sm:pt-44 sm:pb-24 min-h-[100vh] flex flex-col">
        <div className="grid lg:grid-cols-12 gap-10 items-center flex-1">
          <div className="lg:col-span-7 text-white">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[.08] backdrop-blur border border-white/[.18] px-4 py-1.5 text-[11px] font-medium tracking-[.18em] uppercase">
                <span className="relative inline-flex h-2 w-2 text-emerald-400 pulse-dot">
                  <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                +12,400 hogares ya ahorran con SolarFlex
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-7 display-xl text-[44px] xs:text-[56px] sm:text-[72px] md:text-[88px] lg:text-[104px] text-white">
                Energía solar <Em>en tu hogar,</Em><br/>
                sin pagar todo <span style={{ color: '#EAD18C' }}>de golpe.</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-7 text-lg sm:text-xl text-white/80 max-w-xl leading-[1.55]">
                Renta paneles solares o accede a microcréditos flexibles. Ahorra desde el primer mes y gestiona todo desde tu celular con inteligencia artificial.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Btn variant="sun" size="xl" onClick={() => scrollTo('calculadora')}>
                  Calcula tu ahorro <I.arrow size={18} />
                </Btn>
                <Btn variant="outlineLight" size="xl" onClick={() => scrollTo('como-funciona')}>
                  Ver cómo funciona
                </Btn>
              </div>
            </Reveal>
            <TrustList dark className="mt-12" />
          </div>

          {tweaks.showHeroStats && (
            <div className="lg:col-span-5 relative hidden lg:block">
              <Reveal delay={2}>
                <HeroVisual aspect="4 / 5" />
              </Reveal>
            </div>
          )}
        </div>

        <Reveal delay={4}>
          <div className="mt-auto pt-12 flex items-center justify-between flex-wrap gap-4 text-white/55">
            <div className="text-[10px] font-mono tracking-[.24em] uppercase">Certificados y reconocidos por</div>
            <div className="flex items-center gap-8 opacity-90">
              {['CONUEE','UL · Listed','ISO 9001','CRE','SOLARCert'].map((n) => (
                <span key={n} className="font-display text-[18px] text-white/75 tracking-tight">{n}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustList({ dark = false, compact = false, className = '' }) {
  const items = ['Sin enganche', 'Mantenimiento incluido', 'App gratuita', 'Instalación profesional'];
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-3 text-[14px] ${dark ? 'text-white/85' : 'text-[var(--ink-soft)]'} ${className}`}>
      {items.map((t) => (
        <li key={t} className="inline-flex items-center gap-2">
          <span className={`inline-flex h-5 w-5 rounded-full items-center justify-center ${dark ? 'bg-white/15' : 'bg-[var(--brand)]'}`} style={!dark ? { color: 'var(--brand-ink)' } : null}>
            <I.check size={11} stroke={dark ? '#fff' : '#F8F4E6'} sw={3} />
          </span>
          <span className="tracking-tight">{t}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Problem → Solution ──────────────────────────────────────────────────────
export function ProblemSolution() {
  const cards = [
    { num: '01', kicker: 'Sostenibilidad', title: 'Energía limpia y renovable', body: 'Reduce tu huella de carbono mientras ahorras. El sol nunca llega con recargo.' },
    { num: '02', kicker: 'Accesibilidad', title: 'Sin pagar el precio completo en contado', body: 'Renta mensual o microcrédito a plazos accesibles, con aprobación rápida.' },
    { num: '03', kicker: 'Control', title: 'Todo desde tu celular', body: 'Monitorea, controla y recibe alertas inteligentes de tu sistema desde la app.' },
  ];
  return (
    <section id="problema" className="relative bg-[var(--bg)] grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          number="01"
          eyebrow="El problema · la solución"
          title={<>La energía solar debería ser <Em>para todos</Em>.</>}
          subtitle="Los paneles solares cuestan mucho de contado, y por eso casi nadie los aprovecha. En SolarFlex eliminamos esa barrera: renta mensual o microcrédito, y empiezas a ahorrar desde el primer mes."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-0 border-y border-[var(--rule)]">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i + 1}>
              <article className={`p-8 sm:p-10 h-full lift ${i < 2 ? 'md:border-r border-[var(--rule)]' : ''}`}>
                <div className="flex items-baseline justify-between">
                  <span className="display-md text-5xl text-[var(--brand)]">{c.num}</span>
                  <span className="section-num">{c.kicker}</span>
                </div>
                <h3 className="mt-10 display-md text-[28px] text-[var(--ink)]">{c.title}</h3>
                <p className="mt-3 text-[15px] text-[var(--ink-soft)] leading-relaxed">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ────────────────────────────────────────────────────────────
export function HowItWorks() {
  const steps = [
    { n: '01', title: 'Cotiza gratis', body: 'Cuéntanos sobre tu consumo y diseñamos un sistema a tu medida. Sin compromiso, en menos de 24h.' },
    { n: '02', title: 'Elige tu plan', body: 'Renta mensual o microcrédito a plazos. Tú decides cómo quieres pagar y nosotros nos adaptamos.' },
    { n: '03', title: 'Instalamos y monitoreamos', body: 'Equipo certificado + IA que cuida tu sistema 24/7. Empiezas a ahorrar el primer mes.' },
  ];
  return (
    <section id="como-funciona" className="relative" style={{ background: 'color-mix(in oklab, var(--ink) 4%, var(--bg))' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          number="02"
          eyebrow="Cómo funciona"
          title={<>De cotización a ahorro <Em>en 3 pasos</Em>.</>}
          subtitle="Sin sorpresas, sin letras chiquitas. Te acompañamos desde el primer click hasta la instalación final."
        />

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-[var(--rule)]" />

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i + 1}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="display-xl text-[88px] sm:text-[120px] text-[var(--brand)]">{s.n}</span>
                    <span className="section-num">Paso</span>
                  </div>
                  <h3 className="mt-2 display-md text-[28px] sm:text-[32px]">{s.title}</h3>
                  <p className="mt-3 text-[16px] text-[var(--ink-soft)] leading-relaxed max-w-sm">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
