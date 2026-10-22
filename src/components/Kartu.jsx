export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-primary">{judul}</h2>
      {children}
    </section>
  );
}
