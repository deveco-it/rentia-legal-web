import { Link } from 'react-router-dom';

const cards = [
  {
    to: '/terms',
    title: 'Términos y Condiciones',
    description:
      'Reglas de uso de la aplicación Rentia, derechos y obligaciones del usuario y de Rentia.',
  },
  {
    to: '/privacy',
    title: 'Política de Privacidad',
    description:
      'Qué datos personales tratamos, con qué finalidad y cómo puedes ejercer tus derechos RGPD.',
  },
  {
    to: '/support',
    title: 'Soporte y contacto',
    description:
      'Canales para resolver dudas, incidencias técnicas y solicitudes relacionadas con tu cuenta.',
  },
];

export function HomePage() {
  return (
    <>
      <title>Rentia · Información legal y soporte</title>
      <meta
        name="description"
        content="Términos y Condiciones, Política de Privacidad y soporte oficial de la aplicación Rentia."
      />

      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-rentia-teal">Rentia</p>
          <h1 className="mt-3 font-serif text-4xl text-rentia-cloud sm:text-5xl">
            Información legal y soporte
          </h1>
          <p className="mt-5 text-lg text-rentia-slate-200">
            En esta página encontrarás los documentos legales que rigen el uso de la aplicación
            móvil Rentia, así como los canales oficiales de soporte. Los enlaces aquí publicados
            son los que se referencian desde Google Play y la App Store.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-rentia-ink-800/60 p-6 transition hover:border-rentia-teal/40 hover:bg-rentia-ink-700/60"
            >
              <h2 className="font-serif text-xl text-rentia-cloud">{card.title}</h2>
              <p className="flex-1 text-sm text-rentia-slate-200">{card.description}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm text-rentia-teal">
                Leer
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
