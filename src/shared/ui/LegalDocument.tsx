import type { ReactNode } from 'react';

interface LegalDocumentProps {
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalDocument({ title, description, lastUpdated, children }: LegalDocumentProps) {
  return (
    <>
      <title>{`${title} · Rentia`}</title>
      <meta name="description" content={description} />

      <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
        <header className="border-b border-white/5 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-rentia-teal">Documento legal</p>
          <h1 className="mt-2 font-serif text-4xl text-rentia-cloud sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-rentia-slate-300">
            Última actualización: <span className="text-rentia-cloud">{lastUpdated}</span>
          </p>
        </header>

        <div className="prose-rentia mt-2 space-y-4 text-rentia-slate-200 [&_a]:text-rentia-teal [&_a:hover]:underline [&_li]:leading-relaxed [&_p]:leading-relaxed [&_strong]:text-rentia-cloud [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </article>
    </>
  );
}
