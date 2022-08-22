<script>
    import '$lib/style/common.postcss';
    import '$lib/style/home.postcss';
    import '$lib/style/resume.postcss';
    import { onMount } from 'svelte';
    import { page, navigating } from '$app/stores';
    import Footer from '$lib/components/footer.svelte';
    import PreloadingIndicator from '$lib/components/loading.svelte';

    $: pageIndenity = $page.url.pathname.split('/')[1] || 'home';

    onMount(() => {

        const navUnderLine = document.querySelector('nav .nav-underline');
        const pageNavItems = document.querySelectorAll('nav .page-nav a');
        let pageNavCurrent = document.querySelector('nav .page-nav a.current');
        showLine(pageNavCurrent);

        pageNavItems.forEach(item => {
            item.addEventListener('mouseover', event => {
                showLine(item);
            });
            item.addEventListener('mouseout', event => {
                pageNavCurrent = document.querySelector('nav .page-nav a.current');
                showLine(pageNavCurrent);
            });
        });

        function showLine(node) {
            navUnderLine.style.left = node.offsetLeft + 'px';
            navUnderLine.style.width = node.offsetWidth + 'px';
        }
    });
</script>

<nav>
    <input type="checkbox" id="page-nav-toggle">
    <label for="page-nav-toggle" class="page-nav-toggle" href={"#"}>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
    </label>
    <ul id="page-nav" class="page-nav">
        <li><a href="/" class:current={pageIndenity === 'home'}>设计作品</a></li>
        <li><a href="/projects" class:current={pageIndenity === 'projects'}>开源项目</a></li>
        <li><a href="/resume" class:current={pageIndenity === 'resume'}>个人简历</a></li>
        {pageIndenity}
    </ul>
    <div id="nav-underline" class="nav-underline"></div>
</nav>

{#if $navigating}
<PreloadingIndicator />
{/if}

<main>
    <slot></slot>
</main>

{#if pageIndenity !== 'resume'}
<Footer/>
{/if}
