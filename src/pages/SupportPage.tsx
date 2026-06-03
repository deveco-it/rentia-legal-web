import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'He olvidado mi contraseña, ¿qué hago?',
    answer:
      'Desde la pantalla de inicio de sesión de la app puedes solicitar un enlace de restablecimiento que se enviará a tu correo electrónico. Si no lo recibes en unos minutos, revisa la carpeta de spam o contáctanos.',
  },
  {
    question: '¿Cómo solicito la baja de mi cuenta?',
    answer:
      'Escríbenos al correo de soporte indicando tu identidad. Procederemos a cerrar tu cuenta conforme a los plazos descritos en la Política de Privacidad.',
  },
  {
    question: '¿Cómo ejerzo mis derechos de protección de datos (RGPD)?',
    answer:
      'Envíanos un correo a la dirección de privacidad indicando el derecho que quieres ejercer (acceso, rectificación, supresión, oposición, portabilidad o limitación) y adjunta copia de un documento de identidad.',
  },
  {
    question: 'No me funciona la app o he encontrado un error, ¿a quién aviso?',
    answer:
      'Contáctanos al correo de soporte indicando modelo de dispositivo, sistema operativo y versión de la app. Si puedes, adjunta una captura de pantalla del error.',
  },
];

export function SupportPage() {
  return (
    <>
      <title>Soporte · Rentia</title>
      <meta
        name="description"
        content="Canales oficiales de soporte y contacto para usuarios de la aplicación Rentia."
      />

      <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
        <header className="border-b border-white/5 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-rentia-teal">Atención al usuario</p>
          <h1 className="mt-2 font-serif text-4xl text-rentia-cloud sm:text-5xl">
            Soporte y contacto
          </h1>
          <p className="mt-4 text-rentia-slate-200">
            Si tienes dudas sobre la aplicación Rentia, necesitas ayuda con tu cuenta o quieres
            reportar un problema, estos son nuestros canales oficiales.
          </p>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-rentia-ink-800/60 p-6">
            <h2 className="font-serif text-xl text-rentia-cloud">Soporte general</h2>
            <p className="mt-2 text-sm text-rentia-slate-200">
              Para dudas de uso, incidencias técnicas o gestión de tu cuenta.
            </p>
            <p className="mt-4 text-sm">
              <span className="text-rentia-slate-300">Correo:</span>{' '}
              <a href="mailto:contacto@rentia.club" className="text-rentia-teal hover:underline">
                contacto@rentia.club
              </a>
            </p>
            <p className="mt-1 text-sm">
              <span className="text-rentia-slate-300">Horario:</span>{' '}
              <span className="text-rentia-cloud">L-V 9:00 a 18:00 (CET)</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-rentia-ink-800/60 p-6">
            <h2 className="font-serif text-xl text-rentia-cloud">Privacidad y datos</h2>
            <p className="mt-2 text-sm text-rentia-slate-200">
              Para ejercer tus derechos RGPD o consultas relativas al tratamiento de datos
              personales.
            </p>
            <p className="mt-4 text-sm">
              <span className="text-rentia-slate-300">Correo:</span>{' '}
              <a href="mailto:contacto@rentia.club" className="text-rentia-teal hover:underline">
                contacto@rentia.club
              </a>
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl text-rentia-cloud">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/5 bg-rentia-ink-800/40 p-5 transition open:border-rentia-teal/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-rentia-cloud">
                  <span className="font-medium">{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-rentia-teal transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-rentia-slate-200">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-white/5 bg-rentia-ink-800/40 p-6 text-sm text-rentia-slate-200">
          <p>
            También puedes consultar nuestros{' '}
            <Link to="/terms" className="text-rentia-teal hover:underline">
              Términos y Condiciones
            </Link>{' '}
            y nuestra{' '}
            <Link to="/privacy" className="text-rentia-teal hover:underline">
              Política de Privacidad
            </Link>{' '}
            para más información sobre el funcionamiento del Servicio.
          </p>
        </section>
      </article>
    </>
  );
}
