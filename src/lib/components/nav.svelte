<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'; 
    let pageNavWrap;
    $: pageIndenity = $page.url.pathname.split('/')[1] || 'home';
    
    onMount(() => {

        const navUnderLine = pageNavWrap.querySelector('.nav-underline');
        const pageNavItems = pageNavWrap.querySelectorAll('.page-nav a');
        const pageNavCurrent = pageNavWrap.querySelector('.page-nav a.current');

        showLine(pageNavCurrent);

        pageNavItems.forEach(item => {
            item.addEventListener('mouseover', event => {
                showLine(item);
            });
            item.addEventListener('mouseout', event => {
                showLine(pageNavCurrent);
            });
        });

        function showLine(node) {
            navUnderLine.style.left = node.offsetLeft + 'px';
            navUnderLine.style.width = node.offsetWidth + 'px';
        }
    });
</script>

<nav bind:this={pageNavWrap}>
    <input type="checkbox" id="page-nav-toggle">
    <label for="page-nav-toggle" class="page-nav-toggle" href={"#"}>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
    </label>
    <ul id="page-nav" class="page-nav">
        <li><a href="/" class:current={pageIndenity === 'home'}>设计作品</a></li>
        <li><a href="/code" class:current={pageIndenity === 'code'}>开源项目</a></li>
        <li><a href="/resume" class:current={pageIndenity === 'resume'}>个人简历</a></li>
    </ul>
    <div id="nav-underline" class="nav-underline"></div>
</nav>