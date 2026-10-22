import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";

async function ambilProyek(slug) {
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = await ambilProyek(slug);

  if (!item) {
    return { title: "Proyek tidak ditemukan" };
  }
  return {
    title: item.judul,
    description: item.deskripsi,
    openGraph: {
      title: item.judul,
      description: item.deskripsi,
      url: `/proyek/${slug}`,
      siteName: "Portofolio Andi Pratama",
      locale: "id_ID",
      type: "article",
      images: [item.gambar_url],
    },
  };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const item = await ambilProyek(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/proyek" className="text-sm font-semibold text-aksen hover:underline">
        &larr; Kembali ke daftar proyek
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{item.judul}</h1>
      <div className="mt-3 flex items-center gap-3">
        <Badge>{item.kategori}</Badge>
        <span className="text-muted-foreground">Dibuat di {item.minggu}</span>
      </div>
      <Image
        src={item.gambar_url}
        alt={`Tangkapan layar ${item.judul}`}
        width={640}
        height={420}
        loading="eager"
        className="mt-6 h-auto w-full rounded-xl border border-border"
      />
      <p className="mt-6 text-lg">{item.deskripsi}</p>

      <Separator className="my-8" />
      <h2 className="text-2xl font-bold text-primary">Yang Saya Pelajari</h2>
      <ul className="mt-3 list-disc pl-5">
        {item.fitur.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
