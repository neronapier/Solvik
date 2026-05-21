'use client';

import React, { useEffect, useState } from 'react';
import { useApp } from './AppProvider';
import { Btn, Eyebrow, Field } from './ui';
import { I } from './icons';

export function QuoteModal() {
  const { quoteOpen, closeQuote, prefill } = useApp();
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', ciudad: '', recibo: '', plan: 'renta' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (quoteOpen && prefill) setForm((f) => ({ ...f, ...prefill }));
    if (!quoteOpen) { setSent(false); setErrors({}); }
  }, [quoteOpen, prefill]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeQuote(); };
    if (quoteOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [quoteOpen, closeQuote]);

  if (!quoteOpen) return null;

  const validate = () => {
    const e = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 2) e.nombre = 'Ingresa tu nombre completo.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ingresa un correo válido.';
    if (!/^[\d\s\-+()]{8,}$/.test(form.telefono)) e.telefono = 'Ingresa un teléfono válido.';
    if (!form.ciudad.trim()) e.ciudad = 'Ingresa tu ciudad.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop" onClick={closeQuote}>
      <div className="relative w-full max-w-xl bg-[var(--bg)] shadow-2xl pop-in overflow-hidden border border-[var(--rule)]" style={{ borderRadius: 'var(--radius-lg)' }} onClick={(e) => e.stopPropagation()}>
        <button onClick={closeQuote} className="absolute top-4 right-4 h-9 w-9 rounded-full bg-[var(--rule)]/40 hover:bg-[var(--rule)] flex items-center justify-center" aria-label="Cerrar">
          <I.close size={18} />
        </button>

        {sent ? (
          <div className="p-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center" style={{ background: 'var(--brand)', color: '#F8F4E6' }}>
              <I.check size={32} />
            </div>
            <h3 className="mt-6 display-md text-3xl">¡Listo, {form.nombre.split(' ')[0]}!</h3>
            <p className="mt-2 text-[var(--ink-soft)]">Un asesor te contactará en menos de 24 horas con una propuesta personalizada para tu hogar.</p>
            <div className="mt-6 border border-[var(--rule)] p-4 text-left text-sm" style={{ borderRadius: 'var(--radius)' }}>
              <div className="section-num">RESUMEN</div>
              <div className="mt-2 text-[var(--ink)]">Recibo actual: <b>${Number(form.recibo).toLocaleString('es-MX')} MXN</b> · Plan: <b>{form.plan === 'renta' ? 'Renta mensual' : 'Microcrédito'}</b></div>
            </div>
            <Btn variant="brand" size="lg" className="mt-6" onClick={closeQuote}>Cerrar</Btn>
          </div>
        ) : (
          <form onSubmit={submit} className="p-8 sm:p-10" noValidate>
            <Eyebrow>Cotización gratuita</Eyebrow>
            <h3 className="mt-3 display-md text-3xl sm:text-4xl">Calcula tu sistema solar a tu medida</h3>
            <p className="mt-3 text-[var(--ink-soft)] text-[15px]">Sin compromiso. Te contactamos en menos de 24h.</p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Nombre completo" error={errors.nombre}>
                <input value={form.nombre} onChange={upd('nombre')} placeholder="María González" className="form-input" />
              </Field>
              <Field label="Correo" error={errors.email}>
                <input type="email" value={form.email} onChange={upd('email')} placeholder="maria@correo.com" className="form-input" />
              </Field>
              <Field label="Teléfono (WhatsApp)" error={errors.telefono}>
                <input value={form.telefono} onChange={upd('telefono')} placeholder="55 1234 5678" className="form-input" />
              </Field>
              <Field label="Ciudad" error={errors.ciudad}>
                <input value={form.ciudad} onChange={upd('ciudad')} placeholder="Guadalajara, JAL" className="form-input" />
              </Field>
              <div className="sm:col-span-2">
                <div className="text-sm font-semibold text-[var(--ink)] mb-2">Plan de interés</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { v: 'renta', t: 'Renta mensual' },
                    { v: 'credito', t: 'Microcrédito' },
                  ].map((o) => (
                    <button type="button" key={o.v} onClick={() => setForm((f) => ({ ...f, plan: o.v }))}
                      className={`h-11 rounded-full border text-sm font-semibold transition-colors ${form.plan === o.v ? 'border-[var(--brand)] bg-[var(--brand)]/10 text-[var(--brand-deep)]' : 'border-[var(--rule)] text-[var(--ink)] hover:border-[var(--ink)]'}`}>
                      {o.t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Btn type="submit" variant="brand" size="lg" className="mt-8 w-full">
              Solicitar cotización gratuita <I.arrow size={18} />
            </Btn>
            <p className="mt-3 text-xs text-[var(--ink-soft)]/70 text-center">
              Al enviar aceptas nuestra política de privacidad. No spam, sólo tu propuesta.
            </p>
          </form>
        )}

        <style>{`
          .form-input { width:100%; height:44px; border-radius:12px; border:1px solid var(--rule); padding:0 14px; font-size:15px; outline:none; transition:border-color .15s, box-shadow .15s; background:var(--bg); color:var(--ink); }
          .form-input:focus { border-color:var(--brand); box-shadow:0 0 0 3px rgba(46,104,80,.18); }
        `}</style>
      </div>
    </div>
  );
}
