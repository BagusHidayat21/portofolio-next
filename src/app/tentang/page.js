import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Andi Pratama.",
};

const hobi = ["Bermain futsal", "Membaca komik", "Mendesain poster"];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Tentang Saya</h1>

      <div className="mt-8 space-y-6">
        <Kartu judul="Perkenalan">
          <p>
            Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat
            website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
          </p>
        </Kartu>

        <div className="grid gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-disc pl-5">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p>
              Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang saya rencanakan:
            </p>
            <ol className="mt-2 list-decimal pl-5">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>
        </div>

        <Kartu judul="Jadwal Belajar">
          <table className="w-full text-left">
            <thead className="bg-utama text-white">
              <tr>
                <th className="p-2">Hari</th>
                <th className="p-2">Waktu</th>
                <th className="p-2">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((baris) => (
                <tr key={baris.hari} className="border-b border-border">
                  <td className="p-2">{baris.hari}</td>
                  <td className="p-2">{baris.waktu}</td>
                  <td className="p-2">{baris.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Kartu>
      </div>
    </main>
  );
}
