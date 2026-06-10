# Plan Financiero — Solvik (MVP)
### Construye · Modelo económico
*Energía solar residencial accesible: renta, microcrédito e IA — pilotaje en Guadalajara, 24 meses.*
*Moneda: MXN. Fecha base: 2026. Documento alineado a la plantilla "Iteración Financiera" (8 hojas).*

---

## 0. Resumen ejecutivo

Solvik democratiza el acceso a la energía solar residencial eliminando la barrera del pago de contado mediante **microcrédito** y **renta (HaaS)**, con una **app gratuita con IA** para monitoreo. El MVP es un **piloto en la zona metropolitana de Guadalajara** que valida la operación EPC (venta + instalación) y la originación de financiamiento antes de escalar a otros estados.

| Indicador clave | Valor |
|---|---|
| Necesidad de inversión total | **$2.81 M MXN** (CAPEX $1.61 M + capital de trabajo $1.20 M) |
| Punto de equilibrio operativo | **≈ 14 unidades/mes** (mezcla objetivo) |
| LTV/CAC (producto core, microcrédito) | **5.6×** → rentable, líquido y escalable |
| Cash-burn pre-rentabilidad | **≈ $80 K/mes durante 4 meses** (drawdown máx. acumulado ≈ $319 K) |
| Mes de flujo operativo positivo | **Mes 5** |
| Runway con la ronda propuesta | **> 24 meses** (caja nunca baja de $881 K) |
| VPN (5 años, WACC 22%) | **+$17.6 M** · **TIR 128.8%** · Índice de rentabilidad **8.3×** |
| Fondeo recomendado | **Blended: equity semilla + deuda verde/asset-backed para libro de renta** |

---

## 1. Definición del MVP y supuestos base

**Qué es el MVP:** operación EPC residencial (3–5 kWp) en Guadalajara que vende e instala sistemas fotovoltaicos y calentadores solares, ofreciendo tres rutas de pago al cliente (contado, microcrédito a 36 m, renta), y entrega la app de monitoreo. El piloto valida: costo de instalación real, ticket y mezcla de pago, CAC por canal, y la mecánica de originación de crédito con un socio financiero.

**Decisiones de modelado (explícitas):**
1. **Asset-light en el MVP:** el microcrédito lo *origina* Solvik pero lo *fondea un socio crediticio* (banco/fintech), que paga a Solvik el sistema al momento de la instalación. Así Solvik reconoce el ingreso al instalar y **no inmoviliza** $74 K por sistema durante 36 meses. Esto mantiene el capital de trabajo manejable; construir libro propio es una decisión de Fase 2 (ver §6).
2. **La renta (HaaS) se modela aparte** (§2.4) porque es ingreso recurrente con activo en balance — la plantilla de "unidades vendidas × precio" no captura MRR acumulado. El MVP la pilotea en volumen bajo.
3. **Horizonte:** 24 meses operativos + 3 años de extrapolación para valuación.
4. **Impuestos:** ISR 30%. **Prestaciones de ley:** 35% sobre sueldos. **WACC:** 22% (costo de capital de venture early-stage en MX).

---

## 2. Criterio 1 — Costos, precios y punto de equilibrio  *(/5)*

### 2.1 Estructura de costos fijos mensuales (OPEX + depreciación)

**Sueldos (nómina base):**
| Rol | Mensual |
|---|---:|
| Director General (CEO) | 35,000 |
| Líder Comercial / Ventas | 22,000 |
| Ingeniero Solar / Operaciones | 25,000 |
| Instalador líder (cuadrilla) | 14,000 |
| Analista Financiero / Admin | 16,000 |
| Growth / Marketing | 18,000 |
| **Subtotal sueldos** | **130,000** |
| Prestaciones de ley (35%) | 45,500 |
| **Total nómina + cargas** | **175,500** |

