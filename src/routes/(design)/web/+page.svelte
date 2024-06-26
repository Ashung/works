<script>
    import { base } from '$app/paths';
    import Heading from '$lib/components/heading.svelte';
    import Description from '$lib/components/description.svelte';
    import SectionThumbs from '$lib/components/section_thumbs.svelte';

    const work_web_ui_guide = Array.from({length: 39}).map((_, index) => {
        return { image: '/cadothy_sass/g_' + (index + 1) + '.jpg' }
    });
    
    const work_web_ui_page = Array.from({length: 10}).map((_, index) => {
        return { image: '/cadothy_sass/w_' + (index + 1) + '.jpg' }
    });

    const work_web_site = [
        { image: '/cadothy_site/w_8.jpg', text: 'Amaze 产品介绍，响应式设计' },
        { image: '/cadothy_site/w_1.jpg', text: '首页和代理商' },
        { image: '/cadothy_site/w_2.jpg', text: '首页（平板模式）' },
        { image: '/cadothy_site/w_3.jpg', text: '首页（手机模式）' },
        { image: '/cadothy_site/w_4.jpg', text: 'Valor 产品介绍' },
        { image: '/cadothy_site/w_5.jpg', text: 'Amaze 产品介绍' },
        { image: '/cadothy_site/w_6.jpg', text: '帮助中心相关页面' },
        { image: '/cadothy_site/w_7.jpg', text: '帮助中心 H5' },
    ];
</script>

<SectionThumbs/>

<section class="works">
    <Heading title="卡多希智能云" date="2020/07" tools="Sketch"></Heading>
    <Description>
        <p>卡多希智能云是为用户提供直播云手机、文件存储等服务的 Web 端 SaaS 系统。网站使用 Ant Design Vue 使用前端框架搭建。</p>
        <p>在项目负责所有界面的设计，同时也对框架的配色、图标、前端组件都重新做了设计。</p>
    </Description>
    <div class="figure">
        <div class="work-thumbs-grid thumbs-grid-3">
        {#each work_web_ui_guide as item}
            <img src="{base}{item.image}" srcset="{base}{item.image} 2x" loading="lazy" alt="">
        {/each}
        </div>
        <div class="caption">UI 规范，包括字体、色彩、布局、组件、标注等</div>
    </div>
    <figure>
        <img src="{base}/cadothy_sass/icon.png" srcset="{base}/cadothy_sass/icon.png 2x" loading="lazy" alt="">
        <figcaption>16px 图标，SVG 或图标字体格式</figcaption>
    </figure>
    <div class="figure">
        <div class="work-thumbs-grid thumbs-grid-2">
        {#each work_web_ui_page as item}
            <img src="{base}{item.image}" srcset="{base}{item.image} 2x" loading="lazy" alt="">
        {/each}
        </div>
        <div class="caption">部分界面</div>
    </div>
</section>

<section class="works work-web-site">
    <Heading title="卡多希官方网站设计" date="2020/10 - 2022/07" tools="Sketch, Photoshop" programme="SvelteKit"></Heading>
    <Description>
        <p>卡多希官方网站 (<a href="https://www.cadothy.com" target="_blank">www.cadothy.com</a>) 对标目前主要的电子产品网站的内容结构和设计风格，主要展示产品和服务信息、公司介绍、帮助文档、新闻资讯等等。在设计上主页、产品、新闻和文档采用不同版式，所有页面均使用响应式设计。整个网站的设计重点在于产品介绍页面，使用高清产品渲染图、吸引人的文案、视频和精心设计的动画来详细描述产品特性。</p>
        <p>经历多次改版，从静态页面到目前的服务端渲染，我在项目中负责界面设计、网站架构、前端至后端的工作。建站方案采用 JAMstack 架构，服务端使用 Strapi 作为内容管理系统，前端选择 SvelteKit 框架，部署时使用 SSR 服务端渲染以满足 SEO 需要。</p>
    </Description>
    {#each work_web_site as item}
    <figure>
        <img src="{base}{item.image}" srcset="{base}{item.image} 2x" loading="lazy" alt="">
        <figcaption>{item.text}</figcaption>
    </figure>
    {/each}
</section>