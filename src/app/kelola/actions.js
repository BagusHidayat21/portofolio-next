"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function masukKelola(stateSebelum, formData) {
  const pin = formData.get("pin");

  if (pin !== process.env.ADMIN_PIN) {
    return { error: "PIN salah. Coba lagi." };
  }

  const kue = await cookies();
  kue.set("pin_admin", pin, { httpOnly: true, sameSite: "strict", maxAge: 60 * 60 });
  return {};
}

export async function keluarKelola() {
  const kue = await cookies();
  kue.delete("pin_admin");
}

export async function sematkanPesan(formData) {
  if (!(await sudahMasuk())) {
    return;
  }

  const id = formData.get("id");
  const sematkan = formData.get("sematkan") === "ya";
  await supabaseAdmin.from("buku_tamu").update({ disematkan: sematkan }).eq("id", id);

  revalidatePath("/kelola");
  revalidatePath("/buku-tamu");
}

export async function hapusPesan(formData) {
  if (!(await sudahMasuk())) {
    return;
  }

  const id = formData.get("id");
  await supabaseAdmin.from("buku_tamu").delete().eq("id", id);

  revalidatePath("/kelola");
  revalidatePath("/buku-tamu");
}
