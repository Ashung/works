<script>
    import Heading from '$lib/components/heading.svelte';
    import SubHeading from '$lib/components/sub_heading.svelte';
    import Slide from '$lib/components/slide.svelte';
    import Container from '$lib/components/container.svelte';
    import FontPreview from '$lib/components/font_preview.svelte';
    import SectionAnimation from '$lib/components/section_animation.svelte';
    import Scroller from '$lib/components/scroller.svelte';
    import { onMount } from 'svelte';

    const work_os_system = [
        { image: '/cadothy_os/s_1.jpg', text: '部分系统公共组件。' },
        { image: '/cadothy_os/s_2.jpg', text: '部分系统公共组件，深色模式适配。' },
        { image: '/cadothy_os/s_4.jpg', text: '字体样式与色彩体系。' },
        { image: '/cadothy_os/s_3.jpg', text: '系统应用栏与全屏窗口组件。' },
        { image: '/cadothy_os/s_5.jpg', text: '导航与标签页。' },
        { image: '/cadothy_os/s_6.jpg', text: '导航与标签页，深色模式。' },
        { image: '/cadothy_os/s_7.jpg', text: '部分列表样式。' },
        { image: '/cadothy_os/s_8.jpg', text: '部分内容块样式。' },
        { image: '/cadothy_os/s_9.jpg', text: '部分内容块样式，深色模式。' },
        { image: '/cadothy_os/s_10.jpg', text: '部分对话框样式。' },
        { image: '/cadothy_os/s_11.jpg', text: '部分对话框样式，深色模式。' },
        { image: '/cadothy_os/s_12.jpg', text: '用户账号部分界面' },
        { image: '/cadothy_os/s_13.jpg', text: '部分系统应用界面' },
        { image: '/cadothy_os/s_14.jpg', text: '相机部分界面' },
        { image: '/cadothy_os/s_15.jpg', text: '图库部分界面' },
        { image: '/cadothy_os/s_16.jpg', text: '文件管理部分界面' },
        { image: '/cadothy_os/s_17.jpg', text: '文件管理部分界面，深色模式' },
        { image: '/cadothy_os/s_18.jpg', text: '计算器、时钟、录音等主界面' },
        { image: '/cadothy_os/s_19.jpg', text: '计算器、时钟、录音等主界面，深色模式' },
        { image: '/cadothy_os/s_20.jpg', text: '扩展屏幕系统界面，充电和电源接口提示' },
        { image: '/cadothy_os/s_21.jpg', text: '扩展屏幕系统界面，系统未启动时屏幕与设备匹配指引' },
        { image: '/cadothy_os/s_22.jpg', text: '扩展屏幕系统界面，故障提示' },
        { image: '/cadothy_os/s_23.jpg', text: '扩展屏幕系统界面，屏幕与设备匹配指引' },
    ];
    const work_os_system_icons = [
        { image: '/cadothy_icon/icon_1.png', text: '24px Android 系统图标 - 系统类' },
        { image: '/cadothy_icon/icon_2.png', text: '24px Android 系统图标 - 系统类' },
        { image: '/cadothy_icon/icon_3.png', text: '24px Android 系统图标 - 内容类' },
        { image: '/cadothy_icon/icon_4.png', text: '24px Android 系统图标 - 影像类' },
        { image: '/cadothy_icon/icon_5.png', text: '针对 Web 平台优化版 16px 图标' },
        { image: '/cadothy_icon/icon_6.png', text: 'Web 端检索和转换工具，让 Android 开发可以直接搜索和复制图标资源的代码' },
    ];
    const work_os_live_app = [
        { image: '/cadothy_live/ui_1.jpg', text: '场景控制' },
        { image: '/cadothy_live/ui_2.jpg', text: '添加源' },
        { image: '/cadothy_live/ui_3.jpg', text: '场景编辑' },
        { image: '/cadothy_live/ui_4.jpg', text: '场景编辑' },
        { image: '/cadothy_live/ui_5.jpg', text: '图层编辑' },
        { image: '/cadothy_live/ui_6.jpg', text: 'PVW 和 PGM' },
        { image: '/cadothy_live/ui_7.jpg', text: '场景快速控制' },
        { image: '/cadothy_live/ui_8.jpg', text: '横屏和录屏' },
        { image: '/cadothy_live/ui_9.jpg', text: '相机控制' },
    ];
    const work_web_ui = Array.from({length: 39}).map((_, index) => {
        return { image: '/cadothy_sass/g_' + (index + 1) + '.jpg' }
    }).concat(Array.from({length: 11}).map((_, index) => {
        return { image: '/cadothy_sass/w_' + (index + 1) + '.jpg' }
    }));
    const work_desktop_app = [
        { image: '/cadothy_desktop/d_1.jpg', text: 'macOS 版' },
        { image: '/cadothy_desktop/d_2.jpg', text: 'macOS 版，深色模式' },
        { image: '/cadothy_desktop/d_3.jpg', text: 'Windows 版' },
        { image: '/cadothy_desktop/d_4.jpg', text: 'Windows 版，深色模式' },
        { image: '/cadothy_desktop/d_8.jpg', text: '功能图标（实际尺寸）' },
        { image: '/cadothy_desktop/d_5.jpg', text: '简洁版设计' },
        { image: '/cadothy_desktop/d_6.jpg', text: 'macos 安装器背景' },
        { image: '/cadothy_desktop/d_7.jpg', text: '应用图标' },
    ];
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
    const work_font = [
        { image: '/cadothy_sans/f_1.jpg', text: '基础字符' },
        { image: '/cadothy_sans/f_2.jpg', text: '字偶距' },
        { image: '/cadothy_sans/f_3.jpg', text: '连体' },
        { image: '/cadothy_sans/f_4.jpg', text: '上下文替换' },
        { image: '/cadothy_sans/f_5.jpg', text: '字体实际应用' },
    ];
    const work_360os_ui = Array.from({length: 7}).map((_, index) => {
        return { image: '/360os_ui/ui_' + (index + 1) + '.jpg' }
    });
    const work_360os_themes = [
        { image: '/360os_themes/theme_1.jpg', text: '针对海外市场的主题，采用不规则形状的图标设计，色彩鲜艳，风格活泼可爱，符合年轻人的喜好。' },
        { image: '/360os_themes/theme_2.jpg', text: '半写实风格图标设计，图标的形状采用横向长方形适合横向的平板设备。' },
        { image: '/360os_themes/theme_3.jpg', text: '360 F 系列手机默认主题。该系列手机是主要针对年轻群体千元机，默认主题的设计也倾向年轻活力，又不失品质。' },
        { image: '/360os_themes/theme_4.jpg', text: '针对 360 Q 系列而设计的主题。该系列手机是主要针对高端商务人群，主题的设计也给人豪华、品质和稳重的感觉。' },
        { image: '/360os_themes/theme_9.jpg', text: '针对商务版手机而设计的默认主题。' },
        { image: '/360os_themes/theme_5.jpg', text: '针对海外市场定制的圣诞主题。在烘托节日气氛的同时，也保留了作为手机应用图标该有的辨识度。' },
        { image: '/360os_themes/theme_6.jpg', text: '单色图标搭配多彩的渐变背景。' },
        { image: '/360os_themes/theme_7.jpg', text: '风格尝试' },
        { image: '/360os_themes/theme_8.jpg', text: '风格尝试' },
    ];
    const work_360os_system_icons = [
        { image: '/360os_icon/icons.png', text: '' }
    ];
    const work_coolpad_icon = Array.from({length: 18}).map((_, index) => {
        return { image: '/coolpad/c_' + (index + 1) + '.jpg' }
    });
    const work_doov_icon = Array.from({length: 31}).map((_, index) => {
        return { image: '/doov/d_' + (index + 1) + '.jpg' }
    });

    let doCreateWidgetSky = true;
    const themeIconAnimations = [];
    const themeIconAnimationLayers = [];

    onMount(() => {
        // 主题1
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

        const widgetDate = document.getElementById('widget-date');
        const date = new Date();
        date.setHours(10);
        date.setMinutes(8);
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
        const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'][date.getDay()];
        widgetDate.innerText = `${week}, ${month} ${date.getDate()}`;

        // 主题2
        const themeIcons = document.querySelector('.work-theme-2 .theme-wrap');
        // 时钟
        const now = new Date();
        const hourDeg = (now.getHours() * 60 + now.getMinutes()) * 0.5;
        const minuteDeg = now.getMinutes() * 6;
        const themeIconClock = document.createElement('div');
        themeIconClock.classList.add('theme-icon', 'theme-icon-clock');
        const themeIconClockHour = document.createElement('div');
        themeIconClockHour.classList.add('theme-icon-layer');
        const themeIconClockHourChild = document.createElement('div');
        themeIconClockHourChild.classList.add('theme-icon-layer', 'theme-icon-layer-1');
        themeIconClockHour.appendChild(themeIconClockHourChild);
        themeIconClock.appendChild(themeIconClockHour);
        const themeIconClockMinute = document.createElement('div');
        themeIconClockMinute.classList.add('theme-icon-layer');
        const themeIconClockMinuteChild = document.createElement('div');
        themeIconClockMinuteChild.classList.add('theme-icon-layer', 'theme-icon-layer-2');
        themeIconClockMinute.appendChild(themeIconClockMinuteChild);
        themeIconClock.appendChild(themeIconClockMinute);
        const themeIconClockSecond = document.createElement('div');
        themeIconClockSecond.classList.add('theme-icon-layer', 'theme-icon-layer-3');
        themeIconClock.appendChild(themeIconClockSecond);
        themeIcons.appendChild(themeIconClock);
        themeIconAnimations.push(themeIconClock);
        themeIconAnimationLayers.push(themeIconClockHourChild);
        themeIconAnimationLayers.push(themeIconClockMinuteChild);
        themeIconAnimationLayers.push(themeIconClockSecond);
        themeIconClockHour.style.transform = `rotate(${hourDeg}deg)`;
        themeIconClockMinute.style.transform = `rotate(${minuteDeg}deg)`;

        // 日历
        const themeIconCalender = document.createElement('div');
        themeIconCalender.classList.add('theme-icon', 'theme-icon-calendar');
        const themeIconCalenderWeek = document.createElement('div');
        themeIconCalenderWeek.classList.add('theme-icon-layer', 'theme-icon-layer-1');
        themeIconCalender.appendChild(themeIconCalenderWeek);
        const themeIconCalenderDay = document.createElement('div');
        themeIconCalenderDay.classList.add('theme-icon-layer', 'theme-icon-layer-2');
        themeIconCalender.appendChild(themeIconCalenderDay);
        themeIcons.appendChild(themeIconCalender);
        themeIconAnimations.push(themeIconCalender);
        themeIconCalenderWeek.textContent = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][date.getDay()];
        themeIconCalenderDay.textContent = now.getDate();

        const themeIconClean = document.createElement('div');
        themeIconClean.classList.add('theme-icon', 'theme-icon-clean');
        const themeIconCleanChild1 = document.createElement('div');
        themeIconCleanChild1.classList.add('theme-icon-layer', 'theme-icon-layer-1');
        themeIconClean.appendChild(themeIconCleanChild1);
        const themeIconCleanChild2 = document.createElement('div');
        themeIconCleanChild2.classList.add('theme-icon-layer', 'theme-icon-layer-2');
        themeIconClean.appendChild(themeIconCleanChild2);
        const themeIconCleanChild3 = document.createElement('div');
        themeIconCleanChild3.classList.add('theme-icon-layer', 'theme-icon-layer-3');
        themeIconClean.appendChild(themeIconCleanChild3);
        themeIcons.appendChild(themeIconClean);
        themeIconAnimations.push(themeIconClean);
        themeIconAnimationLayers.push(themeIconCleanChild1);
        themeIconAnimationLayers.push(themeIconCleanChild2);
        themeIconAnimationLayers.push(themeIconCleanChild3);

        const themeIconSetting = document.createElement('div');
        themeIconSetting.classList.add('theme-icon', 'theme-icon-setting');
        const themeIconSettingChild1 = document.createElement('div');
        themeIconSettingChild1.classList.add('theme-icon-layer', 'theme-icon-layer-1');
        themeIconSetting.appendChild(themeIconSettingChild1);
        const themeIconSettingChild2 = document.createElement('div');
        themeIconSettingChild2.classList.add('theme-icon-layer', 'theme-icon-layer-2');
        themeIconSetting.appendChild(themeIconSettingChild2);
        themeIcons.appendChild(themeIconSetting);
        themeIconAnimations.push(themeIconSetting);
        themeIconAnimationLayers.push(themeIconSettingChild1);
        themeIconAnimationLayers.push(themeIconSettingChild2);

        const themeIconCompass = document.createElement('div');
        themeIconCompass.classList.add('theme-icon', 'theme-icon-compass');
        const themeIconCompassChild1 = document.createElement('div');
        themeIconCompassChild1.classList.add('theme-icon-layer', 'theme-icon-layer-1');
        themeIconCompass.appendChild(themeIconCompassChild1);
        const themeIconCompassChild2 = document.createElement('div');
        themeIconCompassChild2.classList.add('theme-icon-layer', 'theme-icon-layer-2');
        themeIconCompass.appendChild(themeIconCompassChild2);
        const themeIconCompassChild3 = document.createElement('div');
        themeIconCompassChild3.classList.add('theme-icon-layer', 'theme-icon-layer-3');
        themeIconCompass.appendChild(themeIconCompassChild3);
        themeIcons.appendChild(themeIconCompass);
        themeIconAnimations.push(themeIconCompass);
        themeIconAnimationLayers.push(themeIconCompassChild1);
        themeIconAnimationLayers.push(themeIconCompassChild2);
        themeIconAnimationLayers.push(themeIconCompassChild3);

        const themeIconSecurity = document.createElement('div');
        themeIconSecurity.classList.add('theme-icon', 'theme-icon-security');
        const themeIconSecurityChild1 = document.createElement('div');
        themeIconSecurityChild1.classList.add('theme-icon-layer', 'theme-icon-layer-1');
        themeIconSecurity.appendChild(themeIconSecurityChild1);
        const themeIconSecurityChild2 = document.createElement('div');
        themeIconSecurityChild2.classList.add('theme-icon-layer', 'theme-icon-layer-2');
        themeIconSecurity.appendChild(themeIconSecurityChild2);
        themeIcons.appendChild(themeIconSecurity);
        themeIconAnimations.push(themeIconSecurity);
        themeIconAnimationLayers.push(themeIconSecurityChild1);
        themeIconAnimationLayers.push(themeIconSecurityChild2);

        const themeIconSafe = document.createElement('div');
        themeIconSafe.classList.add('theme-icon', 'theme-icon-safe');
        const themeIconSafeChild1 = document.createElement('div');
        themeIconSafeChild1.classList.add('theme-icon-layer', 'theme-icon-layer-1');
        themeIconSafe.appendChild(themeIconSafeChild1);
        const themeIconSafeChild2 = document.createElement('div');
        themeIconSafeChild2.classList.add('theme-icon-layer', 'theme-icon-layer-2');
        themeIconSafe.appendChild(themeIconSafeChild2);
        themeIcons.appendChild(themeIconSafe);
        themeIconAnimations.push(themeIconSafe);
        themeIconAnimationLayers.push(themeIconSafeChild1);
        themeIconAnimationLayers.push(themeIconSafeChild2);

    });

    function createWidgetSky(widgetSky) {
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

    let currentSection;
    function updateWidget() {
        let progress = (window.innerHeight - currentSection.getBoundingClientRect().top) / currentSection.getBoundingClientRect().height;
        progress = Math.min(1, progress);
        progress = Math.max(0, progress);

        const sectionTheme1 = document.getElementById('section-theme-1');
        const widget = document.getElementById('widget');
        const widgetBackground = document.getElementById('widget-bg');
        const widgetTime = document.getElementById('widget-time');
        const widgetIconSun = document.getElementById('widget-icon-sun');
        const widgetIconMoon = document.getElementById('widget-icon-moon');
        const widgetSky = document.getElementById('widget-sky');

        let top = window.innerHeight / 2 - currentSection.getBoundingClientRect().top - widget.offsetHeight / 2;
        top = Math.max(0, top);
        top = Math.min(currentSection.offsetHeight - widget.offsetHeight, top)
        widget.style.top = top + 'px';

        const date = new Date();
        date.setHours(10);
        date.setMinutes(8);
        let weatherTime = new Date(date.getTime() + progress * 1000 * 60 * 60 * 12);
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
    }

    let handleScroll = (entry) => {
        // 
        const themeWidget = document.querySelector('.work-theme-1 .theme-widget');
        if (entry.target === themeWidget) {            
            const widgetSky = document.getElementById('widget-sky');
            currentSection = themeWidget;
            if (entry.isIntersecting) {
                window.addEventListener('scroll', updateWidget);
                if (doCreateWidgetSky) {
                    doCreateWidgetSky = false;
                    createWidgetSky(widgetSky);
                }
            } else {
                window.removeEventListener('scroll', updateWidget);
            }            
        }
        //
        const themeIcons = document.querySelector('.work-theme-2 .theme-wrap');
        if (entry.target === themeIcons) {
            if (entry.isIntersecting) {
                for (let animation of themeIconAnimations) {
                    if (!animation.classList.contains('animate')) {
                        animation.classList.add('animate');
                    }
                    for (let layer of themeIconAnimationLayers) {
                        layer.style.animationPlayState = 'running';
                    }
                }
            } else {
                for (let layer of themeIconAnimationLayers) {
                    layer.style.mozAnimationPlayState = 'paused';
                    layer.style.webkitAnimationPlayState = 'paused';
                    layer.style.animationPlayState = 'paused';
                }
            }
        }
    };
</script>

<SectionAnimation/>
<Scroller query="[data-scroll-trigger]" handleScroll={handleScroll}/>

<section class="about">
    <div class="about-text">
        <p>
            本网页内容为工作期间的设计作品，内容包含移动端 UI、Android 系统主题、图标、网页、字体设计等，如果您觉得我符合贵司职位要求，可以通过以下方式联系我。
            <a href="/resume">查看简历了解更多</a>
        </p>
        <ul class="contacts">
            <li class="ic-phone">电话: <a href="tel://13666092891">136 6609 2891</a></li>
            <li class="ic-wechat">微信: <a class="wechat" href={"#"}>Ashung</a> <img class="wechat-qrcode" src="/wechat.jpg" alt=""></li>
            <li class="ic-mail">邮件: <a href="mailto://ashung.hung@foxmail.com">ashung.hung@foxmail.com</a></li>
        </ul>
    </div>
    <div class="mouse"><p>&darr;</p></div>
</section>

<section class="works">
    <Heading title="卡多希 OS 系统规范与基础应用 UI" date="2020/06 - 2022/05" tools="Sketch">
        <p>为卡多希直播设备上的 Android 系统重新设计的一套 UI 规范和基础应用，风格上参考目前主流的移动设备系统和平板系统，整体框架上没有对原生 Android 系统做大幅度改动，目的是为了让首次接触这类特殊设备的用户可以快速入手。所有组件和基础应界面均针对大屏幕适配和深色模式做过优化，组件可根据不同应用而更改主色。</p>
    </Heading>
    <Slide items={work_os_system}/>
</section>

<section class="works">
    <Heading title="卡多希 OS 系统图标" date="2020/06 - 2021/07" tools="Sketch">
        <p>为卡多希直播设备设计的 Android 系统标准 24dp 规格图标，针对高密度屏幕而做的优化，使用 1.5px 宽的线，且轮廓线一侧对齐 1px 像素网格，这种设计在高于 320dpi 的高密度屏幕上粗细适中，不会出现像素模糊现象。 </p>
        <p>整套图标超过 700 多个，除了 Android 系统常用图标，还增加针对音视频处理、图形处理、相机操作、多媒体等方面的图标，部分图标同时有线性和实心两种状态。另外还针对 Web 平台重新绘制部分图标的 16px 版本。</p>
    </Heading>
    <Slide items={work_os_system_icons}/>
</section>

<section class="works">
    <Heading title="卡多希导播 App UI" date="2022/02" tools="Sketch">
        <p>针对大屏的导播 App，这是对已有设计将所有功能堆砌在主界面的一次改变，使用场景和图层的概念，将可以实现更复杂的画面。同时将更高级的画面控制，移入到一个新的窗口，预览面积更大，以解决现有设计，很难实现的相机专业设置，画面元素精准布局等等。简单的操作则在当前界面中，以底部弹窗形式出现。</p>
    </Heading>
    <Slide slidesPerView="auto" items={work_os_live_app}/>
</section>

<section class="works">
    <Heading title="卡多希智能云 Web 端 UI" date="2020/07" tools="Sketch">
        <p>卡多希智能云是为用户提供直播云手机、文件存储等服务的 Web 端 SaaS 服务。前端框架使用 Ant Design Vue，在设计规范上对主题配色和所有的前端组件进行了重新设计。</p>
    </Heading>
    <Slide slidesPerView="auto" items={work_web_ui}/>
</section>

<section class="works">
    <Heading title="卡多希睿眸桌面版 UI" date="2021/05" tools="Sketch" programme="Electron">
        <p>卡多希睿眸桌面版用于捕捉屏幕或应用窗口等电脑端视频源作为直播设备的输入源。软件采用 Electron 跨平台方案。在这个项目中还参与到 Electron 的前端 UI 开发。设计和开发上应用兼容浅色和深色模式，图标也会根据系统平台而改变。</p>
    </Heading>
    <Slide items={work_desktop_app}/>
</section>

<section class="works work-web-site">
    <Heading title="卡多希官方网站设计" date="2020/10 - 2022/07" tools="Sketch, Photoshop" programme="SvelteKit">
        <p>在卡多希官方网站 (<a href="https://www.cadothy.com" target="_blank">www.cadothy.com</a>) 项目上，一人负责了界面设计、前端至后端的全部工作。网站参考了主流电子产品官方网站的设计和内容结构，在设计上主页、产品、新闻和文档采用不同版式，用于嵌入 App 上的 H5 页面则采用与 App 相似的风格，所有页面均使用响应式设计。产品页使用大量产品图、动画效果以突出产品特性和卖点。</p>
        <p>建站方案采用 JAMstack 架构，前端选择 SvelteKit 框架，部署时使用 SSR 服务端渲染以满足 SEO。新闻和文档模块用于增加网站的活跃度，文章和一些网站配置等数据由 Strapi 管理，提供 GraphQL 用作前端的 API 查询。</p>
    </Heading>
    <Slide items={work_web_site}/>
</section>

<section class="works">
    <Heading title="Cadothy Sans 字体设计" date="2020/09" tools="Glyphs, Illustrator">
        <p>Cadothy Sans 字体是由卡多希 VI 系统衍生出来的一套英文字体，用于各类场景上的产品名用字，字体的设计上延续了标志字体的简洁、现代、几何风格，但摈弃了一字符的故意加工。</p>
        <p>字符集涵盖了大小写英文字母、数字和标点符号，功能包含字偶距调整和连体、变体等 Opentype 功能的设计。字体设计成可变字体，字重范围 100 - 700，静态版本字重包括 Thin, Extra Light, Light, Regular, Medium, Demi Bold, Bold 共 7 种。</p>
    </Heading>
    <Slide items={work_font}/>
    <FontPreview/>
</section>

<section class="works">
    <Heading title="360OS 系统基础应用 UI" date="2019/08 - 2019/10" tools="Sketch">
        <p>360OS（基于 Android 系统）5.0 部分内置基础应用的界面的迭代设计。</p>
        <p>此次改版在保留应用原本原有功能基础上，使用新的风格重新设计了所有原有界面，同时也优化了许多已存在的设计与交互问题。新的风格更符合当时整体的设计趋势。</p>
    </Heading>
    <Container items={work_360os_ui}/>
</section>

<section class="works dark work-theme-1" id="section-theme-1">
    <Heading title="360OS 系统主题设计" date="2018/12" tools="Sketch">
        <p>360OS 4.0 的内置主题设计，考虑到海外的手机商与用户的喜好，图标采用了辨识度较高的图形设计，色彩明快，风格简洁。</p>
    </Heading>
    <div class="theme-preview">
        <img width="260" height="520" src="/360os_theme_1/preview1.jpg" srcset="/360os_theme_1/preview1.jpg 2x" alt="">
        <img width="260" height="520" src="/360os_theme_1/preview2.jpg" srcset="/360os_theme_1/preview2.jpg 2x" alt="">
        <img width="260" height="520" src="/360os_theme_1/preview3.jpg" srcset="/360os_theme_1/preview3.jpg 2x" alt="">
    </div>
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
    <div class="icon-shape-controller">
        <div id="icon-popup-tip" class="dark popup-tip animate-shake">拖动滑块以改变图标形状</div>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.75.75h14.5v14.5H.75z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
        <input id="icon-radius" min="0" max="100" type="range" value="0">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="14.5" height="14.5" rx="7.25" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
        <div class="icon-shape-smooth">
            <input id="icon-smooth-radius" type="checkbox">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.859.75H7.14c-1.834 0-2.825.235-3.718.713a4.712 4.712 0 00-1.96 1.96C.985 4.316.75 5.307.75 7.141V8.86c0 1.834.235 2.825.713 3.718a4.712 4.712 0 001.96 1.96c.893.478 1.884.713 3.718.713H8.86c1.834 0 2.825-.235 3.718-.713a4.712 4.712 0 001.96-1.96c.478-.893.713-1.884.713-3.718V7.14c0-1.834-.235-2.825-.713-3.718a4.712 4.712 0 00-1.96-1.96C11.684.985 10.693.75 8.859.75z" stroke="#FFF" stroke-width="1.5" fill="none" stroke-opacity=".4"/></svg>
        </div>
        <label for="icon-smooth-radius">超椭圆</label>
    </div>
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
        <image xlink:href="/360os_theme_1/icon.jpg" x="0" y="0" height="528" width="936" mask="url(#mask)"/>
    </svg>
    <SubHeading title="Widget 设计">
        <p>Widget 的设计需要兼容白天、夜晚以及不同天气等场景。</p>
    </SubHeading>
    <div class="theme-widget" data-scroll-trigger>
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
    </div>
</section>

<section class="works dark work-theme-2" id="section-theme-2">
    <Heading title="超写实风格主题设计" date="2016/06" tools="Photoshop">
        <p>超写实风格图标设计。在扁平盛行的环境下，写实风格更能体现设计师的功底，在个别图标上还增加了更真实感的动画特效。</p>
    </Heading>
    <div class="works-content">
        <div class="theme-wrap" data-scroll-trigger>
            <img width="1160" height="440" src="/360os_theme_2/icon.jpg" srcset="/360os_theme_2/icon.jpg 2x" alt="">
        </div>
    </div>
</section>

<section class="works">
    <Heading title="360OS 系统主题设计" date="2016 - 2019" tools="Sketch, Photoshop">
        <p>为 360OS 设计的部分系统主题，包括手机默认主题、内置主题和市场主题等，风格也相对多样化。</p>
    </Heading>
    <Slide items={work_360os_themes}/>
</section>

<section class="works">
    <Heading title="360OS 系统图标设计" date="2017/04" tools="Sketch" programme="Node.js">
        <p>360OS 3.0 系统图标。考虑到系统会被搭载在较多低端设备上，图标有意的减少线形、弧线与圆角的设计，使得图标即使在相对低端的屏幕上也能够清晰显示。</p>
        <p>在项目中集成了 gulp 自动化构建工具，以便快速从 Sketch 文档直接生成各种类型资源，包括多种尺寸 PNG、SVG、图标字体和 Android Vector Drawable 矢量资源。</p>
    </Heading>
    <Slide items={work_360os_system_icons}/>
</section>

<section class="works">
    <Heading title="CoolUI 系统主题设计" date="2014" tools="Photoshop">
        <p>为酷派 Coolpad 旗下大神 Dazen 手机两款旗舰机型 F2 和 X7 设计的默认主题。</p>
    </Heading>
    <Slide slidesPerView="auto" items={work_coolpad_icon}/>
</section>

<section class="works">
    <Heading title="Android 系统主题设计" date="2013" tools="Photoshop">
        <p>为朵唯 DOOV 手机多款机型设计的系统主题图标、Widget 和桌面。</p>
    </Heading>
    <Slide slidesPerView="auto" items={work_doov_icon}/>
</section>
