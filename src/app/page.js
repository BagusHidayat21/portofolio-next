import Hero from "@/components/Hero";
import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";

const hobi = ["Bermain futsal", "Membaca komik", "Mendesain poster"];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Andi Pratama"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <div className="mt-10 space-y-6">
        <Kartu judul="Tentang Saya">
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

        <Kartu judul="Keahlian">
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </Kartu>

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
                <tr key={baris.hari} className="border-b border-gray-200">
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
