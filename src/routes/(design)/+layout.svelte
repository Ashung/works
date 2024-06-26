<script>
    import '$lib/style/style.postcss';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Footer from '$lib/components/footer.svelte';

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

    });
    
    function showLine(line, node) {
        line.style.left = node.offsetLeft + 'px';
        line.style.width = node.offsetWidth + 'px';
    }

    function handleOrientationchange() {
        const line = document.querySelector('nav .nav-underline');
        const current = document.querySelector('nav .page-nav a.current');
        setTimeout(showLine(line, current), 100);
    }

</script>

<svelte:window on:orientationchange={handleOrientationchange}/>

<nav>
    <input type="checkbox" id="page-nav-toggle">
    <label for="page-nav-toggle" class="page-nav-toggle" href={"#"}>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
    </label>
    <ul id="page-nav" class="page-nav">
        <li><a href="/" class:current={pageIndenity === 'home'}>首页</a></li>
        <li><a href="/os-ui" class:current={pageIndenity === 'os-ui'}>系统 UI 设计</a></li>
        <li><a href="/web" class:current={pageIndenity === 'web'}>Web UI 设计</a></li>
        <li><a href="/theme" class:current={pageIndenity === 'theme'}>主题图标设计</a></li>
        <li><a href="/other" class:current={pageIndenity === 'other'}>其他作品</a></li>
        <li><a href="/sketch-plugin" class:current={pageIndenity === 'sketch-plugin'}>Sketch 插件</a></li>
        <li><a href="/figma-plugin" class:current={pageIndenity === 'figma-plugin'}>Figma 插件</a></li>
    </ul>
    <div id="nav-underline" class="nav-underline"></div>
</nav>

<main>
    <slot></slot>
</main>

<Footer/>
