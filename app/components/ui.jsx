'use client';

import React, { useEffect, useRef, useId } from 'react';
import { useApp } from './AppProvider';

// ─── Shared validators ───────────────────────────────────────────────────────
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── Reveal-on-scroll ────────────────────────────────────────────────────────
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal();
  const d = delay ? ` reveal-delay-${delay}` : '';
  return <Tag ref={ref} className={`reveal${d} ${className}`} {...rest}>{children}</Tag>;
}

// ─── Buttons ─────────────────────────────────────────────────────────────────
export function Btn({ variant = 'brand', size = 'md', as: Tag = 'button', children, className = '', ...rest }) {
  const sizes = {
    sm: 'h-9  px-4 text-[13px]',
    md: 'h-11 px-5 text-[14px]',
    lg: 'h-12 px-6 text-[15px]',
    xl: 'h-14 px-8 text-[15px]',
  };
  const variants = {
    brand:        'btn-brand shadow-soft hover:shadow-glow',
    ink:          'btn-fill shadow-soft',
    sun:          'btn-sun shadow-soft',
    light:        'bg-[var(--bg)] hover:bg-bone-100 text-[var(--ink)] shadow-soft border border-[var(--rule)]',
    outline:      'bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]',
    outlineSoft:  'bg-transparent text-[var(--ink)] border border-[var(--rule)] hover:border-[var(--ink)]',
    outlineLight: 'bg-transparent text-white border border-white/40 hover:bg-white/10',
    ghost:        'bg-transparent text-[var(--ink)] hover:bg-[var(--rule)]',
  };
  const radius = 'rounded-full';
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 ${radius} font-semibold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40 focus:ring-offset-2 focus:ring-offset-[var(--bg)] ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ─── Editorial section header ────────────────────────────────────────────────
export function SectionHead({ number, eyebrow, title, subtitle, dark = false, align = 'left', maxW = 'max-w-3xl' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} ${maxW}`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          {number && (
            <span className={`section-num ${dark ? 'text-white/60' : ''}`} style={dark ? { color: 'rgba(255,255,255,.6)' } : null}>
              {number}
            </span>
          )}
          {number && <span className={`h-px w-10 ${dark ? 'bg-white/30' : 'bg-[var(--rule)]'}`}></span>}
          {eyebrow && <span className="section-num" style={dark ? { color: 'rgba(255,255,255,.6)' } : null}>{eyebrow}</span>}
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className={`mt-6 display-lg text-[36px] xs:text-[42px] sm:text-[52px] md:text-[64px] lg:text-[72px] ${dark ? 'text-white' : 'text-[var(--ink)]'}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className={`mt-5 sm:mt-6 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.55] ${dark ? 'text-white/72' : 'text-[var(--ink-soft)]'} max-w-[58ch] ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

// ─── Eyebrow (small caps mono label) ────────────────────────────────────────
export function Eyebrow({ children, dark = false, className = '' }) {
  return (
    <span className={`section-num ${className}`} style={dark ? { color: 'rgba(255,255,255,.65)' } : null}>
      {children}
    </span>
  );
}

// ─── Italic accent (auto on/off via tweaks) ─────────────────────────────────
export function Em({ children }) {
  const { tweaks } = useApp();
  return tweaks.italicAccents
    ? <span className="font-display italic" style={{ fontWeight: 400 }}>{children}</span>
    : <>{children}</>;
}

// ─── Form field ──────────────────────────────────────────────────────────────
export function Field({ label, error, children, full }) {
  const errId = useId();
  const child = React.isValidElement(children) && error
    ? React.cloneElement(children, { 'aria-invalid': true, 'aria-describedby': errId })
    : children;
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="block text-sm font-semibold text-[var(--ink)] mb-1.5">{label}</span>
      {child}
      {error && <span id={errId} role="alert" className="block mt-1 text-xs text-red-600 font-medium">{error}</span>}
    </label>
  );
}
