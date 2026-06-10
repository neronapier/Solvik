# Plan Financiero — Solvik (MVP)
### Construye · Modelo económico
*Energía solar residencial accesible: renta, microcrédito e IA — pilotaje en Guadalajara, 24 meses.*
*Moneda: MXN. Fecha base: 2026. Documento alineado a la plantilla "Iteración Financiera" (8 hojas).*

---

## 0. Resumen ejecutivo

Solvik democratiza el acceso a la energía solar residencial eliminando la barrera del pago de contado mediante **microcrédito** y **renta (HaaS)**, con una **app gratuita con IA** para monitoreo. El MVP es un **piloto en la zona metropolitana de Guadalajara** que valida la operación EPC (venta + instalación) y la originación de financiamiento antes de escalar.

| Indicador clave | Valor |
|---|---|
| Necesidad de inversión total | **$3.24 M MXN** (CAPEX $1.843 M + capital de trabajo $1.40 M) |
| CAPEX detallado | **23 líneas** · depreciación **$42,118/mes** |
| OPEX fijo mensual | **$307,568** (nómina $198,450 + CIF $67,000 + deprec. $42,118) |
| Punto de equilibrio operativo | **≈ 16 unidades/mes** (mezcla objetivo) |
| LTV/CAC (producto core, microcrédito) | **5.6×** → rentable, líquido y escalable |
| Cash-burn pre-rentabilidad | **≈ $91 K/mes durante 5 meses** (drawdown máx. acumulado ≈ $455 K) |
| Mes de flujo operativo positivo | **Mes 6** |
| Runway con la ronda propuesta | **> 24 meses** (caja nunca baja de $944 K) |
| VPN (5 años, WACC 22%) | **+$16.05 M** · **TIR 110.7%** · Índice de rentabilidad **6.95×** |
| Fondeo recomendado | **Blended: equity semilla + deuda verde/asset-backed para libro de renta** |

---

## 1. Definición del MVP y supuestos base

**Qué es el MVP:** operación EPC residencial (3–5 kWp) en Guadalajara que vende e instala sistemas fotovoltaicos y calentadores solares, ofreciendo tres rutas de pago al cliente (contado, microcrédito a 36 m, renta), y entrega la app de monitoreo. El piloto valida costo de instalación real, ticket y mezcla de pago, CAC por canal, y la mecánica de originación de crédito con un socio financiero.

**Decisiones de modelado (explícitas):**
1. **Asset-light en el MVP:** el microcrédito lo *origina* Solvik pero lo *fondea un socio crediticio*, que paga a Solvik el sistema al instalar. Así Solvik reconoce el ingreso al instalar y **no inmoviliza** $74 K por sistema durante 36 meses. Construir libro propio es decisión de Fase 2 (§6).
2. **La renta (HaaS) se modela aparte** (§3.3): es ingreso recurrente con activo en balance y la plantilla de "unidades × precio" no captura MRR acumulado. El MVP la pilotea en volumen bajo.
3. **Horizonte:** 24 meses operativos + 3 años de extrapolación para valuación.
4. **Impuestos:** ISR 30%. **Prestaciones de ley:** 35% sobre sueldos. **WACC:** 22%.

---

## 2. CAPEX detallado  *(hoja CAPEX)*

Formato de la hoja: **Concepto · Valor de adquisición (sin IVA) · Vida útil (años) · Vida útil (meses) = años×12 · Depreciación mensual = Valor / meses**. La vida útil se alineó a criterios económicos y fiscales (ver tabla de parámetros México al final).

