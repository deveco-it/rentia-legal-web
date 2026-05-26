import { Link } from 'react-router-dom';

import { LegalDocument } from '@/shared/ui/LegalDocument';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { TodoBadge } from '@/shared/ui/TodoBadge';

export function PrivacyPage() {
  return (
    <LegalDocument
      title="Política de Privacidad"
      description="Información sobre el tratamiento de datos personales en la aplicación Rentia, conforme al RGPD y la LOPDGDD."
      lastUpdated="TODO: fecha de publicación"
    >
      <p>
        En Rentia nos tomamos muy en serio la privacidad de las personas usuarias. Esta Política
        de Privacidad explica qué datos personales recopilamos, con qué finalidad, sobre qué base
        jurídica los tratamos y qué derechos te asisten, conforme al Reglamento (UE) 2016/679
        (“RGPD”) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los
        derechos digitales (“LOPDGDD”).
      </p>

      <SectionHeading id="responsable" number={1} title="Responsable del tratamiento" />
      <ul>
        <li>
          <strong>Titular</strong>: <TodoBadge>RAZÓN SOCIAL</TodoBadge>
        </li>
        <li>
          <strong>CIF</strong>: <TodoBadge>CIF</TodoBadge>
        </li>
        <li>
          <strong>Domicilio social</strong>: <TodoBadge>DIRECCIÓN COMPLETA</TodoBadge>
        </li>
        <li>
          <strong>Email de contacto</strong>: <TodoBadge>privacidad@rentia.app</TodoBadge>
        </li>
        <li>
          <strong>Delegado de Protección de Datos (DPO)</strong>:{' '}
          <TodoBadge>nombre y email del DPO si ha sido designado</TodoBadge>
        </li>
      </ul>

      <SectionHeading id="datos" number={2} title="Datos que recopilamos" />
      <p>Tratamos las siguientes categorías de datos personales:</p>
      <ul>
        <li>
          <strong>Datos identificativos y de contacto</strong>: nombre completo, dirección de
          correo electrónico, código de invitación.
        </li>
        <li>
          <strong>Datos de autenticación</strong>: hash de contraseña y tokens de sesión, gestionados
          por el proveedor de identidad (Supabase Auth).
        </li>
        <li>
          <strong>Datos del producto contratado</strong>: información de la cartera (posiciones,
          aportaciones, retiradas y movimientos) y vinculación con el cliente.
        </li>
        <li>
          <strong>Datos técnicos y de uso</strong>: dirección IP, identificador de dispositivo,
          sistema operativo, versión de la aplicación, registros de acceso y errores.
        </li>
        <li>
          <strong>Datos de comunicación</strong>: contenido de los mensajes que nos envíes a
          través de los canales de soporte.
        </li>
      </ul>
      <p>
        No tratamos categorías especiales de datos (salud, ideología, etc.) ni datos de menores.
        El uso de la Aplicación está restringido a personas mayores de edad.
      </p>

      <SectionHeading id="finalidades" number={3} title="Finalidades y base legal" />
      <ul>
        <li>
          <strong>Prestación del Servicio</strong> (ejecución del contrato): gestión de tu cuenta,
          autenticación, consulta de tu cartera y movimientos.
        </li>
        <li>
          <strong>Atención al usuario</strong> (ejecución del contrato e interés legítimo):
          responder a tus consultas e incidencias técnicas.
        </li>
        <li>
          <strong>Seguridad y prevención del fraude</strong> (interés legítimo): registros de
          acceso, detección de accesos no autorizados, auditoría.
        </li>
        <li>
          <strong>Cumplimiento de obligaciones legales</strong> (obligación legal): atender
          requerimientos de autoridades competentes y obligaciones contables o regulatorias.
        </li>
        <li>
          <strong>Comunicaciones operativas</strong> (ejecución del contrato): notificaciones sobre
          el estado de la cuenta, cambios en los Términos o avisos relevantes del Servicio.
        </li>
      </ul>

      <SectionHeading id="conservacion" number={4} title="Plazos de conservación" />
      <p>
        Los datos se conservarán mientras la cuenta esté activa. Tras la baja, los datos
        identificativos y operativos se mantendrán bloqueados durante el plazo necesario para
        atender posibles responsabilidades legales, contractuales o fiscales{' '}
        <TodoBadge>confirmar plazo concreto: típicamente 6 años por normativa mercantil</TodoBadge>,
        tras lo cual serán suprimidos de forma segura.
      </p>

      <SectionHeading
        id="encargados"
        number={5}
        title="Destinatarios, encargados y sub-encargados"
      />
      <p>
        Para prestar el Servicio contamos con proveedores que actúan como encargados del
        tratamiento bajo nuestras instrucciones, con contratos de encargo conformes al artículo 28
        del RGPD:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — Proveedor de la base de datos, autenticación y
          almacenamiento. Tratamiento ubicado fuera del Espacio Económico Europeo (ver sección 6).
        </li>
        <li>
          <strong>Expo / EAS</strong> — Plataforma de distribución y, en su caso, envío de
          notificaciones push.
        </li>
        <li>
          <strong>Google Play y App Store</strong> — Tiendas de aplicaciones a través de las cuales
          se distribuye la Aplicación. Su tratamiento se rige por sus propias políticas.
        </li>
        <li>
          <TodoBadge>
            Añadir cualquier otro encargado utilizado: analítica (PostHog, Sentry...), email
            transaccional, hosting de esta web legal, etc.
          </TodoBadge>
        </li>
      </ul>
      <p>
        No cedemos datos personales a terceros con fines comerciales propios de éstos, salvo
        obligación legal o requerimiento judicial.
      </p>

      <SectionHeading
        id="transferencias"
        number={6}
        title="Transferencias internacionales de datos"
      />
      <p>
        Algunos de nuestros proveedores (en particular, <strong>Supabase</strong>) pueden tratar
        datos en servidores ubicados fuera del Espacio Económico Europeo, incluyendo los Estados
        Unidos de América. Estas transferencias se realizan al amparo de las{' '}
        <strong>Cláusulas Contractuales Tipo</strong> aprobadas por la Comisión Europea, así como
        de las medidas adicionales de seguridad técnica y organizativa que ofrezcan garantías
        adecuadas conforme al artículo 46 del RGPD.{' '}
        <TodoBadge>
          Revisar región concreta del proyecto Supabase y mecanismo de transferencia vigente
        </TodoBadge>
      </p>

      <SectionHeading id="derechos" number={7} title="Tus derechos" />
      <p>Como titular de los datos puedes ejercer en cualquier momento los siguientes derechos:</p>
      <ul>
        <li>
          <strong>Acceso</strong>, <strong>rectificación</strong> y <strong>supresión</strong> de
          tus datos.
        </li>
        <li>
          <strong>Oposición</strong> al tratamiento y <strong>limitación</strong> del mismo.
        </li>
        <li>
          <strong>Portabilidad</strong> de los datos a otro responsable, cuando proceda.
        </li>
        <li>
          <strong>Retirar el consentimiento</strong> prestado, sin que ello afecte a la licitud del
          tratamiento previo.
        </li>
      </ul>
      <p>
        Puedes ejercer estos derechos enviando un correo a{' '}
        <TodoBadge>privacidad@rentia.app</TodoBadge> indicando el derecho que deseas ejercer y
        acompañando copia de un documento que acredite tu identidad. También podrás contactarnos a
        través de la página de <Link to="/support">Soporte</Link>.
      </p>

      <SectionHeading id="aepd" number={8} title="Reclamación ante la AEPD" />
      <p>
        Si consideras que el tratamiento de tus datos no es conforme a la normativa, tienes
        derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de
        Datos</strong> (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer noopener">
          www.aepd.es
        </a>
        ).
      </p>

      <SectionHeading id="cookies" number={9} title="Cookies y tecnologías similares" />
      <p>
        La Aplicación móvil no utiliza cookies en el sentido de la normativa web, pero sí emplea
        identificadores técnicos del dispositivo y almacenamiento seguro local necesarios para el
        funcionamiento del Servicio (gestión de sesión, preferencias).{' '}
        <TodoBadge>
          Si esta web legal incorpora analítica en el futuro, completar con la política de cookies
          web correspondiente
        </TodoBadge>
      </p>

      <SectionHeading id="cambios" number={10} title="Cambios en esta política" />
      <p>
        Podemos actualizar esta Política de Privacidad para reflejar cambios legales,
        regulatorios o de funcionamiento del Servicio. Publicaremos siempre la versión vigente en
        esta misma URL e indicaremos la fecha de la última actualización en la cabecera del
        documento.
      </p>

      <SectionHeading id="contacto" number={11} title="Contacto" />
      <p>
        Para cualquier cuestión relacionada con tus datos personales o con esta Política, escribe
        a <TodoBadge>privacidad@rentia.app</TodoBadge> o visita la página de{' '}
        <Link to="/support">Soporte</Link>.
      </p>
    </LegalDocument>
  );
}
