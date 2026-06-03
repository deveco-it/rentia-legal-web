import { Link } from 'react-router-dom';

import { LegalDocument } from '@/shared/ui/LegalDocument';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { TodoBadge } from '@/shared/ui/TodoBadge';

export function TermsPage() {
  return (
    <LegalDocument
      title="Términos y Condiciones de uso"
      description="Términos y Condiciones que rigen el uso de la aplicación móvil Rentia."
      lastUpdated="TODO: fecha de publicación"
    >
      <p>
        Bienvenido/a a <strong>Rentia</strong>. Los presentes Términos y Condiciones (en adelante,
        los “<strong>Términos</strong>”) regulan el acceso y uso de la aplicación móvil Rentia (la
        “<strong>Aplicación</strong>” o el “<strong>Servicio</strong>”), titularidad de RHENIUM
        STRATEGIC SOLUTIONS, S.L., con CIF B21763297, domicilio social en Vía Ibérica 2, 6A, 50009
        Zaragoza, Zaragoza (España), inscrita en{' '}
        <TodoBadge>datos del Registro Mercantil</TodoBadge> (en adelante, “
        <strong>Rentia</strong>” o el “<strong>Titular</strong>”).
      </p>
      <p>
        El uso de la Aplicación implica la aceptación expresa y sin reservas de estos Términos. Si
        no estás de acuerdo con ellos, te rogamos no utilizar el Servicio.
      </p>

      <SectionHeading id="aceptacion" number={1} title="Aceptación de los Términos" />
      <p>
        Al registrarte, instalar o utilizar la Aplicación declaras haber leído, comprendido y
        aceptado estos Términos, así como la{' '}
        <Link to="/privacy">Política de Privacidad</Link> que los complementa. Rentia podrá
        modificar estos Términos en cualquier momento, comunicando los cambios a través de la
        Aplicación o por correo electrónico con una antelación mínima razonable antes de su entrada
        en vigor.
      </p>

      <SectionHeading id="definiciones" number={2} title="Definiciones" />
      <ul>
        <li>
          <strong>Usuario</strong>: persona física mayor de edad que accede o utiliza la Aplicación.
        </li>
        <li>
          <strong>Cliente</strong>: Usuario que, mediante invitación, dispone de una cuenta activa
          asociada a uno o más productos de inversión gestionados a través de Rentia.
        </li>
        <li>
          <strong>Aplicación / Servicio</strong>: aplicación móvil Rentia distribuida a través de
          Google Play y App Store, y los servicios accesibles a través de la misma.
        </li>
        <li>
          <strong>Contenido</strong>: información, datos, textos, gráficos, imágenes y cualquier
          otro material puesto a disposición del Usuario a través de la Aplicación.
        </li>
      </ul>

      <SectionHeading id="objeto" number={3} title="Objeto y descripción del Servicio" />
      <p>
        Rentia es una herramienta tecnológica de agregación y seguimiento de inversiones
        contratadas a través de terceros, sin prestar servicios de intermediación financiera ni
        asesoramiento en materia de inversión. Permite al Cliente consultar el estado de los
        productos financieros que tiene contratados, visualizar movimientos, posiciones y la
        actividad asociada a su cartera, así como comunicarse con su asesor.
      </p>
      <p>
        <strong>
          Rentia no constituye en sí mismo un servicio de asesoramiento financiero ni de inversión
          regulado en el sentido de la normativa MiFID II.
        </strong>{' '}
        La información mostrada tiene carácter meramente informativo y no debe interpretarse como
        una recomendación personalizada de inversión. Rentia actúa como una herramienta tecnológica
        de agregación, visualización y seguimiento de inversiones realizadas por el Cliente a través
        de terceros, sin intervenir en la contratación, ejecución o comercialización de instrumentos
        financieros, ni en la recepción o transmisión de órdenes, ni en la gestión discrecional de
        carteras. En ningún caso Rentia actúa como entidad financiera, agente vinculado,
        intermediario financiero ni comercializador de productos de inversión.
      </p>

      <SectionHeading id="registro" number={4} title="Registro y cuenta de Usuario" />
      <p>
        El acceso a la Aplicación requiere disponer de una cuenta. El alta se realiza mediante
        invitación: Rentia facilita al Cliente un <strong>código de invitación</strong> que debe
        introducirse durante el proceso de registro junto con su correo electrónico, nombre y una
        contraseña personal. La autenticación se gestiona a través de un proveedor externo
        especializado (ver sección 5 de la <Link to="/privacy">Política de Privacidad</Link>).
      </p>
      <p>
        El Usuario es el único responsable de la confidencialidad de sus credenciales y de toda
        actividad realizada desde su cuenta. Debe notificar de inmediato cualquier sospecha de uso
        no autorizado a través de los canales indicados en la página de{' '}
        <Link to="/support">Soporte</Link>.
      </p>

      <SectionHeading id="obligaciones" number={5} title="Obligaciones del Usuario" />
      <p>El Usuario se compromete a:</p>
      <ul>
        <li>Utilizar la Aplicación conforme a la ley, la moral y el orden público.</li>
        <li>
          Aportar información veraz, exacta y actualizada en el momento del registro y mantenerla
          al día.
        </li>
        <li>
          No realizar actividades fraudulentas, no introducir código malicioso y no interferir con
          el funcionamiento normal del Servicio.
        </li>
        <li>
          No utilizar la Aplicación para fines distintos a los previstos en estos Términos, ni en
          beneficio de terceros sin autorización.
        </li>
      </ul>

      <SectionHeading id="propiedad-intelectual" number={6} title="Propiedad intelectual" />
      <p>
        Todos los derechos de propiedad intelectual e industrial sobre la Aplicación, su código,
        diseño, marcas, logotipos y demás Contenido pertenecen a Rentia o a sus licenciantes. Se
        concede al Usuario una licencia personal, limitada, no exclusiva, no transferible y
        revocable para utilizar la Aplicación con la única finalidad prevista en estos Términos.
      </p>
      <p>
        Queda expresamente prohibida la reproducción, modificación, distribución, ingeniería
        inversa o cualquier uso no autorizado del Contenido sin el consentimiento expreso y por
        escrito de Rentia.
      </p>

      <SectionHeading
        id="limitacion-responsabilidad"
        number={7}
        title="Limitación de responsabilidad"
      />
      <p>
        Rentia pone los medios razonables para que la información mostrada sea exacta y esté
        actualizada, pero no garantiza la ausencia de errores, interrupciones o demoras en el
        Servicio. En la medida permitida por la ley aplicable, Rentia no será responsable por:
      </p>
      <ul>
        <li>
          Las decisiones de inversión adoptadas por el Usuario en base a la información mostrada en
          la Aplicación.
        </li>
        <li>
          La indisponibilidad temporal del Servicio por causas de mantenimiento, fuerza mayor o
          fallos de terceros (proveedores de infraestructura, tiendas de aplicaciones, redes de
          telecomunicaciones).
        </li>
        <li>
          El uso indebido de la Aplicación por terceros que hayan accedido mediante credenciales
          obtenidas sin autorización del Usuario.
        </li>
      </ul>
      <p>
        La información mostrada en la Aplicación tiene carácter exclusivamente informativo y no
        constituye asesoramiento financiero, recomendación de inversión ni garantía de rentabilidad
        futura.
      </p>
      <p>
        Toda inversión implica riesgos, incluida la posible pérdida parcial o total del capital
        invertido. Las rentabilidades pasadas no garantizan resultados futuros y los valores pueden
        fluctuar significativamente. El Usuario es el único responsable de las decisiones de
        inversión que adopte basándose en la información disponible en la Aplicación.
      </p>
      <p>
        Rentia no garantiza la exactitud, integridad o actualización permanente de la información
        financiera proporcionada por terceros, ni la disponibilidad continua e ininterrumpida del
        Servicio. Se recomienda al Usuario realizar su propia evaluación y, en su caso, consultar
        con un asesor financiero independiente antes de invertir.
      </p>

      <SectionHeading id="suspension" number={8} title="Suspensión y baja" />
      <p>
        Rentia podrá suspender o cancelar el acceso a la Aplicación, total o parcialmente, en caso
        de incumplimiento de estos Términos, uso fraudulento, o por requerimiento legal o
        contractual del producto subyacente. El Usuario podrá darse de baja en cualquier momento
        contactando con el soporte tal y como se indica en la página de{' '}
        <Link to="/support">Soporte</Link>. La baja conllevará el cierre de la cuenta y la
        aplicación de los plazos de conservación detallados en la{' '}
        <Link to="/privacy">Política de Privacidad</Link>.
      </p>

      <SectionHeading id="modificaciones" number={9} title="Modificaciones de los Términos" />
      <p>
        Rentia podrá modificar estos Términos para adaptarlos a cambios legislativos, técnicos o de
        funcionamiento del Servicio. Las modificaciones se publicarán en esta misma URL y se
        notificarán al Usuario con antelación razonable. El uso continuado de la Aplicación tras la
        entrada en vigor de la nueva versión supondrá la aceptación de los Términos modificados.
      </p>

      <SectionHeading id="legislacion" number={10} title="Legislación aplicable y jurisdicción" />
      <p>
        Estos Términos se rigen por la legislación española. Para la resolución de cualquier
        controversia derivada de los mismos, las partes se someten a los Juzgados y Tribunales
        competentes de Zaragoza, sin perjuicio de los derechos que
        la normativa de consumidores reconozca al Usuario para acudir al fuero de su domicilio.
      </p>

      <SectionHeading id="contacto" number={11} title="Contacto" />
      <p>
        Para cualquier consulta relacionada con estos Términos puedes contactar con nosotros a
        través de la página de <Link to="/support">Soporte</Link> o escribiendo a{' '}
        <TodoBadge>email de contacto (pendiente)</TodoBadge>.
      </p>
    </LegalDocument>
  );
}
