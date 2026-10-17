export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Andi Pratama.",
};

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">Tentang Saya</h1>
      <p className="mt-3 text-lg text-gray-700">Halaman ini akan berisi cerita, hobi, dan cita-cita saya.</p>
    </main>
  );
}
