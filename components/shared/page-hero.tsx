interface PageHeroProps {
  tagline: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}

export function PageHero({ tagline, title, text, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(50rem_26rem_at_50%_0%,black,transparent)]"
      />
      <div className="container-app relative py-16 text-center sm:py-20">
        <span className="inline-block rounded-full border bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-soft">
          {tagline}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {text && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {text}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