| # | Categoría | Concepto | Valor (sin IVA) | Vida (años) | Deprec./mes |
|--:|---|---|--:|--:|--:|
| 1 | Vehículos | Camioneta/van de instalación (seminueva) | 420,000 | 4 | 8,750 |
| 2 | Vehículos | Remolque para transporte de paneles | 60,000 | 5 | 1,000 |
| 3 | Herramienta | Kit de herramienta eléctrica (taladros, rotomartillo) | 45,000 | 4 | 938 |
| 4 | Herramienta | Herramienta manual e instrumentos de medición eléctrica | 38,000 | 4 | 792 |
| 5 | Herramienta | Equipo de seguridad en altura (arneses, líneas de vida) | 35,000 | 3 | 972 |
| 6 | Herramienta | Andamios y escaleras | 28,000 | 5 | 467 |
| 7 | Herramienta | Estación de crimpado y conectorización solar (MC4) | 18,000 | 5 | 300 |
| 8 | Cómputo | Laptops y equipo de diseño (4) | 80,000 | 3 | 2,222 |
| 9 | Cómputo | Servidor/NAS y sistema de respaldo | 30,000 | 4 | 625 |
| 10 | Cómputo | Smartphones y tablets de campo (3) | 24,000 | 2 | 1,000 |
| 11 | Cómputo | Impresora/multifuncional | 8,000 | 4 | 167 |
| 12 | Mobiliario | Mobiliario de oficina (escritorios, sillas, salas) | 55,000 | 10 | 458 |
| 13 | Mobiliario | Anaqueles y racks de bodega | 40,000 | 10 | 333 |
| 14 | Mobiliario | Adecuación de bodega y oficina (obra menor) | 70,000 | 5 | 1,167 |
| 15 | Mobiliario | Clima / aire acondicionado | 22,000 | 10 | 183 |
| 16 | Demostración | Sistema demostrativo showroom (panel+inversor+batería) | 50,000 | 5 | 833 |
| 17 | Intangibles SW | Desarrollo App móvil iOS/Android (MVP) | 360,000 | 3 | 10,000 |
| 18 | Intangibles SW | Plataforma de monitoreo + módulo IA (backend) | 260,000 | 3 | 7,222 |
| 19 | Intangibles SW | Implementación CRM/ERP (setup e integración) | 55,000 | 3 | 1,528 |
| 20 | Intangibles SW | Sitio web y e-commerce | 35,000 | 3 | 972 |
| 21 | Preoperativos | Registro de marca e identidad visual | 40,000 | 5 | 667 |
| 22 | Preoperativos | Constitución legal y permisos iniciales | 38,000 | 5 | 633 |
| 23 | Preoperativos | Certificaciones (NOM/UL, capacitación CONUEE/CRE) | 32,000 | 3 | 889 |
| | | **TOTAL CAPEX** | **1,843,000** | | **42,118** |

**Resumen por categoría:**
| Categoría | Inversión | % |
|---|--:|--:|
| Vehículos | 480,000 | 26% |
| Herramienta e instalación | 164,000 | 9% |
| Cómputo y comunicaciones | 142,000 | 8% |
| Mobiliario y adecuación | 187,000 | 10% |
| Equipo de demostración | 50,000 | 3% |
| Intangibles / software | 710,000 | 39% |
| Preoperativos | 110,000 | 6% |
| **Total** | **1,843,000** | **100%** |

> El **39% del CAPEX es software/IA** — coherente con que el diferenciador de Solvik es la app y la capa de IA, no solo el fierro. La depreciación mensual ($42,118) fluye a OPEX (`OPEX!E8 = CAPEX!F5`) y se reincorpora al flujo de caja por no ser salida de efectivo.

**Tabla de parámetros de vida útil — México (tasa máx. ISR, art. 33-34 LISR):** construcciones 5%/20a · mobiliario y equipo de oficina 10%/10a · equipo de cómputo 30%/3.3a · automóviles 25%/4a · maquinaria 10%/10a · herramienta 35%/≈3a · comunicación telefónica 25%/4a · gastos diferidos/intangibles 15%/≈6.7a · preoperativos 10%/10a.

---

## 3. OPEX detallado y unit economics  *(hojas OPEX, Costeo, Unidades Económicas)*

### 3.1 OPEX — Sueldos (mensual)
Formato de la hoja: bloque **Sueldos** + *Prestaciones de ley* (auto = Σ sueldos × %).

| # | Rol | Mensual |
|--:|---|--:|
| 1 | Director General (CEO) | 35,000 |
| 2 | Líder Comercial / Ventas | 22,000 |
| 3 | Ingeniero Solar / Diseño y Operaciones | 25,000 |
| 4 | Instalador líder (cuadrilla) | 14,000 |
| 5 | Ayudante de instalación | 9,000 |
| 6 | Analista Financiero / Administración | 16,000 |
| 7 | Growth / Marketing | 18,000 |
| 8 | Servicio al cliente / Postventa (medio tiempo) | 8,000 |
| | **Subtotal sueldos** | **147,000** |
| | Prestaciones de ley (35%) | 51,450 |
| | **Total nómina + cargas** | **198,450** |

### 3.2 OPEX — Costo Indirecto de Fábrica / operación (mensual)
Formato de la hoja: bloque **CIF** + *Depreciación/amortización* (auto = CAPEX!F5).

