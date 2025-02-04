import type { ServerLoad } from "@sveltejs/kit";

export const load = (async ({ locals: { safeGetSession }, cookies }) => {
  const { session } = await safeGetSession();
  return {
    session,
    cookies: cookies.getAll(),
  };
}) satisfies ServerLoad;
