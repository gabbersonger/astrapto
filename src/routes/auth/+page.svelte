<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { Label } from "$lib/components/ui/label";

    let { form } = $props();
</script>

Login

<form method="POST" action="?/login">
    {#if form?.missing}<p class="error">The email field is required</p>{/if}
    {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}

    <Label class="sr-only" for="email">Email</Label>
    <Input
        name="email"
        placeholder="name@example.com"
        value={form?.email ?? ""}
        type="email"
        autocapitalize="none"
        autocomplete="email"
        autocorrect="off"
    />
    <Input
        name="password"
        placeholder="password"
        type="password"
        autocapitalize="none"
        autocorrect="off"
    />
    <Button type="submit">Submit</Button>
</form>