| # | Concepto | Mensual | | # | Concepto | Mensual |
|--:|---|--:|---|--:|---|--:|
| 1 | Renta de oficina | 12,000 | | 12 | Herramienta menor y consumibles | 3,000 |
| 2 | Renta de bodega/almacén | 8,000 | | 13 | EPP y uniformes | 1,200 |
| 3 | Energía eléctrica | 2,500 | | 14 | Seguro de resp. civil + equipo | 3,500 |
| 4 | Agua | 600 | | 15 | Seguro de vehículo | 1,800 |
| 5 | Internet y telefonía | 2,500 | | 16 | Honorarios contables | 4,500 |
| 6 | Software CRM (HubSpot/Pipedrive) | 2,800 | | 17 | Honorarios legales | 2,500 |
| 7 | Software ERP/contabilidad (CONTPAQi) | 1,800 | | 18 | Papelería y artículos de oficina | 800 |
| 8 | Software monitoreo/IA (cloud + APIs) | 4,500 | | 19 | Servicio de limpieza | 1,500 |
| 9 | Combustible (van) | 6,000 | | 20 | Comisiones bancarias / TPV | 2,000 |
| 10 | Mantenimiento vehicular | 2,000 | | 21 | Capacitación y certificación continua | 2,000 |
| 11 | Casetas y peajes | 1,500 | | | **Total CIF** | **67,000** |
| | | | | | + Depreciación CAPEX | 42,118 |

> **Costos fijos mensuales totales = 198,450 (nómina) + 67,000 (CIF) + 42,118 (deprec.) = $307,568**

### 3.3 OPEX — Material directo (BOM por unidad)
Formato de la hoja: bloque **Productos/Servicios**, una columna Concepto/Monto por producto. Cada columna documenta la lista de materiales (BOM) de **una unidad**.

**Sistema Fotovoltaico 4 kWp (microcrédito y contado comparten BOM):**
| Componente | $/unidad |
|---|--:|
| Paneles solares 8×550 W bifaciales | 28,000 |
| Inversor string 5 kW | 16,000 |
| Estructura de montaje y rieles | 8,500 |
| Cableado, protecciones y tablero | 6,500 |
| Medidor bidireccional e interconexión | 3,500 |
| Mano de obra de instalación | 7,000 |
| Trámites CFE / gestoría | 2,500 |
| Flete y maniobras | 2,000 |
| **Costo directo unitario** | **74,000** |

**Calentador Solar 200 L:**
| Componente | $/unidad |
|---|--:|
| Termotanque tubos al vacío 200 L | 5,200 |
| Estructura y soportería | 900 |
| Tubería, conexiones y aislante térmico | 1,100 |
| Mano de obra de instalación | 600 |
| **Costo directo unitario** | **7,800** |

---

## 4. Criterio 1 — Costos, precios y punto de equilibrio  *(/5)*

### 4.1 Precios y márgenes por producto
| Producto | Precio | Costo directo | Margen bruto | % margen | CAC |
|---|--:|--:|--:|--:|--:|
| **Sistema FV — Microcrédito** (~4 kWp) | 112,000 | 74,000 | **38,000** | 33.9% | 6,800 |
| **Sistema FV — Contado** (~4 kWp) | 99,000 | 74,000 | **25,000** | 25.3% | 6,800 |
| **Calentador Solar** (200 L) | 13,500 | 7,800 | **5,700** | 42.2% | 1,500 |

### 4.2 Punto de equilibrio
Margen de contribución **neto de CAC**, ponderado por la mezcla objetivo (45% microcrédito / 20% contado / 35% calentador):
```
MC ponderado neto = (31,200×0.45)+(18,200×0.20)+(4,200×0.35) = $19,150 / unidad
PE = Costos fijos / MC ponderado = 307,568 / 19,150 ≈ 16.1 unidades/mes
```
**Punto de equilibrio ≈ 16 unidades/mes.** Por producto puro: FV Microcrédito 9.9 u/mes · FV Contado 16.9 u/mes · Calentador 73 u/mes.

> El sistema FV a crédito es el motor de rentabilidad (margen absoluto alto, PE bajo); el calentador aporta volumen y caja. La estrategia correcta es **mezcla**.

---

## 5. Criterio 2 — Unit economics (CAC, LTV, razón unitaria)  *(/5)*

### 5.1 CAC y LTV (sobre 2 años)
| Producto | CAC | Margen/venta | Ventas/cliente (2a) | **LTV** | **LTV/CAC** | Interpretación |
|---|--:|--:|--:|--:|--:|---|
| Sistema FV Microcrédito | 6,800 | 38,000 | 1.0 | 38,000 | **5.6×** | Rentable, líquido y escalable |
| Sistema FV Contado | 6,800 | 25,000 | 1.0 | 25,000 | **3.7×** | Rentable, líquido y escalable |
| Calentador Solar | 1,500 | 5,700 | 1.2 | 6,840 | **4.6×** | Rentable, líquido y escalable |