**Costos indirectos de operación (CIF):**
| Concepto | Mensual |
|---|---:|
| Renta oficina + bodega | 18,000 |
| Servicios (luz, agua, internet) | 4,000 |
| Software (CRM, ERP, monitoreo IA) | 8,000 |
| Vehículo (combustible + mant.) | 9,000 |
| Herramienta menor, EPP, consumibles | 3,000 |
| Seguros | 3,500 |
| Contabilidad y legal | 6,000 |
| **Total CIF** | **51,500** |
| Depreciación CAPEX (ver §4) | 36,389 |

> **Costos fijos mensuales totales = 175,500 + 51,500 + 36,389 = $263,389**

### 2.2 Precios y costos por producto (margen de contribución)

| Producto | Precio | Costo directo | Margen bruto | % margen | CAC |
|---|---:|---:|---:|---:|---:|
| **Sistema FV — Microcrédito** (~4 kWp) | 112,000 | 74,000 | **38,000** | 33.9% | 6,800 |
| **Sistema FV — Contado** (~4 kWp) | 99,000 | 74,000 | **25,000** | 25.3% | 6,800 |
| **Calentador Solar** (tubos al vacío 200 L) | 13,500 | 7,800 | **5,700** | 42.2% | 1,500 |

*El costo directo del sistema FV incluye: paneles, inversor, estructura, cableado/protecciones, mano de obra de instalación y trámites de interconexión CFE. El sobreprecio del microcrédito vs. contado ($13 K) es la prima de financiamiento que comparte Solvik con el socio crediticio.*

### 2.3 Punto de equilibrio

Margen de contribución **neto de CAC** (es costo variable de adquisición), ponderado por la mezcla objetivo de unidades (45% microcrédito / 20% contado / 35% calentador):

```
MC ponderado neto = Σ (margen − CAC) × peso
                  = (31,200×0.45) + (18,200×0.20) + (4,200×0.35) = $19,150 / unidad
PE = Costos fijos / MC ponderado = 263,389 / 19,150 ≈ 13.8 unidades/mes
```

**Punto de equilibrio ≈ 14 unidades/mes** (mezcla combinada). Sensibilidad por producto puro:

| Si solo se vendiera… | PE (unid/mes) |
|---|---:|
| Sistema FV Microcrédito | 8.4 |
| Sistema FV Contado | 14.5 |
| Calentador Solar | 62.7 |

> **Lectura:** el sistema FV a crédito es el motor de rentabilidad (alto margen absoluto, PE bajo). El calentador es un producto de *entrada/volumen y flujo de caja* (margen % alto pero absoluto bajo); por sí solo no sostiene la estructura. La estrategia correcta es **mezcla**: el FV paga los fijos, el calentador acelera adquisición y caja.

---

## 3. Criterio 2 — Unit economics (CAC, LTV, razón unitaria)  *(/5)*

### 3.1 CAC por producto
CAC = (presupuesto mensual de marketing + comisiones de venta) / clientes adquiridos en el mes.

| Producto | Inversión adquisición/mes | Clientes/mes | **CAC** |
|---|---:|---:|---:|
| Sistema FV Microcrédito | 81,600 | 12 | **6,800** |
| Sistema FV Contado | 34,000 | 5 | **6,800** |
| Calentador Solar | 19,500 | 13 | **1,500** |

### 3.2 LTV (sobre 2 años) y razón unitaria LTV/CAC

| Producto | Margen bruto/venta | Ventas por cliente (2 a) | **LTV** | CAC | **LTV/CAC** | Interpretación (rúbrica plantilla) |
|---|---:|---:|---:|---:|---:|---|
| Sistema FV Microcrédito | 38,000 | 1.0 | **38,000** | 6,800 | **5.6×** | Rentable, líquido y **escalable** |
| Sistema FV Contado | 25,000 | 1.0 | **25,000** | 6,800 | **3.7×** | Rentable, líquido y escalable |
| Calentador Solar | 5,700 | 1.2 | **6,840** | 1,500 | **4.6×** | Rentable, líquido y escalable |

