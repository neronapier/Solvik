#!/usr/bin/env python3
"""Genera Solvik_PitchDeck.pptx — 12 diapositivas siguiendo The Pitch Canvas."""
import re
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn

# ── Brand palette ─────────────────────────────────────────────────────────────
MID   = RGBColor(0x0A,0x1F,0x18)   # midnight
BG    = RGBColor(0xFA,0xF7,0xEE)   # bone
BONE  = RGBColor(0xF4,0xEE,0xDE)
INK   = RGBColor(0x0E,0x15,0x12)
INKS  = RGBColor(0x5F,0x5C,0x53)   # ink-soft
BRAND = RGBColor(0x2E,0x68,0x50)
BRDP  = RGBColor(0x14,0x3E,0x30)
BR200 = RGBColor(0xB0,0xCC,0xBE)
SUN   = RGBColor(0xD6,0xB2,0x64)
SUN3  = RGBColor(0xEA,0xD1,0x8C)
SUNDP = RGBColor(0xB6,0x8A,0x3C)
RULE  = RGBColor(0xE4,0xDC,0xCB)
WHITE = RGBColor(0xFF,0xFF,0xFF)
CARDK = RGBColor(0x0E,0x2A,0x20)   # dark card
PAPER = RGBColor(0xF2,0xEC,0xDD)   # light text on dark

DISP = "Georgia"        # editorial serif (fallback for Instrument Serif)
SANS = "Calibri"        # body
MONO = "Consolas"       # mono labels

prs = Presentation()
prs.slide_width  = Inches(13.333)
prs.slide_height = Inches(7.5)
BLANK = prs.slide_layouts[6]
W = prs.slide_width

def slide(bg):
    s = prs.slides.add_slide(BLANK)
    s.background.fill.solid()
    s.background.fill.fore_color.rgb = bg
    return s

def _set_radius(shape, frac):
    try:
        shape.adjustments[0] = frac
    except Exception:
        pass

def box(s, x, y, w, h, fill=None, line=None, line_w=1.0, radius=None, shadow=False):
    shp_type = MSO_SHAPE.ROUNDED_RECTANGLE if radius else MSO_SHAPE.RECTANGLE
    shp = s.shapes.add_shape(shp_type, Inches(x), Inches(y), Inches(w), Inches(h))
    if radius is not None:
        _set_radius(shp, radius)
    if fill is None:
        shp.fill.background()
    else:
        shp.fill.solid(); shp.fill.fore_color.rgb = fill
    if line is None:
        shp.line.fill.background()
    else:
        shp.line.color.rgb = line; shp.line.width = Pt(line_w)
    shp.shadow.inherit = False
    return shp

def txt(s, x, y, w, h, runs, size=18, font=SANS, color=INK, bold=False,
        italic=False, align=PP_ALIGN.LEFT, spacing=1.0, anchor=MSO_ANCHOR.TOP,
        space_after=0, letter=None):
    """runs: str OR list of (text, dict-overrides)."""
    tb = s.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    for m in ('margin_left','margin_right','margin_top','margin_bottom'):
        setattr(tf, m, 0)
    if isinstance(runs, str):
        runs = [[(runs, {})]]
    p = tf.paragraphs[0]
    first = True
    for para in runs:
        if first:
            first = False
        else:
            p = tf.add_paragraph()
        p.alignment = align
        p.line_spacing = spacing
        if space_after:
            p.space_after = Pt(space_after)
        if isinstance(para, str):
            para = [(para, {})]
        para = [(it, {}) if isinstance(it, str) else it for it in para]
        for text, ov in para:
            r = p.add_run(); r.text = text
            f = r.font
            f.size = Pt(ov.get('size', size))
            f.name = ov.get('font', font)
            f.bold = ov.get('bold', bold)
            f.italic = ov.get('italic', italic)
            f.color.rgb = ov.get('color', color)
            ls = ov.get('letter', letter)
            if ls is not None:
                r.font._rPr.set('spc', str(int(ls)))
    return tb

