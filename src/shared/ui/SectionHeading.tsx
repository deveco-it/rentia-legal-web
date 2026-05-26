interface SectionHeadingProps {
  id: string;
  number: number;
  title: string;
}

export function SectionHeading({ id, number, title }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="group mt-12 scroll-mt-24 font-serif text-2xl text-rentia-cloud first:mt-0"
    >
      <span className="mr-3 text-rentia-teal">{number}.</span>
      {title}
      <a
        href={`#${id}`}
        aria-label={`Enlace permanente a ${title}`}
        className="ml-2 text-rentia-slate-400 opacity-0 transition group-hover:opacity-100"
      >
        #
      </a>
    </h2>
  );
}
