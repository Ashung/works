<script>
    import Heading from '$lib/components/heading.svelte';
    import Description from '$lib/components/description.svelte';
    import Slide from '$lib/components/slide.svelte';
    import Scroller from '$lib/components/scroller.svelte';
    import SectionThumbs from '$lib/components/section_thumbs.svelte';

    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    const work_360os_themes = [
        { image: base + '/360os_themes/theme_3.jpg', text: '360 F 系列手机默认主题。该系列手机是主要针对年轻群体千元机，默认主题的设计也倾向年轻活力，又不失品质。' },
        { image: base + '/360os_themes/theme_4.jpg', text: '针对 360 Q 系列而设计的主题。该系列手机是主要针对高端商务人群，主题的设计也给人豪华、品质和稳重的感觉。' },
        { image: base + '/360os_themes/theme_9.jpg', text: '针对商务版手机而设计的默认主题。' },
        { image: base + '/360os_themes/theme_5.jpg', text: '针对海外市场定制的圣诞主题。在烘托节日气氛的同时，也保留了作为手机应用图标该有的辨识度。' },
        { image: base + '/360os_themes/theme_6.jpg', text: '单色图标搭配多彩的渐变背景。' },
        { image: base + '/360os_themes/theme_7.jpg', text: '风格尝试' },
        { image: base + '/360os_themes/theme_8.jpg', text: '风格尝试' },
    ];

    const work_coolpad_icon = Array.from({length: 18}).map((_, index) => {
        return { image: base + '/coolpad/c_' + (index + 1) + '.jpg' }
    });

    const work_doov_icon = Array.from({length: 31}).map((_, index) => {
        return { image: base + '/doov/d_' + (index + 1) + '.jpg' }
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
        const iconMaskCode = document.getElementById('icon-mask-code');
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
            let mask = '';
            const w = 104;
            iconRadiusRange.style.backgroundSize = `${r}% 100%`;
            if (smoothRadius.checked) {
                let _r = r * (50 - (4 / 3) * Math.tan(Math.PI / 8) * 50) / 100;
                _r = _r === 0 ? _r : _r.toFixed(2);
                r = r * ((w / 2) - (4 / 3) * Math.tan(Math.PI / 8) * (w / 2)) / w;
                d = 'M0 ' + (w/2) +
                    ' C' + '0 ' + r + ' ' + r + ' 0 ' + (w/2) + ' 0' +
                    ' S' + w + ' ' + r + ' ' + w + ' ' + (w/2) +
                    ' S' + (w - r) + ' ' + w + ' ' + (w/2) + ' ' + w +
                    ' S0 ' + (w -r) + ' 0 ' + (w/2) +
                    'z';
                mask = 'M0 ' + '50' +
                    ' C' + '0 ' + _r + ' ' + _r + ' 0 ' + '50' + ' 0' +
                    ' S' + '100' + ' ' + _r + ' ' + '100' + ' ' + '50' +
                    ' S' + (100 - _r) + ' ' + '100' + ' ' + '50' + ' ' + '100' +
                    ' S0 ' + (100 - _r) + ' 0 ' + '50' +
                    'z';
            } else {
                if (r === 0) {
                    d = `M0 0 h${w} v${w} h-${w} z`;
                    mask = 'M0 0 h100 v100 h-100 z';
                } else if (r === 100) {
                    d = `M0 ${w/2} a${w/2} ${w/2} 0 0 1 ${w} 0 a${w/2} ${w/2} 0 0 1 -${w} 0z`;
                    mask = 'M0 50 a50 50 0 0 1 100 0 a50 50 0 0 1 -100 0z';
                } else {
                    let _r = r / 2;
                    r = r * 50 / 104;
                    d = 'M0 ' + r +
                        ' a' + r + ' -' + r + ' 0 0 1 ' + r + ' -' + r + ' h' + (w - 2 * r) +
                        ' a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + ' v' + (w - 2 * r) +
                        ' a-' + r + ' ' + r + ' 0 0 1 -' + r + ' ' + r + ' h-' + (w - 2 * r) +
                        ' a-' + r + ' -' + r + ' 0 0 1 -' + r + ' -' + r +
                        'z';
                    mask = 'M0 ' + _r +
                        ' a' + _r + ' -' + _r + ' 0 0 1 ' + _r + ' -' + _r + ' h' + (100 - 2 * _r) +
                        ' a' + _r + ' ' + _r + ' 0 0 1 ' + _r + ' ' + _r + ' v' + (100 - 2 * _r) +
                        ' a-' + _r + ' ' + _r + ' 0 0 1 -' + _r + ' ' + _r + ' h-' + (100 - 2 * _r) +
                        ' a-' + _r + ' -' + _r + ' 0 0 1 -' + _r + ' -' + _r +
                        'z';
                }
            }
            pathElement.setAttribute('d', d);
            pathElementWeather.setAttribute('d', d);
            iconMaskCode.textContent = mask;
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

        // 音乐图标
        const musicIcon = document.getElementById('music-icon');
        const musicIconFg = document.getElementById('music-icon-fg');
        musicIcon.addEventListener('mousemove', e => {
            let cx = (e.clientX - (musicIcon.getBoundingClientRect().left + musicIcon.getBoundingClientRect().right) / 2) * 2 / musicIcon.getBoundingClientRect().width;
            let cy = (e.clientY - (musicIcon.getBoundingClientRect().top + musicIcon.getBoundingClientRect().bottom) / 2) * 2 / musicIcon.getBoundingClientRect().height;
            let transform =  `rotateX(${cx * 10}deg) rotateY(${cy * 20}deg) scale3d(1.05, 1.05, 1.05)`;
            musicIcon.style.transform = transform;
            musicIconFg.style.transform = `translateX(${cx * -5}px) translateY(${cy * -5}px)`;
        });
        musicIcon.addEventListener('mouseout', e => {
            musicIcon.style.transform = 'none';
            musicIconFg.style.transform = 'none';
        });

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

<Scroller query="[data-scroll-trigger]" handleScroll={handleScroll}/>

<SectionThumbs/>

<section class="works dark work-theme-1" id="section-theme-1">
    <Heading title="360OS 系统主题设计" date="2018/12" tools="Sketch"></Heading>
    <Description>
        <p>360OS 4.0 的内置主题设计，针对海外的手机商与用户的喜好，图标采用了辨识度较高的图形设计，色彩明快，简洁的扁平化风格。</p>
    </Description>
    <div class="theme-preview">
        <img width="260" height="520" src="{base}/360os_theme_1/preview1.jpg" srcset="{base}/360os_theme_1/preview1.jpg 2x" alt="">
        <img width="260" height="520" src="{base}/360os_theme_1/preview2.jpg" srcset="{base}/360os_theme_1/preview2.jpg 2x" alt="">
        <img width="260" height="520" src="{base}/360os_theme_1/preview3.jpg" srcset="{base}/360os_theme_1/preview3.jpg 2x" alt="">
    </div>
    <Heading title="灵活的图标形状" sub_heading="true"></Heading>
    <Description>
        <p>在 Android 8.0 之后的版本可以通过修改系统配置文件来全局修改图标形状，为了更好的适用性，避免多次修改设计稿，通过制定设计方法和特定的图层结构，后期使用 Sketch 脚本，实现不需要重复设计和修改文档，也能够根据客户需求快速生成各种形状的图标。</p>
    </Description>
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
    <div class="icon-mask-code">
        <code>&lt;string name="config_icon_mask" translatebale="false"&gt;"<span id="icon-mask-code"></span>"&lt;/string&gt;</code>
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
        <image xlink:href="{base}/360os_theme_1/icon.jpg" x="0" y="0" height="528" width="936" mask="url(#mask)"/>
    </svg>
    <Heading title="Widget 设计" sub_heading="true"></Heading>
    <Description>
        <p>Widget 的设计需要兼容白天、夜晚以及不同天气等场景。</p>
    </Description>
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

<section class="works" style="background:#F0F7FF;">
    <Heading title="360OS 系统主题 2" date="2017/12" tools="Sketch"></Heading>
    <Description>
        <p>针对海外市场的主题，采用不规则形状的图标设计，色彩鲜艳，风格活泼可爱，符合年轻人的喜好。</p>
    </Description>
    <figure>
        <img src="{base}/360os_themes/theme_1_2.jpg" srcset="{base}/360os_themes/theme_1_2.jpg 2x" loading="lazy" alt="">
    </figure>
</section>

<section class="works">
    <Heading title="360OS 系统主题 3" date="2018/01" tools="Sketch"></Heading>
    <Description>
        <p>半写实风格图标设计，图标的形状灵感来源于 Apple TV。</p>
    </Description>
    <div class="music-icon-wrap">
        <div id="music-icon">
            <div class="music-icon-shadow"></div>
            <div class="music-icon-bg">
                <div class="music-icon-shine1"></div>
                <div class="music-icon-shine2"></div>
            </div>
            <div id="music-icon-fg">
                <img src="{base}/360os_themes/music_icon.png" srcset="{base}/360os_themes/music_icon.png 2x" alt="">
            </div>
        </div>
    </div>
    <figure>
        <img src="{base}/360os_themes/theme_2_2.jpg" srcset="{base}/360os_themes/theme_2_2.jpg 2x" loading="lazy" alt="">
    </figure>
</section>

<section class="works dark work-theme-2" id="section-theme-2">
    <Heading title="360OS 系统主题 4" date="2016/06" tools="Photoshop"></Heading>
    <Description>
        <p>超写实风格图标设计。在扁平盛行的环境下，写实风格更能体现设计师的功底，在个别图标上还增加了更真实感的动画特效。</p>
    </Description>
    <div class="theme-wrap" data-scroll-trigger>
        <img width="1160" height="440" src="{base}/360os_theme_2/icon.jpg" srcset="{base}/360os_theme_2/icon.jpg 2x" alt="">
    </div>
</section>

<section class="works">
    <Heading title="360OS 系统主题设计" date="2016 - 2019" tools="Sketch, Photoshop"></Heading>
    <Description>
        <p>为 360OS 设计的部分系统主题，包括手机默认主题、内置主题和市场主题等，风格也相对多样化。</p>
    </Description>
    <Slide items={work_360os_themes}/>
</section>

<section class="works">
    <Heading title="CoolUI 系统主题设计" date="2014" tools="Photoshop"></Heading>
    <Description>
        <p>为酷派 Coolpad 旗下大神 Dazen 手机两款旗舰机型 F2 和 X7 设计的默认主题。</p>
    </Description>
    <Slide slidesPerView="auto" items={work_coolpad_icon}/>
</section>

<section class="works">
    <Heading title="Android 系统主题设计" date="2013" tools="Photoshop"></Heading>
    <Description>
        <p>为朵唯 DOOV 手机多款机型设计的系统主题图标、Widget 和桌面。</p>
    </Description>
    <Slide slidesPerView="auto" items={work_doov_icon}/>
</section>