import { redirect, type ServerLoad } from "@sveltejs/kit";

export const load = (async ({ locals }) => {
  locals.supabase.auth.signOut();
  redirect(303, "/auth");
}) satisfies ServerLoad;