def _emph(text, base=INKS):
    """Split on [bracketed] tokens, rendering them italic gold; rest in base color."""
    runs = []
    for p in re.split(r'(\[[^\]]*\])', text):
        if not p:
            continue
        if p.startswith('[') and p.endswith(']'):
            runs.append((p, {'italic': True, 'color': SUNDP}))
        else:
            runs.append((p, {'color': base}))
    return [runs]

def chrome(s, n, label, dark=False):
    wm = PAPER if dark else INK
    txt(s, 0.62, 0.42, 4, 0.4, [[("◎ ", {'color': SUN if dark else BRAND, 'size':18}),
                                  ("Solvik", {'font':DISP, 'size':19, 'color':wm})]])
    txt(s, 8.7, 0.46, 4.0, 0.4, f"{n}  ·  {label}", size=10.5, font=MONO,
        color=(PAPER if dark else INKS), align=PP_ALIGN.RIGHT, letter=180)

def tag(s, x, y, text, dark=False):
    txt(s, x, y, 9, 0.35, text.upper(), size=11, font=MONO,
        color=(SUN3 if dark else BRAND), letter=200)

def card(s, x, y, w, h, dark=False):
    return box(s, x, y, w, h, fill=(CARDK if dark else WHITE),
               line=(None if dark else RULE), line_w=1.0, radius=0.07)

# ════════════════════════════════════════════════════════════════════════════
# 1 · PORTADA
s = slide(MID)
chrome(s, "", "PITCH DECK · 2026", dark=True)
box(s, -1, -1, 6, 5).fill.background()
tag(s, 0.62, 2.0, "Emprendimiento de impacto · Energía limpia accesible", dark=True)
txt(s, 0.6, 2.45, 11.5, 2.2,
    [[("Energía solar ", {}), ("en tu hogar,", {'italic':True,'color':SUN3})],
     [("sin pagar todo de golpe.", {})]],
    size=50, font=DISP, color=PAPER, spacing=0.98)
txt(s, 0.62, 5.15, 8.2, 1.2,
    [[("Democratizamos el acceso a la energía solar en México con ", {'color':RGBColor(0xCF,0xC8,0xB8)}),
      ("renta, microcrédito e inteligencia artificial.", {'color':PAPER,'bold':True}),
      (" Ahorra desde el primer mes.", {'color':RGBColor(0xCF,0xC8,0xB8)})]],
    size=16, spacing=1.3)
txt(s, 0.62, 6.85, 11, 0.4,
    [[("Equipo ", {'color':RGBColor(0x9A,0x96,0x8D)}),("[Equipo X]",{'italic':True,'color':SUNDP}),
      ("  ·  Construye · Tecnológico de Monterrey", {'color':RGBColor(0x9A,0x96,0x8D)})]],
    size=10.5, font=MONO, letter=120)

# ════════════════════════════════════════════════════════════════════════════
# 2 · QUIÉN / PROPÓSITO
s = slide(BG)
chrome(s, "01", "QUIÉN")
tag(s, 0.62, 1.35, "Quién vive la problemática")
txt(s, 0.62, 1.95, 6.7, 2.6,
    [[('"Pagaba ', {}), ("$2,800 de luz", {'italic':True,'color':SUNDP}),
      (' cada mes y en verano la tienda se quedaba sin energía con los apagones. El sol me sobra... pero los paneles costaban una fortuna."', {})]],
    size=22, font=DISP, color=INK, spacing=1.12)
txt(s, 0.62, 4.7, 6.6, 1.8,
    [[("— Doña Rosa, dueña de una tienda de abarrotes. Como ella, ", {'color':INKS}),
      ("millones de familias y micronegocios", {'color':INK,'bold':True}),
      (" en México viven con recibos de luz que no paran de subir.", {'color':INKS})]],
    size=15, spacing=1.3)
card(s, 7.7, 1.55, 5.0, 4.6); box(s, 7.7, 1.55, 5.0, 4.6, fill=BONE, radius=0.06)
txt(s, 8.1, 1.95, 4.3, 0.4, "NUESTRO PROPÓSITO", size=10.5, font=MONO, color=INKS, letter=160)
txt(s, 8.1, 2.5, 4.3, 1.5, [[("El sol no debería llegar ", {}),("con recargo.",{'italic':True,'color':SUNDP})]],
    size=27, font=DISP, color=INK, spacing=1.0)