Regla de la plantilla: razón > 3 ⇒ "rentable, líquido y escalable". **Los tres productos superan 3×.** El producto core (microcrédito) destaca por su LTV absoluto.

> **Palancas para mejorar LTV/CAC:**
> - **Cross-sell calentador → FV** (y viceversa): sube las "ventas por cliente" y diluye CAC.
> - **Referidos** (energía es muy social entre vecinos): canal de CAC casi nulo; meta 25% de leads por referido al mes 12.
> - **Venta de energía a CFE + mantenimiento**: ingresos de cola que no están en este LTV conservador (upside).

### 3.3 Renta / HaaS — unit economics del modelo recurrente *(modelado aparte)*

⚠️ **Hallazgo importante del análisis:** el precio gancho del landing **"$899/mes" NO recupera** un sistema de 4 kWp ($74 K): la contribución sobre 60 meses (~$46.7 K) queda por debajo del activo, con payback de ~95 meses. **El $899 solo es viable para un micro-sistema (~1.5 kWp, ~$28 K)** o como tarifa de entrada promocional.

HaaS bien dimensionado para 4 kWp:

| Parámetro | Valor |
|---|---:|
| Renta mensual | 1,790 |
| Costo de servicio/monitoreo por sistema | 150 |
| Activo (sistema instalado) | 74,000 |
| Contrato | 72 meses |
| Contribución de efectivo/mes | 1,640 |
| **Payback del activo** | **≈ 45 meses** |
| Ingreso total del contrato | 128,880 |
| LTV (2 años, neto de servicio) | 39,360 → LTV/CAC = **5.8×** |

> **Conclusión estratégica:** la renta es atractiva (cliente cautivo 6 años, ingreso recurrente) **pero intensiva en capital**: cada contrato inmoviliza $74 K que se recuperan en ~4 años. Por eso **el MVP prioriza microcrédito** (ingreso y margen inmediatos, asset-light) y **la renta se escala en Fase 2 con una facilidad de deuda dedicada** (§6). El landing debe corregir/segmentar el "$899".

---

## 4. CAPEX e inversión inicial

| Activo | Valor (sin IVA) | Vida útil | Depreciación/mes |
|---|---:|---:|---:|
| Vehículo utilitario (van de instalación) | 420,000 | 5 años | 7,000 |
| Herramienta e instrumentos de instalación | 180,000 | 5 años | 3,000 |
| Equipo de cómputo y oficina | 120,000 | 3 años | 3,333 |
| Mobiliario y adecuación de bodega/oficina | 150,000 | 5 años | 2,500 |
| Desarrollo App + plataforma de monitoreo IA | 650,000 | 3 años | 18,056 |
| Marca, sitio web y constitución legal | 90,000 | 3 años | 2,500 |
| **Total CAPEX** | **1,610,000** | | **36,389** |

La depreciación mensual ($36,389) fluye a OPEX como costo indirecto (celda `OPEX!E8 = CAPEX!F5`) y se reincorpora al flujo de caja (no es salida de efectivo).

---

## 5. Criterio 3 — Proyección financiera, necesidad de inversión y cash-burn rate  *(/5)*

### 5.1 Rampa de ventas (unidades/mes) — pilotaje conservador

| Producto | Año 1 (M1→M12) | Año 2 (M13→M24) |
|---|---|---|
| FV Microcrédito | 1 → 12 (lineal) | 13 → 24 |
| FV Contado | 0 → 5 | 5 → 11 |
| Calentador | 2 → 13 | 14 → 25 |

### 5.2 Estado de resultados / flujo de fondos (mensual, resumen)

