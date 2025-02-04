import { redirect, fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async ({ request, locals }) => {
    const form_data = await request.formData();
    const email = form_data.get("email");
    const password = form_data.get("password");

    if (!email || !password) {
      return fail(400, { email, missing: true });
    }

    const { error } = await locals.supabase.auth.signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    });
    if (error) {
      return fail(400, { email, incorrect: true });
    } else {
      redirect(303, "/app");
    }
  },
} satisfies Actions;
