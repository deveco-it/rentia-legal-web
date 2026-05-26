import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <title>Página no encontrada · Rentia</title>
      <meta name="robots" content="noindex" />

      <section className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6 px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-rentia-gold">Error 404</p>
        <h1 className="font-serif text-4xl text-rentia-cloud sm:text-5xl">
          Esta página no existe
        </h1>
        <p className="text-rentia-slate-200">
          La URL que has solicitado no corresponde a ningún documento publicado por Rentia.
          Comprueba el enlace o vuelve al inicio.
        </p>
        <Link
          to="/"
          className="rounded-lg bg-rentia-teal px-4 py-2 text-sm font-medium text-rentia-ink-950 transition hover:bg-rentia-teal-dark"
        >
          Volver al inicio
        </Link>
      </section>
    </>
  );
}
