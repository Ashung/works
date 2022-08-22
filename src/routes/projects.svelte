<script>
    import Heading from '$lib/components/heading.svelte';
    import Slide from '$lib/components/slide.svelte';
    import { onMount } from 'svelte';
    import ScrollMagic from 'scrollmagic?client';
    // import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js?client';

    const project_automate = Array.from({length: 16}).map((_, index) => {
        return '/projects/automate_' + (index + 1) + '.jpg';
    });
    const project_android_res_export = Array.from({length: 8}).map((_, index) => {
        return { image: '/projects/android_res_export_' + (index + 1) + '.jpg' }
    });

    onMount(() => {

        const controller = new ScrollMagic.Controller();

        fetch('https://api.github.com/repos/Ashung/Automate-Sketch').then(response => {
            if (response.ok) {
                response.json().then(json => {
                    document.getElementById('project-star').textContent = json.stargazers_count;;
                });
            }
        });

        const projectAutomate = document.querySelector('.project-automate');
        const projectAutomateSlide = document.querySelector('.sequence-player');
        let projectAutomateSlidePlayer = null;
        let counter = 0;
        function slidePlayer() {
            const images = projectAutomateSlide.querySelectorAll('img');
            images.forEach(img => {
                img.style.opacity = 0;
            });
            images[counter % images.length].style.opacity = 1;
            counter ++;
        }
        const scene1 = new ScrollMagic.Scene({triggerElement: '.project-automate', duration: projectAutomate.offsetHeight})
            .addTo(controller)
            // .addIndicators()
            .on('enter',  e => {
                projectAutomateSlidePlayer = setInterval(slidePlayer, 1000);
            })
            .on('leave', e => {
                clearInterval(projectAutomateSlidePlayer);
            });
        
        // 半年下载量统计 26*7=182 天
        const chart = document.getElementById('npm-chart');
        const chartLine = document.getElementById('npm-chart-line');
        const chartFill = document.getElementById('npm-chart-fill');
        const chartCursor = document.getElementById('npm-chart-cursor');
        const chartDownloads = document.getElementById('npm-chart-downloads');
        const chartDay = document.getElementById('npm-chart-day');
        const endDate = getDateString(-1);
        const startDate = getDateString(-182);
        const npmDownloadApiUrl = `https://api.npmjs.org/downloads/range/${startDate}:${endDate}/svg2vectordrawable`;

        fetch(npmDownloadApiUrl).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    let downloads = [];
                    let counts = [];
                    for (let i = 0; i < json.downloads.length; i += 7) {
                        let sumWeek = json.downloads.slice(i, i+7).reduce((a, b) => a + b.downloads, 0);
                        counts.push(sumWeek);
                        downloads.push({downloads: sumWeek, day: `${json.downloads[i]['day']} - ${json.downloads[i+6]['day']}`});
                    }
                    let max = Math.max(...counts);
                    let pathData = counts.map((count, i) => {
                        return `${i === 0 ? 'M' : 'L'}${(300/downloads.length)*i},${(max-count)*100/max+10}`;
                    }).join('');
                    chartLine.setAttribute('d', pathData);
                    chartFill.setAttribute('d', pathData + 'V120 L0,120 z');
                    chartDownloads.innerText = downloads[downloads.length - 1].downloads;
                    chart.addEventListener('mousemove', e => {
                        let index = Math.ceil(downloads.length * (e.clientX - chart.getBoundingClientRect().left) / 300);
                        if (index < downloads.length) {
                            chartCursor.setAttribute('x1', 300 * index / downloads.length);
                            chartCursor.setAttribute('x2', 300 * index / downloads.length);
                            chartDay.innerText = downloads[index].day;
                            chartDownloads.innerText = downloads[index].downloads;
                        }
                    });
                    chart.addEventListener('mouseout', e => {
                        chartCursor.setAttribute('x1', '-10');
                        chartCursor.setAttribute('x2', '-10');
                        chartDay.innerText = '最近一周下载量';
                        chartDownloads.innerText = downloads[downloads.length - 1].downloads;
                    });
                });
            }
        });

        let s2vCodePlaying = false;
        const s2vCode = document.getElementById('s2v-code');
        const scene2 = new ScrollMagic.Scene({triggerElement: '.code-window', duration: 200})
            .addTo(controller)
            // .addIndicators()
            .on('enter',  e => {
                if (s2vCodePlaying === false) {
                    s2vCodePlaying = true;
                    const speed = 200;
                    const code = 'npm install svg2vectordrawable -g\n$ s2v -i input.svg -o output.xml\n$ ';
                    let delay = 0;
                    setTimeout(() => typeWriter(s2vCode, code, speed), delay);
                    delay += code.length * speed + speed;
                    setTimeout(() => s2vCodePlaying = false, delay);
                }
            });

        return () => {
            if (projectAutomateSlidePlayer) {
                clearInterval(projectAutomateSlidePlayer);
            }
            controller.removeScene([scene1, scene2]);
        }
    });

    function typeWriter(element, text, speed) {
        element.innerHTML = '';
        let i = 0;
        type();
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                setTimeout(type, speed);
                i ++;
            }
        }
    }

    function getDateString(offset) {
        let today = new Date();
        today.setTime(today.getTime() + 24 * 3600 * 1000 * offset - (today.getTimezoneOffset() * 60 * 1000));
        return today.toISOString().substring(0, 10);
    }
    
