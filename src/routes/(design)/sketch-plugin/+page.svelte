<script>
    import Heading from '$lib/components/heading.svelte';
    import Description from '$lib/components/description.svelte';
    import Scroller from '$lib/components/scroller.svelte';
    import Slide from '$lib/components/slide.svelte';
    import SectionThumbs from '$lib/components/section_thumbs.svelte';
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    const project_automate = Array.from({length: 16}).map((_, index) => {
        return '/projects/automate_' + (index + 1) + '.jpg';
    });
    const project_android_res_export = Array.from({length: 8}).map((_, index) => {
        return { image: base + '/projects/android_res_export_' + (index + 1) + '.jpg' }
    });

    let projectAutomateSlidePlayer = null;
    let randomComment = null;
    let counter = 0;

    const comments = [
        {
            name: 'Louis',
            text: 'Why did I not find your Automate plugin earlier? It saved me many hours of work. Thank you for this brilliant plugin!'
        },
        {
            name: 'Matthew',
            text: 'Couldn\'t use sketch without your Automate plugin! Thanks for all your hard work.'
        },
        {
            name: 'Jonnotie',
            text: 'Best plugin ever. Saved me a ton of time.'
        },
        {
            name: 'Raymond',
            text: 'Automate is life changing! Thanks for the awesome work.'
        },
        {
            name: 'Lin Kevin',
            text: 'Thank you for all the Sketch plugin features you\'ve implemented! Keep up the good work!'
        },
        {
            name: 'Carlin Jason',
            text: 'Automate is incredible!'
        }
    ];

    onMount(() => {

        fetch('https://api.github.com/repos/Ashung/Automate-Sketch').then(response => {
            if (response.ok) {
                response.json().then(json => {
                    document.getElementById('project-star').textContent = json.stargazers_count;;
                });
            }
        });

        return () => {
            if (projectAutomateSlidePlayer) {
                clearInterval(projectAutomateSlidePlayer);
            }
            if (randomComment) {
                clearInterval(randomComment);
            }
        }
    });

    let handleScroll = (entry) => {
        // Automate
        const projectAutomate = document.querySelector('.project-automate');
        function slidePlayer() {
            const images =  document.querySelectorAll('.sequence-player img');
            images.forEach(img => {
                img.style.opacity = 0;
            });
            images[counter % images.length].style.opacity = 1;
            counter ++;
        }
        if (entry.target === projectAutomate) {
            if (entry.isIntersecting) {
                projectAutomateSlidePlayer = setInterval(slidePlayer, 1000);
                changeComment(comments);
                randomComment = setInterval(() => changeComment(comments), 4000);
            } else {
                clearInterval(projectAutomateSlidePlayer);
                clearInterval(randomComment);
            }
        }
    };

    function changeComment(comments) {
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
        let comment = comments[Math.floor(Math.random() * comments.length)];
        quoteText.innerText = comment.text;
        quoteAuthor.innerText = comment.name;
        setTimeout(() => {
            quoteText.style.opacity = '0';
            quoteAuthor.style.opacity = '0';
        }, 3000);
    }
</script>

<Scroller query="[data-scroll-trigger]" handleScroll={handleScroll}/>

<SectionThumbs/>

