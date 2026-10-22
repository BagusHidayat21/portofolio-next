import FormPin from "@/components/FormPin";
import KonfirmasiHapus from "@/components/KonfirmasiHapus";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { hapusPesan, keluarKelola, sematkanPesan } from "./actions";

export const metadata = {
  title: "Kelola Data",
};

export default async function Kelola() {
  if (!(await sudahMasuk())) {
    return (
      <main className="mx-auto w-full max-w-md px-4 py-10">
        <h1 className="text-3xl font-bold text-primary">Kelola Data</h1>
        <p className="mt-3 text-muted-foreground">Halaman ini khusus pemilik portofolio.</p>
        <Card className="mt-6">
          <CardContent>
            <FormPin />
          </CardContent>
        </Card>
      </main>
    );
  }

  const { data: daftarPesan } = await supabaseAdmin
    .from("buku_tamu")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Kelola Data</h1>
        <form action={keluarKelola}>
          <Button type="submit" variant="outline">
            Keluar
          </Button>
        </form>
      </div>

      <h2 className="mt-8 text-2xl font-bold text-primary">Pesan Buku Tamu</h2>
      <div className="mt-4 space-y-4">
        {daftarPesan && daftarPesan.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.nama}</CardTitle>
              <CardDescription>{item.pesan}</CardDescription>
              {item.disematkan && <Badge>Disematkan</Badge>}
            </CardHeader>
            <CardContent className="flex gap-2">
              <form action={sematkanPesan}>
                <input type="hidden" name="id" value={item.id} />
                <input type="hidden" name="sematkan" value={item.disematkan ? "tidak" : "ya"} />
                <Button type="submit" variant="outline" size="sm">
                  {item.disematkan ? "Lepas Sematan" : "Sematkan"}
                </Button>
              </form>
              <KonfirmasiHapus
                id={item.id}
                aksi={hapusPesan}
                judul="Hapus pesan ini?"
                keterangan={`Pesan dari ${item.nama} akan dihapus permanen dari buku tamu.`}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
