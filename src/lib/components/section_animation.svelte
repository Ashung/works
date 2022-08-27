<script>
    import { onMount } from 'svelte';
    let scrollY;
    let innerHeight;

    onMount(() => {
        handleScroll();
    });

    function handleScroll() {
        const sections = document.querySelectorAll('.works');
        sections.forEach(node => {
            if (node.getBoundingClientRect().top < innerHeight - 80) {
                node.classList.add('animate-section');
            }
            if (node.getBoundingClientRect().top > innerHeight + 160) {
                node.classList.remove('animate-section');
            }
        });
    }
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={innerHeight} on:scroll={handleScroll} on:resize={handleScroll} on:orientationchange={handleScroll}/>