txt(s, 8.1, 4.0, 4.3, 1.2, [[("Existimos para que cualquier hogar mexicano pueda ahorrar con energía limpia, ", {'color':INKS}),
    ("sin pagar una fortuna por adelantado.", {'color':INK,'bold':True})]], size=14, spacing=1.25)
box(s, 8.1, 5.35, 4.2, 0.02, fill=RULE)
txt(s, 8.1, 5.5, 4.3, 0.7, [["VALORES"],["Accesibilidad · Transparencia · Sostenibilidad"]],
    size=10.5, font=MONO, color=INKS, letter=120, spacing=1.4)

# ════════════════════════════════════════════════════════════════════════════
# 3 · PROBLEMA
s = slide(BG)
chrome(s, "02", "QUÉ PROBLEMA")
tag(s, 0.62, 1.3, "El problema · contexto y evidencias")
txt(s, 0.62, 1.85, 11.5, 1.4, [[("La energía solar ya es rentable. ", {'color':INK}),
    ("Pero sigue fuera del alcance de la mayoría.", {'italic':True,'color':INKS})]],
    size=33, font=DISP, spacing=1.0)
probs = [
 ("$80–150k","La barrera es el enganche","Un sistema residencial cuesta entre $80,000 y $150,000 MXN de contado [verificar]. La mayoría no puede pagarlo de golpe."),
 ("↑ cada año","Tarifas de CFE al alza","Las tarifas suben año con año y la tarifa DAC castiga a quien más consume. El recibo asfixia a familias y micronegocios."),
 ("< 1%","Penetración mínima","Menos del 1% de los hogares en México tiene paneles [verificar fuente], pese a ser uno de los países con más irradiación solar del mundo."),
]
cx = 0.62
for k,h,b in probs:
    card(s, cx, 3.4, 3.9, 3.1)
    txt(s, cx+0.35, 3.7, 3.3, 0.7, k, size=30, font=DISP, color=BRAND)
    txt(s, cx+0.35, 4.45, 3.3, 0.7, h, size=17, font=DISP, color=INK, spacing=1.0)
    # bracket placeholder rendered inside body as italic where present
    parts = []
    seg = b
    for tokencolor in []:  # simple: emphasize [ ] tokens
        pass
    txt(s, cx+0.35, 5.15, 3.35, 1.25, _emph(b), size=12.5, color=INKS, spacing=1.2)
    cx += 4.13

# ════════════════════════════════════════════════════════════════════════════
# 4 · SOLUCIÓN
s = slide(MID)
chrome(s, "03", "CÓMO LO SOLUCIONO", dark=True)
tag(s, 0.62, 1.3, "La solución", dark=True)
txt(s, 0.62, 1.85, 11.5, 1.4, [[("Quitamos la barrera de entrada. ", {'color':PAPER}),
    ("Tú solo ves el ahorro.", {'italic':True,'color':SUN3})]], size=33, font=DISP, spacing=1.0)
sol = [
 ("01","Renta mensual","Sin enganche y con mantenimiento incluido. Pago fijo, cancela cuando quieras. Ahorras desde el primer mes."),
 ("02","Microcrédito","El equipo es tuyo desde el día uno, a plazos accesibles de 12 a 48 meses con aprobación rápida."),
 ("03","IA que lo cuida 24/7","Mantenimiento predictivo, limpieza inteligente y optimización de la venta de excedentes a CFE."),
]
cx = 0.62
for k,h,b in sol:
    card(s, cx, 3.4, 3.9, 3.0, dark=True)
    txt(s, cx+0.35, 3.7, 3.3, 0.7, k, size=30, font=DISP, color=SUN3)
    txt(s, cx+0.35, 4.45, 3.3, 0.6, h, size=18, font=DISP, color=PAPER)
    txt(s, cx+0.35, 5.15, 3.35, 1.2, b, size=12.5, color=RGBColor(0xC4,0xCB,0xC4), spacing=1.2)
    cx += 4.13

