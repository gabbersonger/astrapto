import { db } from "$lib/db";

export async function load() {
  const { data } = await db.from("decks").select();
  return {
    decks: data ?? [],
  };
}
