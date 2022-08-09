<script>
    import '$lib/style/common.postcss';
    import '$lib/style/home.postcss';
    import Nav from '$lib/components/nav.svelte';
    import Heading from '$lib/components/heading.svelte';
    import SubHeading from '$lib/components/sub_heading.svelte';
    import Slide from '$lib/components/slide.svelte';
    import Container from '$lib/components/container.svelte';
    import { onMount } from 'svelte';
    import ScrollMagic from 'scrollmagic?client';
    import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js?client';

    const work_os_system = [
        { image: '/os_system/s_1.png', text: '部分系统公共组件。' },
        { image: '/os_system/s_2.png', text: '部分系统公共组件，深色模式适配。' },
        { image: '/os_system/s_4.png', text: '字体样式与色彩体系。' },
        { image: '/os_system/s_3.png', text: '系统应用栏与全屏窗口组件。' },
        { image: '/os_system/s_5.png', text: '导航与标签页。' },
        { image: '/os_system/s_6.png', text: '导航与标签页，深色模式。' },
        { image: '/os_system/s_7.png', text: '部分列表样式。' },
        { image: '/os_system/s_8.png', text: '部分内容块样式。' },
        { image: '/os_system/s_9.png', text: '部分内容块样式，深色模式。' },
        { image: '/os_system/s_10.png', text: '部分对话框样式。' },
        { image: '/os_system/s_11.png', text: '部分对话框样式，深色模式。' },
    ];
    const work_os_system_icons = [
        { image: '/os_system_icons/icon_1.png', text: '24px Android 系统图标 - 系统类' },
        { image: '/os_system_icons/icon_2.png', text: '24px Android 系统图标 - 系统类' },
        { image: '/os_system_icons/icon_3.png', text: '24px Android 系统图标 - 内容类' },
        { image: '/os_system_icons/icon_4.png', text: '24px Android 系统图标 - 影像类' },
        { image: '/os_system_icons/icon_5.png', text: '针对 Web 平台优化版 16px 图标' },
    ];
    const work_360os_ui = [
        { image: '/360os_ui/ui_1.png', text: '' },
        { image: '/360os_ui/ui_2.png', text: '' },
        { image: '/360os_ui/ui_3.png', text: '' },
        { image: '/360os_ui/ui_4.png', text: '' },
        { image: '/360os_ui/ui_5.png', text: '' },
        { image: '/360os_ui/ui_6.png', text: '' },
        { image: '/360os_ui/ui_7.png', text: '' },
    ];
    const work_360os_themes = [
        { image: '/360os_themes/theme_1.jpg', text: '针对海外市场的主题，采用不规则形状的图标设计，色彩鲜艳，风格活泼可爱，符合年轻人的喜好。' },
        { image: '/360os_themes/theme_2.jpg', text: '半写实风格图标设计，图标的形状采用横向长方形适合横向的平板设备。' },
        { image: '/360os_themes/theme_3.jpg', text: '360 F 系列手机默认主题。该系列手机是主要针对年轻群体千元机，默认主题的设计也倾向年轻活力，又不失品质。' },
        { image: '/360os_themes/theme_4.jpg', text: '针对 360 Q 系列而设计的主题。该系列手机是主要针对高端商务人群，主题的设计也给人豪华、品质和稳重的感觉。' },
        { image: '/360os_themes/theme_5.jpg', text: '针对海外市场定制的圣诞主题。在烘托节日气氛的同时，也保留了作为手机应用图标该有的辨识度。' },
        { image: '/360os_themes/theme_6.jpg', text: '单色图标搭配多彩的渐变背景。' },
        { image: '/360os_themes/theme_7.jpg', text: '风格尝试' },
        { image: '/360os_themes/theme_8.jpg', text: '风格尝试' },
    ];
    const work_coolpad_icon = [
        { image: '/coolpad/c1.png', text: '' },
        { image: '/coolpad/c2.png', text: '' },
        { image: '/coolpad/c3.png', text: '' },
        { image: '/coolpad/c4.png', text: '' },
        { image: '/coolpad/c5.png', text: '' },
        { image: '/coolpad/c6.png', text: '' },
        { image: '/coolpad/c7.png', text: '' },
        { image: '/coolpad/c8.png', text: '' },
    ];
    const work_doov_icon = [
        { image: '/doov/d1_1.png', text: '' },
        { image: '/doov/d1_2.png', text: '' },
        { image: '/doov/d1_3.png', text: '' },
        { image: '/doov/d1_4.png', text: '' },
        { image: '/doov/d1_5.png', text: '' },
        { image: '/doov/d1_6.png', text: '' },
        { image: '/doov/d1_7.png', text: '' },
        { image: '/doov/d1_8.png', text: '' },
        { image: '/doov/d1_9.png', text: '' },
        { image: '/doov/d2_1.png', text: '' },
        { image: '/doov/d2_2.png', text: '' },
        { image: '/doov/d2_3.png', text: '' },
        { image: '/doov/d2_4.png', text: '' },
        { image: '/doov/d2_5.png', text: '' },
        { image: '/doov/d3_1.png', text: '' },
        { image: '/doov/d3_2_2.png', text: '' },
        { image: '/doov/d3_2.png', text: '' },
        { image: '/doov/d3_3_2.png', text: '' },
        { image: '/doov/d3_3.png', text: '' },
        { image: '/doov/d3_4.png', text: '' },
        { image: '/doov/d3_6.png', text: '' },
        { image: '/doov/d3_7.png', text: '' },
        { image: '/doov/d3_8.png', text: '' },
        { image: '/doov/d4_1.png', text: '' },
        { image: '/doov/d4_2.png', text: '' },
        { image: '/doov/d4_3.png', text: '' },
        { image: '/doov/d4_4.png', text: '' },
        { image: '/doov/d6_1.png', text: '' },
        { image: '/doov/d6_2.png', text: '' },
        { image: '/doov/d7_1.png', text: '' },
        { image: '/doov/d7_2.png', text: '' },
    ];

    onMount(() => {

        const controller = new ScrollMagic.Controller();

        //
        const iconRadiusRange = document.getElementById('icon-radius');
        const smoothRadius = document.getElementById('icon-smooth-radius');
        const pathElement = document.getElementById('icon-shape');
        const pathElementWeather = document.getElementById('icon-shape-2');
        const iconPopupTip = document.getElementById('icon-popup-tip');
        iconRadiusRange.value = 40;
        changeMask();
        iconRadiusRange.addEventListener('change', changeMask);
        iconRadiusRange.addEventListener('change', () => iconPopupTip.remove());
        iconRadiusRange.addEventListener('input', changeMask);
        iconRadiusRange.addEventListener('input', () => iconPopupTip.remove());
        smoothRadius.addEventListener('change', changeMask);
        function changeMask() {
            let r = parseInt(iconRadiusRange.value);
            let d = '';
            const w = 104;
            iconRadiusRange.style.backgroundSize = `${r}% 100%`;
            if (smoothRadius.checked) {
                r = r * ((w / 2) - (4 / 3) * Math.tan(Math.PI / 8) * (w / 2)) / w;
                d = 'M0 ' + (w/2) +
                    ' C' + '0 ' + r + ' ' + r + ' 0 ' + (w/2) + ' 0' +
                    ' S' + w + ' ' + r + ' ' + w + ' ' + (w/2) +
                    ' S' + (w - r) + ' ' + w + ' ' + (w/2) + ' ' + w +
                    ' S0 ' + (w -r) + ' 0 ' + (w/2) +
                    'z';
            } else {
                if (r === 0) {
                    d = `M0 0 h${w} v${w} h-${w} z`;
                } else if (r === 100) {
                    d = `M0 ${w/2} a${w/2} ${w/2} 0 0 1 ${w} 0 a${w/2} ${w/2} 0 0 1 -${w} 0z`;
                } else {
                    r = r * 50 / 104;
                    d = 'M0 ' + r +
                        ' a' + r + ' -' + r + ' 0 0 1 ' + r + ' -' + r + ' h' + (w - 2 * r) +
                        ' a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + ' v' + (w - 2 * r) +
                        ' a-' + r + ' ' + r + ' 0 0 1 -' + r + ' ' + r + ' h-' + (w - 2 * r) +
                        ' a-' + r + ' -' + r + ' 0 0 1 -' + r + ' -' + r +
                        'z';
                }
            }
            pathElement.setAttribute('d', d);
            pathElementWeather.setAttribute('d', d);
        }

        const sectionTheme1 = document.getElementById('section-theme-1');
        const widgetBackground = document.getElementById('widget-bg');
        const widgetDate = document.getElementById('widget-date');
        const widgetTime = document.getElementById('widget-time');
        const widgetIconSun = document.getElementById('widget-icon-sun');
        const widgetIconMoon = document.getElementById('widget-icon-moon');
        const widgetSky = document.getElementById('widget-sky');
        const date = new Date();
        date.setHours(10);
        date.setMinutes(8);
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
        widgetDate.innerText = `${week}, ${month} ${date.getDate()}`;
        let doCreateWidgetSky = true;
        new ScrollMagic.Scene({triggerElement: '#widget-sky', duration: 240, offset: 100})
            // .addIndicators()
            .setPin("#widget")
            .addTo(controller)
            .on('enter', e => {
                if (doCreateWidgetSky) {
                    doCreateWidgetSky = false;
                    createWidgetSky();
                }
            })
            .on('progress', e => {
                let weatherTime = new Date(date.getTime() + e.progress * 1000 * 60 * 60 * 12);
                widgetTime.innerText = (weatherTime.getHours() < 10 ? '0' + weatherTime.getHours() : weatherTime.getHours())
                    + ':'
                    + (weatherTime.getMinutes() < 10 ? '0' + weatherTime.getMinutes() : weatherTime.getMinutes());
                if (weatherTime.getHours() > 18) {
                    widgetSky.style.opacity = '1';
                    sectionTheme1.style.backgroundColor = '#211D49';
                    widgetIconSun.style.top = '92px';
                    widgetIconMoon.style.top = '12px';
                    widgetBackground.style.backgroundPositionY = '-311px';
                } else {
                    widgetSky.style.opacity = '0';
                    sectionTheme1.style.backgroundColor = '#322C6E';
                    widgetIconSun.style.top = '12px';
                    widgetIconMoon.style.top = '92px';
                    widgetBackground.style.backgroundPositionY = '0';
                }
            });
        function createWidgetSky() {
            for (let i = 0; i < 100; i++) {
                let star = document.createElement('div');
                star.className = 'star';
                star.style.bottom = (Math.random() * window.innerHeight) + 'px';
                star.style.left = (Math.random() * 100) + '%';
                if (Math.random() > 0.6) {
                    star.style.animation = `star 3s ease ${Math.random() * 10}s infinite`;
                }
                if (Math.random() > 0.5) {
                    star.style.width = '1px';
                    star.style.height = '1px';
                }
                if (Math.random() > 0.5) {
                    star.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()}`;
                }
                widgetSky.appendChild(star);
            }
            for (let i = 0; i < 6; i++) {
                let meteor = document.createElement('div');
                meteor.className = 'meteor';
                meteor.style.bottom = (Math.random() * window.innerHeight) + 'px';
                meteor.style.left = (Math.random() * 100) + '%';
                meteor.style.animation = `meteor 5s ease ${Math.random() * 10}s infinite`;
                meteor.style.width = Math.floor(Math.random() * (500 - 200 + 1) + 200) + 'px';
                widgetSky.appendChild(meteor);
            }
        }

        //
        const themeIconClockHour = document.getElementById('theme-icon-clock-hour');
        const themeIconClockMinute = document.getElementById('theme-icon-clock-minute');
        const themeIconCalenderWeek = document.getElementById('theme-icon-calendar-week');
        const themeIconCalenderDay = document.getElementById('theme-icon-calendar-day');
        const themeIconAnimations = document.querySelectorAll('.theme-icon');
        const themeIconAnimationLayers = document.querySelectorAll('.theme-icon-layer');
        new ScrollMagic.Scene({triggerElement: '#section-theme-2', duration: document.getElementById('section-theme-2').offsetHeight})
            // .addIndicators()
            // .addTo(controller)
            .on('enter', e => {
                for (let animation of themeIconAnimations) {
                    if (!animation.classList.contains('animate')) {
                        animation.classList.add('animate');
                    }
                    for (let layer of themeIconAnimationLayers) {
                        layer.style.mozAnimationPlayState = 'running';
                        layer.style.webkitAnimationPlayState = 'running';
                        layer.style.animationPlayState = 'running';
                    }
                }
                // 时钟
                let date = new Date();
                let hourDeg = (date.getHours() * 60 + date.getMinutes()) * 0.5;
                let minuteDeg = date.getMinutes() * 6;
                themeIconClockHour.style.transform = `rotate(${hourDeg}deg)`;
                themeIconClockMinute.style.transform = `rotate(${minuteDeg}deg)`;
                // 日历
                themeIconCalenderWeek.innerText = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][date.getDay()];
                themeIconCalenderDay.innerText = date.getDate();
            })
            .on('leave', e => {
                for (let animation of themeIconAnimations) {
                    for (let layer of themeIconAnimationLayers) {
                        layer.style.mozAnimationPlayState = 'paused';
                        layer.style.webkitAnimationPlayState = 'paused';
                        layer.style.animationPlayState = 'paused';
                    }
                }
            });





    });
</script>

<Nav/>

<section id="about" class="about-wrap">
    <div class="about">
        <p>
            本人有十年以上 UI 设计工作经历，多年互联网和手机公司工作经验，
            熟悉 Android、iOS 等平台界面设计规范，除了扎实的设计功底外，
            也熟悉交互设计和前端开发。
            目前于主流设计软件 Sketch 与 Figma 的插件开发领域有一定影响，
            帮助了许多设计师更高效的使用设计软件，解决各种复杂繁琐的问题，
            提高团队效率，减少与开发沟通合作的障碍。
        </p>
        <p>
            以下为我近期较有代表性的 UI 设计作品和开源项目，
            包括 App 界面设计、Android 主题设计、图标设计、
            Node.js CLI、 Node.js 模块、Electron 应用、Sketch 和 Figma 插件。
        </p>
        <p>
            如果您觉得我符合贵司 UI 设计师的职位要求，可以通过以下方式联系我。
        </p>
        <ul class="contact">
            <li>电话: <a href="tel://13666092891">136 6609 2891</a></li>
            <li>微信: <a id="wechat" href={"#"}>Ashung</a></li>
            <li>邮件: <a href="mailto://ashung.hung@foxmail.com">ashung.hung@foxmail.com</a></li>
        </ul>
    </div>
</section>

<section class="works">
    <Heading title="Android 系统规范与基础应用" date="2020/06 - 2022/05" tools="Sketch">
        <p>为卡多希直播设备上的 Android 系统重新设计的一套 UI 规范和基础应用，风格上参考目前主流的移动设备系统和平板系统，整体框架上没有对原生 Android 系统做大幅度改动，目的是为了让首次接触这类特殊设备的用户可以快速入手。所有组件和基础应界面均针对大屏幕适配和深色模式做过优化，组件可根据不同应用而更改主色。</p>
    </Heading>
    <Slide items={work_os_system}/>
</section>

<section class="works">
    <Heading title="Android 系统图标" date="2020/06 - 2021/07" tools="Sketch">
        <p>为卡多希直播设备设计的 Android 系统标准 24dp 规格图标，针对高密度屏幕而做的优化，使用 1.5px 宽的线，且轮廓线一侧对齐 1px 像素网格，这种设计在高于 320dpi 的高密度屏幕上粗细适中，不会出现像素模糊现象。 </p>
        <p>整套图标超过 700 多个，除了 Android 系统常用图标，还增加针对音视频处理、图形处理、相机操作、多媒体等方面的图标，部分图标同时有线性和实心两种状态。另外还针对 Web 平台重新绘制部分图标的 16px 版本。</p>
    </Heading>
    <Slide items={work_os_system_icons}/>
</section>

<section class="works">
    <Heading title="直播App" date="2020/06 - 2022/07" tools="Sketch">
        ccc
    </Heading>
</section>

<section class="works">
    <Heading title="Web 端" date="2020/06 - 2022/07" tools="Sketch">
        ccc
    </Heading>
</section>

<section class="works">
    <Heading title="桌面版" date="2020/06 - 2022/07" tools="Sketch" programme="H">
        ccc
    </Heading>
</section>

<section class="works">
    <Heading title="360OS 系统基础应用" date="2019/08 - 2019/10" tools="Sketch">
        <p>360OS（基于 Android 系统）5.0 部分内置基础应用的界面的迭代设计。</p>
        <p>此次改版在保留应用原本原有功能基础上，使用新的风格重新设计了所有原有界面，同时也优化了许多已存在的设计与交互问题。新的风格更符合当时整体的设计趋势。</p>
    </Heading>
    <Container items={work_360os_ui}/>
</section>

<section class="works dark work-theme-1" id="section-theme-1">
    <Heading title="360OS 系统主题" date="2018/12" tools="Sketch">
        <p>360OS 4.0 的内置主题设计，考虑到海外的手机商与用户的喜好，图标采用了辨识度较高的图形设计，色彩明快，风格简洁。</p>
    </Heading>
    <div class="flex-row flex-center theme-preview">
        <img width="260" height="520" src="/360os_theme_1/theme_1_preview1_2x.jpg" data-srcset="/360os_theme_1/theme_1_preview1_2x.jpg 2x" alt="">
        <img width="260" height="520" src="/360os_theme_1/theme_1_preview2_2x.jpg" data-srcset="/360os_theme_1/theme_1_preview2_2x.jpg 2x" alt="">
        <img width="260" height="520" src="/360os_theme_1/theme_1_preview3_2x.jpg" data-srcset="/360os_theme_1/theme_1_preview3_2x.jpg 2x" alt="">
    </div>
    <div class="theme-icon-wrap">
        <SubHeading title="灵活的图标形状">
            <p>来自 Android 8.0 Adaptive Icon 的灵感，通过改进设计方法和图层结构，后期使用 Sketch 脚本，实现不需要重复设计和修改文档，也能够根据客户需求快速生成各种形状的图标。</p>
        </SubHeading>
        <svg class="weather-icon" width="240" height="240" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="icon-mask">
                    <path id="icon-shape-2" d="M0,0h104v104h-104z"/>
                </clipPath>
            </defs>
            <g clip-path="url(#icon-mask)" transform="translate(8,8)">
                <g transform="translate(-8,-8)">
                    <rect fill="#196EE6" x="0" y="0" width="120" height="120"/>
                    <circle fill="#FFCC33" cx="60" cy="60" r="32"/>
                    <rect class="weather-cloud" fill="#FFFFFF" fill-opacity="0.9" x="64" y="60" width="36" height="24" rx="12"/>
                </g>
            </g>
            <path stroke="#FFFFFF" opacity="0.6" fill="none" d="M60 28a32 32 0 100 64 32 32 0 100-64z"/>
            <path stroke="#FFFFFF" opacity="0.2" fill="none" d="M0 0l120 120M0 120L120 0M60 0v120M0 60h120"/>
            <rect stroke="#FFFFFF" opacity="0.4" fill="none" x="32" y="32" width="56" height="56" rx="4"/>
            <rect stroke="#FFFFFF" opacity="0.4" fill="none" x="36" y="28" width="48" height="64" rx="4"/>
            <rect stroke="#FFFFFF" opacity="0.4" fill="none" x="28" y="36" width="64" height="48" rx="4"/>
            <path stroke="#FFFFFF" opacity="0.4" fill="none" d="M0.5 0.5h119v119H0.5z"/>
        </svg>
        <svg class="theme-icons" height="528" width="936" viewBox="0 0 936 528" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <path id="icon-shape" d="M0,0h104v104h-104z"/>
                <mask id="mask" fill="white">
                    <use x="8" y="8" xlink:href="#icon-shape"/>
                    <use x="144" y="8" xlink:href="#icon-shape"/>
                    <use x="280" y="8" xlink:href="#icon-shape"/>
                    <use x="416" y="8" xlink:href="#icon-shape"/>
                    <use x="552" y="8" xlink:href="#icon-shape"/>
                    <use x="688" y="8" xlink:href="#icon-shape"/>
                    <use x="824" y="8" xlink:href="#icon-shape"/>
                    <use x="960" y="8" xlink:href="#icon-shape"/>
                    <use x="8" y="144" xlink:href="#icon-shape"/>
                    <use x="144" y="144" xlink:href="#icon-shape"/>
                    <use x="280" y="144" xlink:href="#icon-shape"/>
                    <use x="416" y="144" xlink:href="#icon-shape"/>
                    <use x="552" y="144" xlink:href="#icon-shape"/>
                    <use x="688" y="144" xlink:href="#icon-shape"/>
                    <use x="824" y="144" xlink:href="#icon-shape"/>
                    <use x="960" y="144" xlink:href="#icon-shape"/>
                    <use x="8" y="280" xlink:href="#icon-shape"/>
                    <use x="144" y="280" xlink:href="#icon-shape"/>
                    <use x="280" y="280" xlink:href="#icon-shape"/>
                    <use x="416" y="280" xlink:href="#icon-shape"/>
                    <use x="552" y="280" xlink:href="#icon-shape"/>
                    <use x="688" y="280" xlink:href="#icon-shape"/>
                    <use x="824" y="280" xlink:href="#icon-shape"/>
                    <use x="960" y="280" xlink:href="#icon-shape"/>
                    <use x="8" y="416" xlink:href="#icon-shape"/>
                    <use x="144" y="416" xlink:href="#icon-shape"/>
                    <use x="280" y="416" xlink:href="#icon-shape"/>
                    <use x="416" y="416" xlink:href="#icon-shape"/>
                    <use x="552" y="416" xlink:href="#icon-shape"/>
                    <use x="688" y="416" xlink:href="#icon-shape"/>
                    <use x="824" y="416" xlink:href="#icon-shape"/>
                    <use x="960" y="416" xlink:href="#icon-shape"/>
                    <use x="8" y="552" xlink:href="#icon-shape"/>
                    <use x="144" y="552" xlink:href="#icon-shape"/>
                    <use x="280" y="552" xlink:href="#icon-shape"/>
                    <use x="416" y="552" xlink:href="#icon-shape"/>
                    <use x="552" y="552" xlink:href="#icon-shape"/>
                    <use x="688" y="552" xlink:href="#icon-shape"/>
                    <use x="824" y="552" xlink:href="#icon-shape"/>
                    <use x="960" y="552" xlink:href="#icon-shape"/>
                </mask>
            </defs>
            <image xlink:href="/360os_theme_1/theme_1_2x.jpg" x="0" y="0" height="528" width="936" mask="url(#mask)"/>
        </svg>
        <div class="flex-row flex-center flex-medium icon-shape-controller">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.75.75h14.5v14.5H.75z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
            <input id="icon-radius" min="0" max="100" type="range" value="0">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="14.5" height="14.5" rx="7.25" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
            <div class="icon-shape-smooth">
                <input id="icon-smooth-radius" type="checkbox">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.859.75H7.14c-1.834 0-2.825.235-3.718.713a4.712 4.712 0 00-1.96 1.96C.985 4.316.75 5.307.75 7.141V8.86c0 1.834.235 2.825.713 3.718a4.712 4.712 0 001.96 1.96c.893.478 1.884.713 3.718.713H8.86c1.834 0 2.825-.235 3.718-.713a4.712 4.712 0 001.96-1.96c.478-.893.713-1.884.713-3.718V7.14c0-1.834-.235-2.825-.713-3.718a4.712 4.712 0 00-1.96-1.96C11.684.985 10.693.75 8.859.75z" stroke="#FFF" stroke-width="1.5" fill="none" stroke-opacity=".4"/></svg>
            </div>
            <label for="icon-smooth-radius">超椭圆</label>
            <div id="icon-popup-tip" class="dark popup-tip animate-shake">拖动滑块以改变图标形状</div>
        </div>
        <SubHeading title="Widget 设计">
            <p>Widget 的设计需要兼容白天、夜晚以及不同天气等场景。</p>
        </SubHeading>
        <div class="theme-widget">
            <div id="widget-sky"></div>
            <div id="widget">
                <div id="widget-bg"></div>
                <div id="widget-icon">
                    <div id="widget-icon-sun"></div>
                    <div id="widget-icon-moon"></div>
                    <div id="widget-icon-cloud"></div>
                </div>
                <div id="widget-date">Date</div>
                <div id="widget-time">10:08</div>
                <div id="widget-weather">Shenzhen Sunny 21°C</div>
            </div>
            <div id="widget-sky-remove"></div>
        </div>

    </div>
</section>

<section class="works dark work-theme-2" id="section-theme-2">
    <Heading title="超写实风格主题" date="2016/06" tools="Photoshop">
        <p>超写实风格图标设计。在扁平盛行的环境下，写实风格更能体现设计师的功底，在个别图标上还增加了更真实感的动画特效。</p>
    </Heading>
    <div class="works-content">
        <div class="theme-wrapper">
            <img width="1160" height="440" src="/360os_theme_2/theme_4_2x.jpg" srcset="/360os_theme_2/theme_4_2x.jpg 2x" alt="">
            <div id="theme-icon-clock" class="theme-icon theme-icon-clock">
                <div id="theme-icon-clock-hour" class="theme-icon-layer"><div class="theme-icon-layer theme-icon-layer-1"></div></div> 
                <div id="theme-icon-clock-minute" class="theme-icon-layer"><div class="theme-icon-layer theme-icon-layer-2"></div></div> 
                <div class="theme-icon-layer theme-icon-layer-3"></div>
            </div>
            <div id="theme-icon-calendar" class="theme-icon theme-icon-calendar">
                <div id="theme-icon-calendar-week" class="theme-icon-layer theme-icon-layer-1"></div>
                <div id="theme-icon-calendar-day" class="theme-icon-layer theme-icon-layer-2"></div>
                <div class="theme-icon-layer theme-icon-layer-3"></div>
            </div>
            <div class="theme-icon theme-icon-clean">
                <div class="theme-icon-layer theme-icon-layer-1"></div>
                <div class="theme-icon-layer theme-icon-layer-2"></div>
                <div class="theme-icon-layer theme-icon-layer-3"></div>
            </div>
            <div class="theme-icon theme-icon-setting">
                <div class="theme-icon-layer theme-icon-layer-1"></div>
                <div class="theme-icon-layer theme-icon-layer-2"></div>
                <div class="theme-icon-layer theme-icon-layer-3"></div>
            </div>
            <div class="theme-icon theme-icon-safe">
                <div class="theme-icon-layer theme-icon-layer-1"></div>
                <div class="theme-icon-layer theme-icon-layer-2"></div>
                <div class="theme-icon-layer theme-icon-layer-3"></div>
            </div>
            <div class="theme-icon theme-icon-compass">
                <div class="theme-icon-layer theme-icon-layer-1"></div>
                <div class="theme-icon-layer theme-icon-layer-2"></div>
                <div class="theme-icon-layer theme-icon-layer-3"></div>
            </div>
            <div class="theme-icon theme-icon-security">
                <div class="theme-icon-layer theme-icon-layer-1"></div>
                <div class="theme-icon-layer theme-icon-layer-2"></div>
                <div class="theme-icon-layer theme-icon-layer-3"></div>
            </div>
        </div>
    </div>
</section>

<section class="works">
    <Heading title="360OS 系统主题" date="2016 - 2019" tools="Sketch, Photoshop">
        <p>为 360OS 设计的部分系统主题。</p>
    </Heading>
    <Slide items={work_360os_themes}/>
</section>

<section class="works">
    <Heading title="CoolUI 系统主题" date="2014" tools="Photoshop">
        <p>为酷派 Coolpad 旗下大神 Dazen 手机两款旗舰机型 F2 和 X7 设计的系统主题。</p>
    </Heading>
    <Container items={work_coolpad_icon}/>
</section>

<section class="works">
    <Heading title="Android 系统主题" date="2013" tools="Photoshop">
        <p>为 Doov 手机多款机型设计的系统主题图标、Widget 和桌面。</p>
    </Heading>
    <Container items={work_doov_icon}/>
</section>