# ════════════════════════════════════════════════════════════════════════════
# 5 · DIFERENCIADOR
s = slide(BG)
chrome(s, "04", "DIFERENCIADOR")
tag(s, 0.62, 1.5, "¿Qué nos hace únicos?")
txt(s, 0.62, 2.05, 6.0, 2.0, [[("No vendemos paneles. ", {}),("Vendemos ahorro sin fricción.",{'italic':True,'color':SUNDP})]],
    size=32, font=DISP, color=INK, spacing=1.02)
txt(s, 0.62, 4.3, 5.9, 1.6, [[("La competencia te pide pagar todo de contado o un crédito rígido. Solvik combina ", {'color':INKS}),
    ("acceso flexible + IA + acompañamiento", {'color':INK,'bold':True}),(" en un solo producto.", {'color':INKS})]],
    size=15, spacing=1.3)
feats = [
 ("Sin enganche","entras desde $0 con el plan de renta."),
 ("Mantenimiento incluido","técnicos certificados sin costo extra."),
 ("IA predictiva","detecta fallas antes de que pasen."),
 ("Optimiza tu venta a CFE","más ingresos por tus excedentes."),
 ("App gratuita","sin anuncios ni compras ocultas."),
]
y = 1.65
for h,b in feats:
    box(s, 7.5, y+0.13, 0.12, 0.12, fill=BRAND, radius=0.5)
    txt(s, 7.8, y, 4.9, 0.6, [[(h+" — ",{'bold':True,'color':INK}),(b,{'color':INKS})]], size=14.5, spacing=1.1)
    box(s, 7.8, y+0.62, 4.85, 0.012, fill=RULE)
    y += 0.86

# ════════════════════════════════════════════════════════════════════════════
# 6 · PROTOTIPO
s = slide(BG)
chrome(s, "05", "CÓMO SE VE")
tag(s, 0.62, 1.5, "Prototipo")
txt(s, 0.62, 2.05, 6.0, 1.7, [[("Ya es real: ",{}),("sitio y simulador funcionando.",{'italic':True,'color':SUNDP})]],
    size=32, font=DISP, color=INK, spacing=1.02)
txt(s, 0.62, 3.85, 5.9, 1.8, [[("Construimos un producto digital funcional: una landing con ",{'color':INKS}),
    ("calculadora de ahorro",{'color':INK,'bold':True}),(" en tiempo real y el diseño de la ",{'color':INKS}),
    ("app móvil",{'color':INK,'bold':True}),(" (iOS y Android) para monitorear producción, ahorros y la venta a la red.",{'color':INKS})]],
    size=15, spacing=1.3)
_chips = ["Landing + calculadora", "App móvil", "Monitoreo con IA"]
cxp = 0.62
for t in _chips:
    bw = 0.105*len(t) + 0.45
    box(s, cxp, 5.7, bw, 0.5, fill=None, line=RULE, radius=0.5)
    txt(s, cxp, 5.82, bw, 0.4, t, size=11, color=INK, bold=True, align=PP_ALIGN.CENTER)
    cxp += bw + 0.14
# app mock card
mx, my = 7.7, 1.55
box(s, mx, my, 5.0, 4.7, fill=BONE, radius=0.05)
box(s, mx, my, 5.0, 1.7, fill=INK, radius=0.05)
txt(s, mx+0.4, my+0.3, 4.2, 0.3, "APP SOLVIK · DEMO", size=10, font=MONO, color=RGBColor(0x9A,0x96,0x8D), letter=140)
txt(s, mx+0.4, my+0.65, 4.2, 0.9, [[("18.4 ",{'color':SUN3,'size':40,'font':DISP}),("kWh hoy",{'color':RGBColor(0xC4,0xCB,0xC4),'size':15})]] )
txt(s, mx+0.4, my+1.35, 4, 0.3, "+12% vs ayer", size=11, color=SUN3)
box(s, mx+0.35, my+2.05, 2.05, 1.25, fill=WHITE, line=RULE, radius=0.1)
txt(s, mx+0.55, my+2.2, 1.8, 0.3, "AHORRO MES", size=9.5, font=MONO, color=INKS, letter=120)
txt(s, mx+0.55, my+2.55, 1.8, 0.6, "$1,284", size=26, font=DISP, color=INK)
box(s, mx+2.55, my+2.05, 2.05, 1.25, fill=WHITE, line=RULE, radius=0.1)
txt(s, mx+2.75, my+2.2, 1.8, 0.3, "CO₂ EVITADO", size=9.5, font=MONO, color=INKS, letter=120)
txt(s, mx+2.75, my+2.55, 1.8, 0.6, [[("924 ",{'font':DISP,'size':26,'color':INK}),("kg/año",{'size':12,'color':INK})]])

