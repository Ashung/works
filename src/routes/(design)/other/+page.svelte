<script>
    import { base } from '$app/paths';
    import Heading from '$lib/components/heading.svelte';
    import Description from '$lib/components/description.svelte';
    import Scroller from '$lib/components/scroller.svelte';
    import SectionThumbs from '$lib/components/section_thumbs.svelte';
    import { onMount } from 'svelte';

    const work_desktop_app = [
        { image: '/cadothy_desktop/d_1.jpg', text: 'macOS 版主界面' },
        { image: '/cadothy_desktop/d_2.jpg', text: 'macOS 版主界面，深色模式' },
        { image: '/cadothy_desktop/d_3.jpg', text: 'Windows 版主界面' },
        { image: '/cadothy_desktop/d_4.jpg', text: 'Windows 版主界面，深色模式' },
        { image: '/cadothy_desktop/d_5.jpg', text: '试验性设计' },
        { image: '/cadothy_desktop/d_6.jpg', text: 'macos 安装器背景' },
        { image: '/cadothy_desktop/d_8.jpg', text: '功能图标（实际尺寸）' },
    ];

    const work_font = [
        { image: '/cadothy_sans/f_1.jpg', text: '基础字符' },
        { image: '/cadothy_sans/f_2.jpg', text: '字偶距' },
        { image: '/cadothy_sans/f_3.jpg', text: '部分连体字符' },
        { image: '/cadothy_sans/f_4.jpg', text: '上下文替换' },
        { image: '/cadothy_sans/f_5.jpg', text: '字体实际应用' },
    ];

    const project_theme_app = Array.from({length: 5}).map((_, index) => {
        return '/360os_theme_tools/theme_app_' + (index + 1) + '.jpg';
    });

    let min = 100;
    let max = 700;
    let value = 400;
    const weights = {
        thin: 100,
        extra_light: 200,
        light: 300,
        regular: 400,
        medium: 500,
        demi_bold: 600,
        bold: 700
    };
    $:style = `font-variation-settings: 'wght' ${value};`;
    $:rangeStyle = `background-size: ${percent(value)}% 100%;`;
    function setStyle(_value) {
        style = `font-variation-settings: 'wght' ${_value};`;
        value = _value;
    }
    function format(_key) {
        return _key.split('_').map(_s => {
            return _s[0].toUpperCase() + _s.substr(1);
        }).join(' ');
    }
    function percent(_value) {
        return (_value - min) * 100 / (max - min);
    }

    let projectThemeToolSlidePlayer = null;
    let projectThemeToolVideo;
    let counter = 0;
    let s2vCodePlaying = false;

    onMount(() => {

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

        return () => {
            if (projectThemeToolSlidePlayer) {
                clearInterval(projectThemeToolSlidePlayer);
            }
        }
    });

    let handleScroll = (entry) => {
        //
        const codeWindow = document.querySelector('.code-window');
        const s2vCode = document.getElementById('s2v-code');
        if (entry.target === codeWindow && entry.isIntersecting) {
            if (s2vCodePlaying === false) {
                s2vCodePlaying = true;
                const speed = 200;
                const code = 'npm install svg2vectordrawable -g\n$ s2v -i input.svg -o output.xml\n$ ';
                let delay = 0;
                setTimeout(() => typeWriter(s2vCode, code, speed), delay);
                delay += code.length * speed + speed;
                setTimeout(() => s2vCodePlaying = false, delay);
            }
        }

        //
        const projectThemeApp = document.querySelector('.project-theme-app');
        function slidePlayer() {
            const images =  document.querySelectorAll('.sequence-player img');
            images.forEach(img => {
                img.style.opacity = 0;
            });
            images[counter % images.length].style.opacity = 1;
            counter ++;
        }
        if (entry.target === projectThemeApp) {
            if (entry.isIntersecting) {
                projectThemeToolSlidePlayer = setInterval(slidePlayer, 1000);
            } else {
                clearInterval(projectThemeToolSlidePlayer);
            }
        }

        const themeToolsVideo = document.getElementById('theme-tools-video');
        if (entry.target === themeToolsVideo) {
            if (entry.isIntersecting) {
                let playPromise = themeToolsVideo.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        themeToolsVideo.play();
                    }).catch(error => {});
                }
            } else {
                let playPromise = themeToolsVideo.pause();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        themeToolsVideo.pause();
                    }).catch(error => {});
                }
            }
        }
    };

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

<Scroller query="[data-scroll-trigger]" handleScroll={handleScroll}/>

<SectionThumbs/>

