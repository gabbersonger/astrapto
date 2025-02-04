<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { Label } from "$lib/components/ui/label";
    import * as Alert from "$lib/components/ui/alert/index.js";
    import CircleAlert from "lucide-svelte/icons/circle-alert";

    let { form } = $props();
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="favicon.png" alt="Astrapto" />
        <br />
        <br />
        <h1
            class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        >
            Sign in to your account
        </h1>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" method="POST">
            {#if form?.missing || form?.incorrect}
                <Alert.Root variant="destructive">
                    <CircleAlert class="h-4 w-4" />
                    <Alert.Description>
                        {#if form?.incorrect}
                            Invalid credentials!
                        {:else if form?.missing}
                            The email field is required
                        {/if}
                    </Alert.Description>
                </Alert.Root>
            {/if}

            <div>
                <Label class="sr-only" for="email">Email address</Label>
                <Input
                    name="email"
                    placeholder="name@example.com"
                    value={form?.email ?? ""}
                    type="email"
                    autocapitalize="none"
                    autocomplete="email"
                    autocorrect="off"
                />
            </div>

            <div>
                <Label class="sr-only" for="password">Password</Label>
                <Input
                    name="password"
                    placeholder="password"
                    type="password"
                    autocapitalize="none"
                    autocorrect="off"
                />
            </div>

            <div>
                <Button type="submit" class="w-full">Sign In</Button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <a
                href="mailto:gabriel@ncachurch.com"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Email Gab</a
            >
        </p>
    </div>
</div>