<section class="works project project-automate" data-scroll-trigger>
    <div class="works-logo">
        <img src="{base}/projects/automate_logo.svg" alt="">
    </div>
    <Heading title="Automate Sketch" date="2015/09 - ..." tools="Sketch" programme="JavaScript, CocoaScript" license="MIT" url="https://github.com/Ashung/Automate-Sketch"></Heading>
    <Description>
        <p>Automate 集成了很多实用功能，填补了 Sketch 很多缺失功能，截至目前已有近 290 多项功能，几乎囊括了 Sketch 各个方面的高效操作。包括 Apple，Google，Microsoft，Amazon，Porsche，阿里巴巴在内的许多国内外知名公司的设计师都是它的深度用户，获得不少设计师的好评和推荐。</p>
    </Description>
    <ul class="sketch-plugin-stats">
        <li><strong id="project-star">0</strong>GitHub Star</li>
        <li><strong>292</strong>功能</li>
        <li><strong>1K+</strong>日平均用户</li>
        <li><strong>2K+</strong>日平均会话</li>
        <li><strong>∞</strong>节约时间</li>
    </ul>
    <div class="sequence-player">
        {#each project_automate as item}
        <img src="{base}{item}" srcset="{base}{item} 2x" loading="lazy" alt="">
        {/each}
    </div>
    <Heading title="他们在使用 Automate" sub_heading="true"></Heading>
    <div class="works-content plugin-logos">
        <img src="{base}/projects/logos.jpg" srcset="{base}/projects/logos.jpg 2x" loading="lazy" alt="">
    </div>
    <Heading title="设计师的评价" sub_heading="true"></Heading>
    <div class="plugin-quote">
        <blockquote id="quote-text"></blockquote>
        <span id="quote-author"></span>
    </div>
</section>

<section class="works project">
    <div class="works-logo">
        <img src="{base}/projects/android_res_export_logo.png" srcset="{base}/projects/android_res_export_logo.png 2x" alt="">
    </div>
    <Heading title="Android Res Export" date="2016/07 - ..." tools="Sketch" programme="JavaScript, CocoaScript, HTML, CSS" license="MIT" url="https://github.com/Ashung/Android_Res_Export"></Heading>
    <Description>
        <p>插件支持全部的 Android 资源格式，包括多种尺寸的 PNG / WebP 位图、Nine-patch 位图、响应式应用图标、Vector Drawable 矢量资源、Nine-patch 效果预览、形状和色彩代码。是国内手机厂商设计团队和 Android App 设计师的必备插件。</p>
    </Description>
    <ul class="plugin-features">
        <li>
            <img src="{base}/projects/android_png.png" srcset="{base}/projects/android_png.png 2x" alt="">PNG / WebP
        </li>
        <li>
            <img src="{base}/projects/android_ninepatch.png" srcset="{base}/projects/android_ninepatch.png 2x" alt="">Nine-patch
        </li>
        <li>
            <img src="{base}/projects/android_vector.png" srcset="{base}/projects/android_vector.png 2x" alt="">Vector Drawable
        </li>
        <li>
            <img src="{base}/projects/android_icon.png" srcset="{base}/projects/android_icon.png 2x" alt="">Adaptive Icon
        </li>
        <li>
            <img src="{base}/projects/android_xml.png" srcset="{base}/projects/android_xml.png 2x" alt="">Shape XML
        </li>
        <li>
            <img src="{base}/projects/android_color.png" srcset="{base}/projects/android_color.png 2x" alt="">Color XML
        </li>
    </ul>
    <Slide items={project_android_res_export} autoplay={true}/>
</section>

<section class="works project">
    <Heading title="Import Colors" date="2019/02 - ..." tools="Sketch" programme="JavaScript" license="MIT" url="https://github.com/Ashung/import-colors-sketch"></Heading>
    <Description>
        <p>用于导入或转换包括 Photoshop，Illustrator 在内的多种色板格式文件，支持文本格式使得色彩管理更加方便，也可以作为设计规范中的色彩库管理，或设计文件的主题色替换。</p>
    </Description>
    <div class="project-image">
        <img src="{base}/projects/import_colors.jpg" srcset="{base}/projects/import_colors.jpg 2x" loading="lazy" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="Sketch Stuffing" date="2018/10 - ..." tools="Sketch" programme="JavaScript" license="MIT" url="https://github.com/Ashung/import-colors-sketch"></Heading>
    <Description>
        <p>Sketch 中文数据插件，除了基础的人名、省份城市、邮箱、电话等通用数据，基于文件次序或随机的自定义数据等，通过高级配置能够生成阳历农历日期时间、随机友好格式时间、自定义编号、自定义序列数值、自定义表达式等。</p>
    </Description>
    <div class="project-image">
        <img src="{base}/projects/stuffing.jpg" srcset="{base}/projects/stuffing.jpg 2x" loading="lazy" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="Design Systems" date="2017/05 - 2020/05" tools="Sketch" programme="JavaScript, CocoaScript" license="MIT" url="https://github.com/Ashung/design-systems"></Heading>
    <Description>
        <p>收集常见设计系统，用于跳转到设计系统的官方页面。</p>
    </Description>
    <div class="project-image">
        <img src="{base}/projects/design_systems.jpg" srcset="{base}/projects/design_systems.jpg 2x" loading="lazy" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="Swatches" date="2017/02 - 2018/10" tools="Sketch" programme="JavaScript, CocoaScript, HTML, CSS" license="Apache 2.0" url="https://github.com/Ashung/Sketch_Swatches"></Heading>
    <Description>
        <p>Sketch 色板管理插件。由于 Sketch 已提供类似色板功能，该项目停止维护。</p>
    </Description>    
    <div class="project-image">
        <img src="{base}/projects/swatches.png" srcset="{base}/projects/swatches.png 2x" loading="lazy" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="HSL Color Picker" date="2016/11 - 2018/11" tools="Sketch" programme="JavaScript, CocoaScript, HTML, CSS" license="MIT" url="https://github.com/Ashung/HSL_Color_Picker"></Heading>
    <Description>
        <p>Sketch HSL 取色器插件。由于 Sketch 53 已包含 HSL 取色功能，该项目停止维护。</p>
    </Description>
    <div class="project-image">
        <img src="{base}/projects/hsl_color_picker.png" srcset="{base}/projects/hsl_color_picker.png 2x" loading="lazy" alt="">
    </div>
</section>