| Mes | Unid | Ingresos | Utilidad bruta | EBITDA | Resultado neto | Flujo de caja oper. |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 3 | 139,000 | 49,400 | −187,400 | −187,400 | −151,011 |
| 2 | 6 | 363,500 | 118,100 | −133,800 | −133,800 | −97,411 |
| 3 | 8 | 489,000 | 161,800 | −98,400 | −98,400 | −62,011 |
| 4 | 11 | 713,500 | 230,500 | −44,800 | −44,800 | −8,411 |
| **5** | 13 | 839,000 | 274,200 | **−9,400** | −9,400 | **+26,989** |
| 6 | 15 | 964,500 | 317,900 | +26,000 | +26,000 | +62,389 |
| 12 | 30 | 2,014,500 | 655,100 | +293,000 | +216,017 | +252,406 |
| 18 | 45 | 3,064,500 | 992,300 | +560,000 | +402,917 | +439,306 |
| 24 | 60 | 4,114,500 | 1,329,500 | +827,000 | +589,817 | +626,206 |

**Anual:** Ingresos Año 1 ≈ **$13.9 M**, Año 2 ≈ **$37.5 M**. EBITDA cruza a positivo en el **mes 6**; flujo operativo en el **mes 5**.

### 5.3 Necesidad de inversión y cash-burn rate / runway

```
Necesidad de inversión = CAPEX + Capital de trabajo
                       = 1,610,000 + 1,200,000 = $2,810,000
```

**Dinámica de caja (partiendo de la ronda completa, restando CAPEX en el mes 0):**

| | Valor |
|---|---:|
| Caja tras invertir CAPEX (mes 0) | 1,200,000 |
| **Cash-burn rate** (meses 1–4, flujo negativo) | **≈ −80,000 / mes** |
| Meses en burn | 4 |
| **Drawdown máximo acumulado** (caja mínima mes 4) | caja = **$881,156** → consumió ≈ $319 K |
| Caja fin de Año 1 | 2,011,347 |
| Caja fin de Año 2 | 7,431,693 |

> **Capital mínimo de supervivencia** = CAPEX ($1.61 M) + consumo operativo acumulado (~$319 K) + colchón ≈ **$2.1–2.3 M**. **Recomendamos levantar $2.8 M** para sostener >24 meses de runway con holgura ante desviaciones (la caja nunca cae por debajo de $881 K en el caso base).

### 5.4 Sensibilidad (gestión del riesgo)
- **Rampa −30% más lenta:** el burn se extiende ~2–3 meses; con $2.8 M sigue habiendo runway suficiente.
- **Costo de instalación +10% ($74 K→$81.4 K):** margen FV cae a ~27%; PE sube a ~17 unid/mes (aún alcanzable hacia el mes 6–7).
- **Precio FV −10%:** EBITDA positivo se recorre del mes 6 al ~mes 8; sin riesgo de quiebre con el colchón.

---

## 6. Criterio 4 — Opciones de fondeo y recomendación  *(/3)*

Se evaluaron seis fuentes según costo, dilución, velocidad y **congruencia con un negocio EPC + fintech de hardware**:

| Fuente | Monto típico | Costo/dilución | Pros | Contras | Encaje con Solvik |
|---|---|---|---|---|---|
| **Equity semilla (ángeles / VC climate)** | $2–4 M | Dilución 15–25% | No exige flujo, aporta red y mentoría; tolera riesgo de pilotaje | Dilución; tiempos de cierre largos | ★★★★★ para CAPEX + capital de trabajo del MVP |
| **Deuda verde / impacto (FIRA, NAFIN, banca de desarrollo)** | $1–10 M | Tasa preferente (TIIE+) | Barata, sin dilución, diseñada para energías limpias en MX | Requiere historial/garantías; no apta pre-ingresos | ★★★★☆ ideal para **escalar libro de renta** (Fase 2) |
| **Asset-backed / leasing de equipo** | Por activo | Tasa sobre activo | Financia exactamente el activo que genera renta | Solo cubre el panel, no opex | ★★★★☆ habilita HaaS sin descapitalizar |
| **Socio crediticio (originación referida)** | N/A (off-balance) | Comparte margen | **Cero capital**: el socio fondea el microcrédito y paga a Solvik al instalar | Menor margen unitario | ★★★★★ **clave del MVP asset-light** |
| **Subsidios / programas (FIDE, hipoteca verde Infonavit)** | Variable | No reembolsable | Reduce CAC y ticket al cliente | Burocrático, montos topados | ★★★☆☆ palanca comercial, no fondeo core |
| **Crowdfunding / revenue-based** | $0.5–3 M | 6–12% flujo | Rápido, no diluye control | Caro si el flujo tarda | ★★☆☆☆ puente táctico |