# ════════════════════════════════════════════════════════════════════════════
# 7 · VALIDACIÓN
s = slide(BG)
chrome(s, "06", "VALIDACIÓN")
tag(s, 0.62, 1.3, "¿Qué pruebas tenemos de que funciona?")
txt(s, 0.62, 1.85, 11.5, 1.4, [[("La gente ",{'color':INK}),("sí quiere",{'italic':True,'color':SUNDP}),
    (" el sol — cuando se lo hacemos accesible.",{'color':INK})]], size=31, font=DISP, spacing=1.0)
vals = [("[120]","entrevistas y encuestas a hogares y micronegocios  [su dato]"),
        ("[78%]","elegiría renta/microcrédito antes que pagar de contado  [su dato]"),
        ("[XX]","familias en lista de espera / piloto comprometido  [su dato]")]
cx=0.62
for k,b in vals:
    box(s, cx, 3.4, 3.9, 2.3, fill=BONE, radius=0.06)
    txt(s, cx+0.35, 3.7, 3.3, 0.9, k, size=44, font=DISP, color=SUNDP, italic=True)
    txt(s, cx+0.35, 4.75, 3.4, 0.85, _emph(b), size=12.5, color=INKS, spacing=1.15)
    cx+=4.13
txt(s, 0.62, 6.0, 11.5, 1.0, [[("Reemplacen los corchetes con sus datos reales del curso:",{'bold':True,'color':INK}),
    (" entrevistas, encuestas, cartas de intención, pilotos o pre-registros. Esa evidencia es lo que más suma puntos.",{'color':INKS})]],
    size=15, spacing=1.25)

# ════════════════════════════════════════════════════════════════════════════
# 8 · MODELO
s = slide(MID)
chrome(s, "07", "MODELO", dark=True)
tag(s, 0.62, 1.3, "¿Cómo generamos valor (y dinero)?", dark=True)
txt(s, 0.62, 1.85, 11.5, 1.4, [[("Ingresos recurrentes ",{'color':PAPER}),
    ("alineados con el ahorro del cliente.",{'italic':True,'color':SUN3})]], size=31, font=DISP, spacing=1.0)
rows = [("Renta mensual","ingreso recurrente y predecible (MRR)."),
        ("Intereses del microcrédito","financiamiento del equipo a plazos."),
        ("Mantenimiento y servicios","planes y reemplazos."),
        ("Optimización de venta a la red","comisión sobre el excedente vendido a CFE.")]
y=3.4
for h,b in rows:
    box(s, 0.62, y+0.12, 0.12, 0.12, fill=SUN3, radius=0.5)
    txt(s, 0.92, y, 5.7, 0.6, [[(h+" — ",{'bold':True,'color':PAPER}),(b,{'color':RGBColor(0xC4,0xCB,0xC4)})]], size=14.5, spacing=1.1)
    y+=0.72
card(s, 7.4, 3.3, 5.3, 3.3, dark=True)
txt(s, 7.75, 3.6, 4.6, 0.3, "LÓGICA DE UNIDAD · EJEMPLO", size=10, font=MONO, color=RGBColor(0x9A,0x96,0x8D), letter=140)
ex=[("Recibo de luz típico","$2,200 / mes",PAPER),("Renta Solvik","$899 / mes",PAPER),("Ahorro del cliente","≈ $1,300 / mes",SUN3)]
ey=4.05
for l,r,c in ex:
    txt(s, 7.75, ey, 3.0, 0.4, l, size=14, color=RGBColor(0xC4,0xCB,0xC4))
    txt(s, 10.4, ey, 1.95, 0.4, r, size=14, color=c, bold=True, align=PP_ALIGN.RIGHT)
    box(s, 7.75, ey+0.5, 4.6, 0.012, fill=RGBColor(0x24,0x3A,0x30))
    ey+=0.62
