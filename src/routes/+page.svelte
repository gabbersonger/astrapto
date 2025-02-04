<script lang="ts">
    let { data } = $props();
</script>

Astrapto

<ul>
    {#each data.decks as deck}
        <li>{deck.name}</li>
    {/each}
</ul>