### Recomendación — estructura *blended* por fases

1. **Fase MVP (meses 0–12) → Equity semilla de $2.8 M** (ángeles + fondo climate-tech) para CAPEX y capital de trabajo. Es lo único congruente con el nivel de avance (pre-tracción a tracción temprana, riesgo alto, sin colateral aún). El microcrédito se mantiene **off-balance vía socio crediticio** para no consumir esa caja.
2. **Fase escala (mes 12+) → Deuda verde / asset-backed** (NAFIN/FIRA/leasing) para construir **libro propio de renta**: con tracción y activos como colateral, la deuda barata sin dilución es la fuente óptima para el HaaS recurrente.
3. **Transversal → Subsidios y programas** (FIDE, hipoteca verde) como **palanca comercial** que baja el ticket y el CAC, no como fondeo de operación.

**Congruencia:** equity hoy (alto riesgo, sin garantías) → deuda mañana (activos + flujo que la respaldan). Esto minimiza dilución total y alinea el costo de capital con la madurez del proyecto.

---

## 7. Valuación (5 años, método de flujos descontados)

Supuestos: WACC 22%; crecimiento de flujos años 3–5 de 60% / 40% / 30%.

| Año | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|---:|
| Flujo (FCF) | −2,810,000 | 811,347 | 5,420,347 | 8,672,555 | 12,141,577 | 15,784,050 |
| Valor presente | −2,810,000 | 665,039 | 3,641,727 | 4,776,036 | 5,480,697 | 5,840,087 |

| Métrica | Resultado |
|---|---:|
| **VPN (5 años)** | **+$17.59 M** |
| **TIR** | **128.8%** |
| **Índice de rentabilidad** | **8.3×** |
| % de la inversión recuperable en VP | inversión = 13.8% del VP de flujos |

> El VPN fuertemente positivo y la TIR muy por encima del WACC indican un proyecto **creador de valor**; los múltiplos altos reflejan el apalancamiento operativo del modelo asset-light y deben leerse junto con la sensibilidad (§5.4), no como certeza.

---

## 8. Mapa a la plantilla "Iteración Financiera" (archivo entregado)

El archivo **`Solvik_Plan_Financiero_MVP.xlsx`** tiene la plantilla poblada con estos datos:

| Hoja | Qué se llenó |
|---|---|
| **CAPEX** | 6 activos con valor, vida útil y depreciación (§4) |
| **OPEX** | Prestaciones 35%, 6 sueldos, 7 CIF, material directo por producto |
| **Costeo y análisis de rent.** | % de asignación ABC, unidades, precio → costo unitario, margen, PE |
| **Unidades Económicas** | CAC (marketing/clientes) y LTV (precio−costo×ventas) por producto |
| **Resumen operativo** | 3 productos: precio, costo directo, CAC (driver de la proyección) |
| **Proyección financiera Insumos** | Unidades mensuales 24 meses (rampa §5.1) |
| **Proyección financiera** | ISR 30%, capital de trabajo; genera ES/flujo mensual |
| **Valuación de la empresa** | WACC 22%, crecimiento; VPN, TIR, índice de rentabilidad |

---

### Notas de rigor
- Cifras en MXN sin IVA, base 2026; sujetas a validación técnica por sitio (irradiación, techo, tarifa CFE del cliente).
- La proyección es un caso base optimista-realista para pilotaje; las decisiones de inversión deben usar el rango de sensibilidad (§5.4).
- El modelo asume originación de crédito off-balance; construir libro propio cambia radicalmente el capital de trabajo y debe re-modelarse en Fase 2.
