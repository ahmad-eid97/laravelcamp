export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-background/70 backdrop-blur-sm">
      <span className="relative grid size-14 place-items-center">
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-primary/15 border-t-primary" />
        <span className="size-2.5 rounded-full bg-brand-gradient" />
      </span>
    </div>
  );
}