Regla de la plantilla: razón > 3 ⇒ "rentable, líquido y escalable". **Los tres superan 3×.**

> **Palancas:** cross-sell calentador↔FV (sube ventas/cliente), referidos (CAC≈0; meta 25% de leads al mes 12), e ingresos de cola no contabilizados aquí (venta de energía a CFE + mantenimiento) = upside.

### 5.2 Renta / HaaS — modelo recurrente *(modelado aparte)*
⚠️ **Hallazgo:** el gancho del landing **"$899/mes" NO recupera** un sistema de 4 kWp ($74 K): payback ~95 meses. Solo es viable para un micro-sistema (~1.5 kWp) o como tarifa promocional.

HaaS bien dimensionado (4 kWp): renta **$1,790/mes**, servicio $150/mes, contrato 72 m → contribución $1,640/mes, **payback del activo ≈ 45 meses**, LTV(2a) $39,360 → **LTV/CAC 5.8×**.

> La renta es atractiva pero **intensiva en capital** (inmoviliza $74 K/contrato). Por eso el MVP prioriza microcrédito (asset-light) y la renta escala en Fase 2 con deuda dedicada (§7). **Corregir el "$899" del landing.**

---

## 6. Criterio 3 — Proyección, inversión y cash-burn rate  *(/5)*

### 6.1 Rampa de ventas (unidades/mes)
| Producto | Año 1 (M1→M12) | Año 2 (M13→M24) |
|---|---|---|
| FV Microcrédito | 1 → 12 | 13 → 24 |
| FV Contado | 0 → 5 | 5 → 11 |
| Calentador | 2 → 13 | 14 → 25 |

### 6.2 Estado de resultados / flujo (mensual, resumen)
| Mes | Unid | Ingresos | Util. bruta | EBITDA | Result. neto | Flujo oper. | Caja |
|--:|--:|--:|--:|--:|--:|--:|--:|
| 1 | 3 | 139,000 | 49,400 | −225,850 | −225,850 | −183,732 | 1,216,268 |
| 2 | 6 | 363,500 | 118,100 | −172,250 | −172,250 | −130,132 | 1,086,136 |
| 3 | 8 | 489,000 | 161,800 | −136,850 | −136,850 | −94,732 | 991,404 |
| 4 | 11 | 713,500 | 230,500 | −83,250 | −83,250 | −41,132 | 950,272 |
| 5 | 13 | 839,000 | 274,200 | −47,850 | −47,850 | −5,732 | **944,540** |
| 6 | 15 | 964,500 | 317,900 | −12,450 | −12,450 | **+29,668** | 974,208 |
| 12 | 30 | 2,014,500 | 655,100 | 254,550 | 190,820 | 232,938 | 1,897,928 |
| 18 | 45 | 3,064,500 | 992,300 | 521,550 | 377,720 | 419,838 | 3,930,598 |
| 24 | 60 | 4,114,500 | 1,329,500 | 788,550 | 564,620 | 606,738 | 7,084,669 |

**Anual:** Ingresos Año 1 ≈ **$12.9 M**, Año 2 ≈ **$37.5 M**. Flujo operativo positivo desde el **mes 6**.

### 6.3 Necesidad de inversión, burn y runway
```
Necesidad de inversión = CAPEX + Capital de trabajo = 1,843,000 + 1,400,000 = $3,243,000
```
| | Valor |
|---|--:|
| Caja tras invertir CAPEX (mes 0) | 1,400,000 |
| **Cash-burn rate** (meses 1–5) | **≈ −91,000 / mes** |
| Meses en burn | 5 |
| **Drawdown máximo acumulado** (caja mínima, mes 5) | caja = **$944,540** → consumió ≈ $455 K |
| Caja fin Año 1 / fin Año 2 | 1,897,928 / 7,084,669 |

> **Capital mínimo de supervivencia** ≈ CAPEX $1.843 M + burn acumulado ~$455 K + colchón ≈ **$2.4–2.6 M**. **Recomendamos levantar $3.24 M** para >24 meses de runway con holgura (la caja nunca baja de $944 K en el caso base).