</script>

<div class="projects">
    <section class="works project project-automate">
        <div class="works-logo">
            <img src="/projects/automate_logo.svg" alt="">
        </div>
        <Heading title="Automate Sketch" date="2015/09 - ..." tools="Sketch" programme="JavaScript, CocoaScript" license="MIT" url="https://github.com/Ashung/Automate-Sketch">
            <p>Automate 集成了很多实用功能，填补了 Sketch 很多缺失功能，截至目前已有近 290 多项功能，几乎囊括了 Sketch 各个方面的高效操作。包括 Apple，Google，Microsoft，Amazon，Porsche，阿里巴巴在内的许多国内外知名公司的设计师都是它的深度用户，获得不少设计师的好评和推荐。</p>
        </Heading>
        <ul class="sketch-plugin-stats">
            <li><strong id="project-star">0</strong>GitHub Star</li>
            <li><strong>292</strong>功能</li>
            <li><strong>1K+</strong>日平均用户</li>
            <li><strong>2K+</strong>日平均会话</li>
            <li><strong>∞</strong>节约时间</li>
        </ul>
        <div class="sequence-player">
            {#each project_automate as item}
                <img src={item} srcset={`${item} 2x`} alt="">
            {/each}
        </div>
    </section>

    <section class="works project">
        <div class="works-logo">
            <img src="/projects/android_res_export_logo.png" srcset="/projects/android_res_export_logo.png 2x" alt="">
        </div>
        <Heading title="Android Res Export" date="2016/07 - ..." tools="Sketch" programme="JavaScript, CocoaScript, HTML, CSS" license="MIT" url="https://github.com/Ashung/Android_Res_Export">
            <p>插件支持全部的 Android 资源格式，包括多种尺寸的 PNG / WebP 位图、Nine-patch 位图、响应式应用图标、Vector Drawable 矢量资源、Nine-patch 效果预览、形状和色彩代码。是国内手机厂商设计团队和 Android App 设计师的必备插件。</p>
        </Heading>
        <ul class="plugin-features">
            <li>
                <img src="/projects/android_png.png" srcset="/projects/android_png.png 2x" alt="">PNG / WebP
            </li>
            <li>
                <img src="/projects/android_ninepatch.png" srcset="/projects/android_ninepatch.png 2x" alt="">Nine-patch
            </li>
            <li>
                <img src="/projects/android_vector.png" srcset="/projects/android_vector.png 2x" alt="">Vector Drawable
            </li>
            <li>
                <img src="/projects/android_icon.png" srcset="/projects/android_icon.png 2x" alt="">Adaptive Icon
            </li>
            <li>
                <img src="/projects/android_xml.png" srcset="/projects/android_xml.png 2x" alt="">Shape XML
            </li>
            <li>
                <img src="/projects/android_color.png" srcset="/projects/android_color.png 2x" alt="">Color XML
            </li>
        </ul>
        <Slide items={project_android_res_export} autoplay={true}/>
    </section>

    <section class="works project">
        <Heading title="SVG to VectorDrawable" date="2015/08 - ..." programme="JavaScript, Node.js" license="MIT" url="https://www.npmjs.com/package/svg2vectordrawable">
            <p>用于将 SVG 转换为 Android Vector Drawable 的 JavaScript 模块和命令行工具。使用 SVGO 首先压缩优化代码，使其生成的 XML 代码更精简。项目已经过多次版本迭代，在 github 社区也获得不少帮助，在同类中下载量最高。</p>
        </Heading>
        <div class="npm-download-chart">
            <div class="chart-text">
                <div id="npm-chart-day">最近一周下载量</div>
                <div id="npm-chart-downloads">000</div>
            </div>
            <svg id="npm-chart" width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
                <path id="npm-chart-fill" fill="rgba(137, 86, 255, .2)"></path>
                <path id="npm-chart-line" fill="none" stroke-width="4" stroke="rgb(137, 86, 255)"></path>
                <line id="npm-chart-cursor" x1="-10" y1="0" x2="-10" y2="120" stroke="rgb(137, 86, 255)" stroke-width="4"></line>
            </svg>
        </div>
        <div class="code-window">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
                <circle cx="6" cy="6" r="6" fill="#FF5F56"></circle>
                <circle cx="26" cy="6" r="6" fill="#FFBD2E" ></circle>
                <circle cx="46" cy="6" r="6" fill="#27C93F"></circle>
            </svg>
            <pre><code>$ <span id="s2v-code"></span></code></pre>
        </div>
    </section>

    <section class="works project">
        <Heading title="Import Colors" date="2019/02 - ..." tools="Sketch" programme="JavaScript" license="MIT" url="https://github.com/Ashung/import-colors-sketch">
            <p>用于导入或转换包括 Photoshop，Illustrator 在内的多种色板格式文件，支持文本格式使得色彩管理更加方便，也可以作为设计规范中的色彩库管理，或设计文件的主题色替换。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/import_colors.jpg" srcset="/projects/import_colors.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="Android Resources Export" date="2019/07 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/c/plugin/735452896889481850/Android-Resources-Export">
            <p>Figma 首批上线的插件之一，用于导出多尺寸 PNG，点九资源，响应式图标等资源，解决了 Figma 无法将多种尺寸资源导出到 Android 特定的文件结构，以及处理点九资源多种尺寸的问题。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/android_resources_export.jpg" srcset="/projects/android_resources_export.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="MixFonts" date="2019/08 - ..." tools="Figma" programme="JavaScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/735711462872799891/MixFonts">
            <p>用于中西文混排为文本图层中的中文和西文指定不同的字体，以及为解决中文输入的实时文本编辑。可以保存多种混排预设组合。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/mixfonts.jpg" srcset="/projects/mixfonts.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="Data from Local" date="2019/09 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/759249283654441170/Data-From-Local">
            <p>使用本地的文本和图片的数据填充插件，将文本文件或多张图片拖放到插件界面就可以为选中图层快速填充内容。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/data_from_local.jpg" srcset="/projects/data_from_local.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="Frame Resizer" date="2020/02 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/807879270674045537/Frame-Resizer">
            <p>Frame 尺寸修改插件，解决了 Figma 默认没有按方向调整尺寸的功能，以及无法在不修改内部图层约束的情况快速调整至特定尺寸而不影响内部图层。其中尺寸预设功能，可以快速批量修改 Frame 尺寸。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/frame_resizer.jpg" srcset="/projects/frame_resizer.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="Android Vector Drawable" date="2020/02 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/797369763563831541/Android-Vector-Drawable">
            <p>实时查看选中图层的 Vector Drawable 代码，以及复制和导出代码功能。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/android_vector_drawable.jpg" srcset="/projects/android_vector_drawable.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="Sketch Stuffing" date="2018/10 - ..." tools="Sketch" programme="JavaScript" license="MIT" url="https://github.com/Ashung/import-colors-sketch">
            <p>Sketch 中文数据插件，除了基础的人名、省份城市、邮箱、电话等通用数据，基于文件次序或随机的自定义数据等，通过高级配置能够生成阳历农历日期时间、随机友好格式时间、自定义编号、自定义序列数值、自定义表达式等。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/stuffing.jpg" srcset="/projects/stuffing.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="Design Systems" date="2017/05 - 2020/05" tools="Sketch" programme="JavaScript, CocoaScript" license="MIT" url="https://github.com/Ashung/design-systems">
            <p>收集常见设计系统，用于跳转到设计系统的官方页面。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/design_systems.jpg" srcset="/projects/design_systems.jpg 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="Swatches" date="2017/02 - 2018/10" tools="Sketch" programme="JavaScript, CocoaScript, HTML, CSS" license="Apache 2.0" url="https://github.com/Ashung/Sketch_Swatches">
            <p>(停止维护) Sketch 色板管理插件。由于 Sketch 已提供类似色板功能，该项目停止维护。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/swatches.png" srcset="/projects/swatches.png 2x" alt="">
        </div>
    </section>

    <section class="works project">
        <Heading title="HSL Color Picker" date="2016/11 - 2018/11" tools="Sketch" programme="JavaScript, CocoaScript, HTML, CSS" license="MIT" url="https://github.com/Ashung/HSL_Color_Picker">
            <p>(停止维护) Sketch HSL 取色器插件。由于 Sketch 53 已包含 HSL 取色功能，该项目停止维护。</p>
        </Heading>
        <div class="project-image">
            <img src="/projects/hsl_color_picker.png" srcset="/projects/hsl_color_picker.png 2x" alt="">
        </div>
    </section>

</div>
