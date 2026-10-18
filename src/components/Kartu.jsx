export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-utama dark:text-sky-200">{judul}</h2>
      {children}
    </section>
  );
}