### 6.4 Sensibilidad
- **Rampa −30%:** el burn se extiende ~2–3 meses; con $3.24 M aún hay runway.
- **Costo instalación +10% (74K→81.4K):** margen FV cae a ~27%, PE sube a ~19 u/mes (alcanzable mes 7–8).
- **Precio FV −10%:** EBITDA positivo se recorre del mes 6 al ~mes 8; sin riesgo de quiebre.

---

## 7. Criterio 4 — Opciones de fondeo y recomendación  *(/3)*

| Fuente | Monto | Costo/dilución | Encaje con Solvik |
|---|---|---|---|
| **Equity semilla (ángeles / VC climate)** | $3–4 M | Dilución 15–25% | ★★★★★ para CAPEX + capital de trabajo del MVP |
| **Deuda verde (FIRA, NAFIN, banca de desarrollo)** | $1–10 M | Tasa preferente | ★★★★☆ ideal para **escalar libro de renta** (Fase 2) |
| **Asset-backed / leasing de equipo** | Por activo | Tasa sobre activo | ★★★★☆ habilita HaaS sin descapitalizar |
| **Socio crediticio (originación referida)** | Off-balance | Comparte margen | ★★★★★ **clave del MVP asset-light** |
| **Subsidios (FIDE, hipoteca verde Infonavit)** | Variable | No reembolsable | ★★★☆☆ palanca comercial, no fondeo core |
| **Crowdfunding / revenue-based** | $0.5–3 M | 6–12% del flujo | ★★☆☆☆ puente táctico |

### Recomendación — estructura *blended* por fases
1. **Fase MVP (0–12 m) → Equity semilla $3.24 M** (ángeles + fondo climate-tech): único congruente con el nivel de avance (pre-tracción, riesgo alto, sin colateral). El microcrédito se mantiene **off-balance vía socio crediticio**.
2. **Fase escala (12 m+) → Deuda verde / asset-backed** (NAFIN/FIRA/leasing) para construir **libro propio de renta**: con tracción y activos como colateral, la deuda barata sin dilución es óptima para el HaaS.
3. **Transversal → Subsidios** (FIDE, hipoteca verde) como palanca comercial que baja ticket y CAC.

**Congruencia:** equity hoy (alto riesgo, sin garantías) → deuda mañana (activos + flujo que la respaldan). Minimiza dilución total y alinea el costo de capital con la madurez del proyecto.

---

## 8. Valuación (5 años, flujos descontados)
Supuestos: WACC 22%; crecimiento de flujos años 3–5 de 60% / 40% / 30%.

| Año | 0 | 1 | 2 | 3 | 4 | 5 |
|---|--:|--:|--:|--:|--:|--:|
| Flujo (FCF) | −3,243,000 | 497,929 | 5,186,742 | 8,298,787 | 11,618,302 | 15,103,793 |

| Métrica | Resultado |
|---|--:|
| **VPN (5 años)** | **+$16.05 M** |
| **TIR** | **110.7%** |
| **Índice de rentabilidad** | **6.95×** |

> VPN fuertemente positivo y TIR muy por encima del WACC ⇒ proyecto **creador de valor**. Los múltiplos altos reflejan el apalancamiento operativo del modelo asset-light; léanse junto con la sensibilidad (§6.4).

---

## 9. Mapa a la plantilla "Iteración Financiera" (`Solvik_Plan_Financiero_MVP.xlsx`)
| Hoja | Contenido poblado |
|---|---|
| **CAPEX** | 23 activos (concepto/valor/vida/deprec.) + tabla de parámetros México |
| **OPEX** | Prestaciones 35%, 8 sueldos, 21 CIF, BOM detallado por producto |
| **Costeo y análisis de rent.** | % asignación ABC, unidades, precio → costo unitario, margen, PE |
| **Unidades Económicas** | CAC (marketing/clientes) y LTV por producto |
| **Resumen operativo** | 3 productos (driver de la proyección) |
| **Proyección financiera Insumos** | Unidades mensuales 24 meses |
| **Proyección financiera** | ISR 30%, capital de trabajo → ES/flujo mensual |
| **Valuación de la empresa** | WACC 22%, crecimiento → VPN, TIR, índice de rentabilidad |

### Notas de rigor
- Cifras en MXN sin IVA, base 2026; sujetas a validación técnica por sitio (irradiación, techo, tarifa CFE).
- Caso base optimista-realista para pilotaje; usar el rango de sensibilidad (§6.4) para decisiones de inversión.
- Modelo asume originación de crédito off-balance; construir libro propio cambia el capital de trabajo y debe re-modelarse en Fase 2.