txt(s, 7.75, 6.0, 4.6, 0.5, [[("Ganamos cuando el cliente gana. Cifras ilustrativas ",{'color':RGBColor(0x9A,0x96,0x8D)}),
    ("[ajustar con su modelo]",{'italic':True,'color':SUNDP}),(".",{'color':RGBColor(0x9A,0x96,0x8D)})]], size=11, spacing=1.1)

# ════════════════════════════════════════════════════════════════════════════
# 9 · MERCADO Y VISIÓN
s = slide(BG)
chrome(s, "08", "MERCADO Y VISIÓN")
tag(s, 0.62, 1.5, "Mercado")
txt(s, 0.62, 2.05, 6.0, 1.5, [[("Un mercado enorme y ",{}),("apenas tocado.",{'italic':True,'color':SUNDP})]],
    size=30, font=DISP, color=INK, spacing=1.0)
bars=[("[TAM]","México",2.0,BR200),("[SAM]","Hogares aptos",2.8,BRAND),("[SOM]","Año 1–2",3.6,SUN)]
bx=0.9
for k,l,h,c in bars:
    box(s, bx, 6.3-h, 1.3, h, fill=c, radius=0.06)
    txt(s, bx-0.1, 6.05-h, 1.5, 0.35, k, size=12, font=MONO, color=SUNDP if '[' in k else INKS, italic=True, align=PP_ALIGN.CENTER)
    txt(s, bx-0.2, 6.4, 1.7, 0.35, l, size=11, color=INKS, align=PP_ALIGN.CENTER)
    bx+=1.8
txt(s, 0.62, 6.95, 6, 0.3, [[("Dimensionen TAM/SAM/SOM con sus cifras ",{'color':INKS,'size':11}),("[completar]",{'italic':True,'color':SUNDP,'size':11}),(".",{'color':INKS,'size':11})]])
box(s, 7.4, 1.55, 5.3, 4.6, fill=MID, radius=0.05)
txt(s, 7.8, 1.95, 4.5, 0.3, "NUESTRA VISIÓN", size=10.5, font=MONO, color=SUN3, letter=160)
txt(s, 7.8, 2.5, 4.55, 2.0, [[("Que la energía limpia sea la opción ",{'color':PAPER}),("default",{'italic':True,'color':SUN3}),
    (" de cada hogar en Latinoamérica.",{'color':PAPER})]], size=26, font=DISP, spacing=1.05)
txt(s, 7.8, 4.85, 4.55, 1.2, "Empezamos en México y escalamos a la región: mismo problema, mismo sol, misma necesidad de acceso justo.",
    size=14, color=RGBColor(0xC4,0xCB,0xC4), spacing=1.25)

# ════════════════════════════════════════════════════════════════════════════
# 10 · MILESTONES
s = slide(BG)
chrome(s, "09", "MILESTONES")
tag(s, 0.62, 1.3, "¿En qué etapa estamos? · hacia dónde vamos")
txt(s, 0.62, 1.85, 11.5, 1.3, [[("De prototipo a ",{}),("impacto a escala.",{'italic':True,'color':SUNDP})]],
    size=31, font=DISP, color=INK, spacing=1.0)
box(s, 0.9, 3.75, 11.2, 0.02, fill=RULE)
ms=[("HOY","Prototipo funcional + validación con usuarios.",BRAND),
    ("6 MESES","Piloto con [XX] hogares y primeras instalaciones.",BR200),
    ("12 MESES","App en tiendas + alianza financiera para el microcrédito.",BR200),
    ("24 MESES","Escala nacional y primer mercado fuera de México.",SUN)]
