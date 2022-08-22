<script>
    import '$lib/style/common.postcss';
    import '$lib/style/home.postcss';
    import '$lib/style/resume.postcss';
    import { page, navigating } from '$app/stores';
    import Nav from '$lib/components/nav.svelte';
    import Footer from '$lib/components/footer.svelte';
    import PreloadingIndicator from '$lib/components/loading.svelte';

    $: section = $page.url.pathname.split('/')[1];
</script>

<Nav/>

{#if $navigating}
<PreloadingIndicator />
{/if}

<main>
    <slot></slot>
</main>

{#if section !== 'resume'}
<Footer/>
{/if}
