import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Andi Pratama melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-muted-foreground">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-primary">Temukan Saya di</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/BagusHidayat21" target="_blank" className="text-aksen hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:andi.pratama@example.com" className="text-aksen hover:underline">
                andi.pratama@example.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