<section class="works">
    <Heading title="卡多希睿眸桌面版 UI" date="2021/05" tools="Sketch" programme="Electron, HTML, CSS"></Heading>
    <Description>
        <p>卡多希睿眸桌面版是一个小型工具软件，用于捕捉屏幕或应用窗口等电脑端视频源作为直播设备的输入源。设计上使用小窗口和简洁的功能图标，用户可以直观选择想要采集的内容。应用兼容系统的浅色和深色模式，界面上的功能图标也会根据系统平台而改变。</p>
        <p>软件采用 Electron 跨平台方案。在这个项目中负责界面设计、Electron 界面逻辑、HTML/CSS 开发。</p>
    </Description>
    {#each work_desktop_app as item}
    <figure>
        <img src="{base}{item.image}" srcset="{base}{item.image} 2x" loading="lazy" alt="">
        <figcaption>{item.text}</figcaption>
    </figure>
    {/each}
</section>

<section class="works">
    <Heading title="Cadothy Sans 字体设计" date="2020/09" tools="Glyphs, Illustrator"></Heading>
    <Description>
        <p>Cadothy Sans 字体是由卡多希 VI 系统衍生出来的一套英文字体，用于各类场景上的产品名用字，字体的设计上延续了标志字体的简洁、现代、几何风格。</p>
        <p>字符集涵盖了大小写英文字母、数字和标点符号，功能包含字偶距调整和连体、变体等 Opentype 功能的设计。字体设计成可变字体，字重范围 100 - 700，静态版本字重包括 Thin, Extra Light, Light, Regular, Medium, Demi Bold, Bold 共 7 种。</p>
    </Description>
    {#each work_font as item}
    <figure>
        <img src="{base}{item.image}" srcset="{base}{item.image} 2x" loading="lazy" alt="">
        <figcaption>{item.text}</figcaption>
    </figure>
    {/each}
    <div class="font-preview">
        <div class="controls">
            {#each Object.keys(weights) as key}
            <button class="tab-button" class:current={value === weights[key]} on:click={() => setStyle(weights[key])}>{format(key)}</button>
            {/each}
        </div>
        <div class="range">
            <input type="range" min={min} max={max} bind:value={value} style={rangeStyle}>
            <code>wght:{value}</code>
        </div>
        <div class="preview" style={style}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<span>013469</span>~!@#$%^&*()_+-=[]|:;"',./?&lt;&gt;&lbrace;&rbrace;
            WATER JAVA LTE flash fish 12:00 A:1
        </div>
    </div>
</section>

<section class="works project">
    <Heading title="SVG to VectorDrawable" date="2015/08 - ..." programme="JavaScript, Node.js" license="MIT" url="https://www.npmjs.com/package/svg2vectordrawable"></Heading>
    <Description>
        <p>用于将 SVG 转换为 Android Vector Drawable 的 JavaScript 模块和命令行工具。有别于 Android Studio 内置的转换工具，项目适用于浏览器端和服务端，可以批量转换，可以集成到网站、设计软件插件或 CI 工具等等，项目中还使用了 SVGO 用于压缩优化代码，使其生成的 XML 代码更精简。</p>
    </Description>
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
    <div class="code-window" data-scroll-trigger>
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
            <circle cx="6" cy="6" r="6" fill="#FF5F56"></circle>
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" ></circle>
            <circle cx="46" cy="6" r="6" fill="#27C93F"></circle>
        </svg>
        <pre><code>$ <span id="s2v-code"></span></code></pre>
    </div>
</section>

<section class="works project project-theme-tools">
    <Heading title="360OS 系统主题工具" date="2018/01 - 2019/12" programme="Node.js"></Heading>
    <Description>
        <p>针对 360OS 系统主题机制，为解决客户主题定制需求，而开发的系统主题相关工具。</p>
        <p>由多个命令行工具组成的，考虑到操作效率以及服务端使用，将工具做成成命令行工具。功能包括制作系统主题包，壁纸自动裁切，文件批量命名等等。</p>
    </Description>
    <video id="theme-tools-video" muted playsinline loop data-scroll-trigger>
        <source type="video/mp4" src="{base}/360os_theme_tools/theme_cli_tools.mp4"/>
    </video>
</section>

<section class="works project project-theme-app" data-scroll-trigger>
    <Heading title="360OS 系统主题应用" date="2019/12" programme="Electron"></Heading>
    <Description>
        <p>针对 360OS 系统主题机制，使用 Electron 开发的桌面端主题工具应用。</p>
        <p>虽然命令行工具在效率上更具优势，但对于一般设计师门槛较高，桌面端应用解决了这种问题，让操作更直观，而且可以把设计师觉得繁琐工作都集成到桌面端应用内。</p>
    </Description>
    <div class="sequence-player">
        {#each project_theme_app as item}
        <img src="{base}{item}" srcset="{base}{item} 2x" loading="lazy" alt="">
        {/each}
    </div>
</section>
