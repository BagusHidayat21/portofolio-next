# Struktur Database Portofolio

Database disimpan di Supabase, project `portofolio-andi` (region Southeast Asia, Singapore). Alamat project dan
publishable key disimpan di `.env.local`, yang tidak ikut di-commit karena tercantum di `.gitignore` (`.env*`).

## Tabel `projects`

Daftar proyek portofolio Andi Pratama.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `slug` | `text` | Penanda unik di alamat, misalnya `halaman-profil` (unik) |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Kalimat singkat tentang proyek |
| `kategori` | `text` | HTML, CSS, atau JavaScript |
| `minggu` | `text` | Minggu proyek dibuat, misalnya `Minggu 01` |
| `fitur` | `text[]` | Daftar hal yang dipelajari (array teks) |
| `gambar_url` | `text` | Alamat gambar di folder `public`, misalnya `/proyek/proyek-profil.png` |

RLS aktif. Policy `Pengunjung boleh membaca proyek`: peran `anon` boleh `select` semua baris.

## Tabel `messages`

Pesan dari form kontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

RLS aktif tanpa policy, sehingga pengunjung tidak bisa membaca pesan. Policy `insert` dibuat di Minggu 15.
