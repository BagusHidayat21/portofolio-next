# Struktur Database Portofolio

Database disimpan di Supabase, project `portofolio-andi` (region Southeast Asia, Singapore). Alamat project,
publishable key, secret key (`SUPABASE_SECRET_KEY`), dan PIN halaman kelola (`ADMIN_PIN`) disimpan di `.env.local`,
yang tidak ikut di-commit karena tercantum di `.gitignore` (`.env*`).

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

## Tabel `skills`

Daftar keahlian Andi Pratama.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Dasar, Menengah, atau Mahir |

RLS aktif. Policy `Pengunjung boleh membaca keahlian`: peran `anon` boleh `select` semua baris.

## Tabel `buku_tamu`

Pesan publik dari halaman Buku Tamu. Dibuat dengan SQL `create table` di SQL Editor.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama pengirim (wajib) |
| `pesan` | `text` | Isi pesan (wajib) |
| `disematkan` | `bool` | `true` jika pesan disematkan di atas, bawaan `false` |

RLS aktif. Policy `Pengunjung boleh membaca buku tamu` (`select`) dan `Pengunjung boleh menulis buku tamu`
(`insert`) untuk peran `anon`. Mengubah dan menghapus pesan hanya lewat halaman `/kelola` dengan secret key.
