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
        showLine(navUnderLine, pageNavCurrent);

        pageNavItems.forEach(item => {
            item.addEventListener('mouseover', event => {
                showLine(navUnderLine, item);
            });
            item.addEventListener('mouseout', event => {
                pageNavCurrent = document.querySelector('nav .page-nav a.current');
                showLine(navUnderLine, pageNavCurrent);
            });
            item.addEventListener('click', event => {
                const checkbox = document.getElementById('page-nav-toggle');
                checkbox.checked = false;
            });
        });

        function showLine(line, node) {
            line.style.left = node.offsetLeft + 'px';
            line.style.width = node.offsetWidth + 'px';
        }
    });

    function handleOrientationchange() {
        const line = document.querySelector('nav .nav-underline');
        const current = document.querySelector('nav .page-nav a.current');
        setTimeout(() => {
            line.style.left = current.offsetLeft + 'px';
            line.style.width = current.offsetWidth + 'px';
        }, 100);
    }
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
    </ul>
    <div id="nav-underline" class="nav-underline"></div>
</nav>

{#if $navigating}
<PreloadingIndicator/>
{/if}

<svelte:window on:orientationchange={handleOrientationchange}/>

<main>
    <slot></slot>
</main>

{#if pageIndenity !== 'resume'}
<Footer/>
{/if}
