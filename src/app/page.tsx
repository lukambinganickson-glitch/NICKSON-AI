import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Home() {
  const db = await createSupabaseServerClient();
  const { data: { user } } = await db.auth.getUser();
  if (user) redirect("/dashboard");
  redirect("/login");
}
