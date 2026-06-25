# 📦 Entregables del Pitch — Solvik

Esta carpeta contiene lo necesario para la tarea **Construye | Pitch Deck** (2 entregables: deck + grabación).

## Archivos
| Archivo | Qué es |
|---|---|
| **`Solvik_PitchDeck.pdf`** | El pitch deck listo para presentar (12 diapositivas, 16:9). **Renómbrenlo a `PitchDeck_EquipoX.pdf`** antes de subir. |
| **`Solvik_Guion_Video_3min.md`** | Guión cronometrado para grabar el video de ≤3 min. |
| `deck.html` + `fonts-local.css` + `fonts/` | Fuente editable del deck (HTML). Edítenlo y vuelvan a exportar si quieren cambios. |

## ✅ Antes de entregar: reemplacen los `[corchetes en cursiva dorada]`
El deck tiene marcadores que **deben** completar con datos reales del curso:

1. **Portada y equipo** — `[Equipo X]`, nombres y roles reales (diapos 1 y 11).
2. **Validación (diapo 7)** — sus números reales: # de entrevistas/encuestas, % de interés, lista de espera o piloto. *Esto es lo que más puntos da.*
3. **Datos del problema (diapo 3)** — verifiquen las cifras `[verificar]` con una fuente (CFE, SENER, IEA) y cítenla, o ajústenlas.
4. **Modelo y mercado (diapos 8–9)** — afinen cifras y dimensionen TAM/SAM/SOM.
5. **Milestones (diapo 10)** y **contacto (diapo 12)**.

## 🔁 Cómo re-exportar el PDF (si editan el HTML)
```bash
/opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless=new --no-sandbox \
  --print-to-pdf=Solvik_PitchDeck.pdf --no-pdf-header-footer \
  --virtual-time-budget=6000 file://$PWD/deck.html
```
O simplemente abran `deck.html` en Chrome → **Imprimir → Guardar como PDF** (tamaño horizontal, sin márgenes).

## 🎤 Sobre la grabación
No puedo grabarla por ustedes (son ustedes presentando), pero el guión ya está cronometrado diapositiva por diapositiva. Súbanla como `Grabacion_EquipoX` (archivo o enlace).

## Estructura (sigue *The Pitch Canvas*)
Portada → Quién/Propósito → Problema → Solución → Diferenciador → Prototipo → Validación → Modelo → Mercado/Visión → Milestones → Equipo → Call to action.