mx=0.9
for k,b,c in ms:
    box(s, mx, 3.62, 0.22, 0.22, fill=c, radius=0.5)
    txt(s, mx, 4.0, 2.7, 0.35, k, size=11, font=MONO, color=INKS, letter=140)
    txt(s, mx, 4.45, 2.65, 1.5, _emph(b), size=14, color=INK, spacing=1.2)
    mx+=2.85
txt(s, 0.62, 6.4, 11.5, 0.7, [[("Ajusten fechas y metas ",{'color':INKS}),("[a su realidad]",{'italic':True,'color':SUNDP}),
    (". Lo importante: mostrar avance y un siguiente paso claro.",{'color':INKS})]], size=15, spacing=1.2)

# ════════════════════════════════════════════════════════════════════════════
# 11 · EQUIPO
s = slide(BG)
chrome(s, "10", "EQUIPO")
tag(s, 0.62, 1.3, "Quiénes lo hacemos posible")
txt(s, 0.62, 1.85, 11.5, 1.3, [[("Un equipo que ",{}),("cree",{'italic':True,'color':SUNDP}),(" en energía justa.",{})]],
    size=31, font=DISP, color=INK, spacing=1.0)
team=[("AA","[Nombre]","[Rol · ej. CEO / Negocio]"),
      ("BB","[Nombre]","[Rol · ej. Producto / Tech]"),
      ("CC","[Nombre]","[Rol · ej. Operaciones / Impacto]")]
cx=0.62
for ini,n,role in team:
    card(s, cx, 3.4, 3.9, 2.6)
    c=box(s, cx+0.35, 3.75, 0.85, 0.85, fill=BRAND, radius=0.5)
    txt(s, cx+0.35, 3.92, 0.85, 0.5, ini, size=20, font=DISP, color=RGBColor(0xF8,0xF4,0xE6), align=PP_ALIGN.CENTER)
    txt(s, cx+0.35, 4.85, 3.3, 0.5, n, size=20, font=DISP, color=INK, italic=True)
    txt(s, cx+0.35, 5.4, 3.3, 0.5, [[(role,{'italic':True,'color':SUNDP})]], size=13)
    cx+=4.13
txt(s, 0.62, 6.4, 11.5, 0.7, "Agreguen foto, nombre, rol y una línea de por qué cada quién es la persona indicada para resolver esto.",
    size=15, color=INKS, spacing=1.2)

# ════════════════════════════════════════════════════════════════════════════
# 12 · CALL TO ACTION
s = slide(MID)
chrome(s, "11", "CALL TO ACTION", dark=True)
tag(s, 0.62, 1.9, "Para qué · nuestra visión de cambio", dark=True)
txt(s, 0.6, 2.45, 11.8, 2.0, [[("El sol ya es de todos.",{'color':PAPER})],
    [("Hagamos que el ahorro también lo sea.",{'italic':True,'color':SUN3})]],
    size=44, font=DISP, spacing=1.02)
txt(s, 0.62, 4.85, 8.0, 1.1, [[("Buscamos ",{'color':RGBColor(0xCF,0xC8,0xB8)}),
    ("aliados, mentoría y un primer piloto",{'color':PAPER,'bold':True}),
    (" para llevar energía solar accesible a las familias que más lo necesitan.",{'color':RGBColor(0xCF,0xC8,0xB8)})]],
    size=16, spacing=1.3)
box(s, 0.62, 6.05, 2.4, 0.6, fill=SUN, radius=0.5)
txt(s, 0.62, 6.18, 2.4, 0.4, "Súmate al piloto", size=14, color=INK, bold=True, align=PP_ALIGN.CENTER)
box(s, 3.2, 6.05, 4.5, 0.6, fill=None, line=RGBColor(0x3A,0x4A,0x42), radius=0.5)
txt(s, 3.4, 6.18, 4.2, 0.4, [[("hola@solvik.mx · ",{'color':PAPER}),("[contacto]",{'italic':True,'color':SUNDP})]], size=13)

prs.save("/home/user/Solvik/deliverables/Solvik_PitchDeck.pptx")
print("OK ·", len(prs.slides._sldIdLst), "slides")
