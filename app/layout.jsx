import './globals.css';

export const metadata = {
  title: 'SolarFlex — Energía solar en tu hogar, sin pagar todo de golpe',
  description:
    'Renta paneles solares o accede a microcréditos flexibles. Ahorra desde el primer mes y gestiona todo desde tu celular con inteligencia artificial.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
