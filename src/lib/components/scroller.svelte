<script>
    export let query = 'section';
    export let handleScroll;
    let innerHeight;
    import { onMount } from "svelte";
    
    onMount(() => {
        const observerElements = document.querySelectorAll(query);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    handleScroll(entry);
                })
            },
            {
                root: null,
                rootMargin: '0px 0px',
                threshold: 0
            }
        );
        observerElements.forEach(observerElement => {
            observer.observe(observerElement);
        });
    });
</script>

<svelte:window bind:innerHeight={innerHeight}/>
