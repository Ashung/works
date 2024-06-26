<script>
    import { base } from '$app/paths';
    import Heading from '$lib/components/heading.svelte';
    import Description from '$lib/components/description.svelte';
    import Scroller from '$lib/components/scroller.svelte';
    import SectionThumbs from '$lib/components/section_thumbs.svelte';

    const work_os_system = [
        { image: '/cadothy_os/icon_1.png', text: '系统类图标' },
        { image: '/cadothy_os/icon_2.png', text: '系统类图标' },
        { image: '/cadothy_os/icon_3.png', text: '内容、相机类图标' },
        { image: '/cadothy_os/icon_4.png', text: '影像、美颜类图标' },
        { image: '/cadothy_os/icon_5.png', text: '使用 Sketch 插件导出图标数据的 JSON 格式，然后在网页上转为 Android Vector Drawable 代码' },
        { image: '/cadothy_os/s_4.jpg', text: '字体样式与色彩体系' },
        { image: '/cadothy_os/s_1.jpg', text: '设计系统中部分 UI 组件' },
        { image: '/cadothy_os/s_2.jpg', text: '设计系统中部分 UI 组件，深色模式适配' },
        { image: '/cadothy_os/s_3.jpg', text: '系统应用栏与全屏窗口组件' },
        { image: '/cadothy_os/s_5.jpg', text: '导航与标签页' },
        { image: '/cadothy_os/s_6.jpg', text: '导航与标签页，深色模式' },
        { image: '/cadothy_os/s_7.jpg', text: '部分列表样式' },
        { image: '/cadothy_os/s_8.jpg', text: '部分内容块样式' },
        { image: '/cadothy_os/s_9.jpg', text: '部分内容块样式，深色模式' },
        { image: '/cadothy_os/s_10.jpg', text: '部分对话框样式' },
        { image: '/cadothy_os/s_11.jpg', text: '部分对话框样式，深色模式' },
        { image: '/cadothy_os/s_12.jpg', text: '用户账号部分界面' },
        { image: '/cadothy_os/s_13.jpg', text: '部分系统应用界面' },
        { image: '/cadothy_os/s_14.jpg', text: '相机部分界面' },
        { image: '/cadothy_os/s_15.jpg', text: '图库部分界面' },
        { image: '/cadothy_os/s_16.jpg', text: '文件管理部分界面' },
        { image: '/cadothy_os/s_17.jpg', text: '文件管理部分界面，深色模式' },
        { image: '/cadothy_os/s_18.jpg', text: '计算器、时钟、录音等主界面' },
        { image: '/cadothy_os/s_19.jpg', text: '计算器、时钟、录音等主界面，深色模式' },
        { image: '/cadothy_os/s_20.jpg', text: '扩展屏幕底层界面，充电和电源接口提示' },
        { image: '/cadothy_os/s_21.jpg', text: '扩展屏幕底层界面，系统未启动时屏幕与设备匹配指引' },
        { image: '/cadothy_os/s_22.jpg', text: '扩展屏幕系统界面，故障提示' },
        { image: '/cadothy_os/s_23.jpg', text: '扩展屏幕系统界面，屏幕与设备匹配指引' },
        { image: '/cadothy_os/ui_1.jpg', text: '小屏幕版导播应用，场景、添加来源和预览' },
        { image: '/cadothy_os/ui_2.jpg', text: '小屏幕版导播应用，图片设置、场景图层和画面设置' },
        { image: '/cadothy_os/ui_3.jpg', text: '小屏幕版导播应用，场景设置、横屏和相机设置' },
    ];

    const work_360os_ui = Array.from({length: 7}).map((_, index) => {
        return { image: '/360os_ui/ui_' + (index + 1) + '.jpg' }
    });

    let iconExportPlaying = false;

    let handleScroll = (entry) => {

        const iconExportDemo = document.querySelector('.code-window');
        const iconExportCode = document.getElementById('icon-export-code');
        const iconExportFile = document.getElementById('icon-export-file');
        if (entry.target === iconExportDemo && entry.isIntersecting) {
            if (iconExportPlaying === false) {
                iconExportPlaying = true;
                const speed = 200;
                const code1 = ' gulp "android png"\n$ ';
                const code2 = ' gulp "svg"\n$ ';
                const code3 = ' gulp "icon font"\n$ ';
                const code4 = ' gulp "vector drawable"\n$ ';
                let delay = 0;
                setTimeout(() => typeWriter(iconExportCode, code1, speed), delay);
                delay += code1.length * speed + speed;
                setTimeout(() => showExportFile(iconExportFile, ['MDPI/PNG', 'HDPI/PNG', 'XHDPI/PNG', 'XXHDPI/PNG']), delay);
                delay += 3000;

                setTimeout(() => typeWriter(iconExportCode, code2, speed), delay);
                delay += code2.length * speed + speed;
                setTimeout(() => showExportFile(iconExportFile, ['SVG']), delay);
                delay += 3000;

                setTimeout(() => typeWriter(iconExportCode, code3, speed), delay);
                delay += code3.length * speed + speed;
                setTimeout(() => showExportFile(iconExportFile, ['TTF', 'EOT', 'WOFF', 'WOFF2']), delay);
                delay += 3000;

                setTimeout(() => typeWriter(iconExportCode, code4, speed), delay);
                delay += code4.length * speed + speed;
                setTimeout(() => showExportFile(iconExportFile, ['XML']), delay);
                delay += 3000;

                setTimeout(() => iconExportPlaying = false, delay);
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

    function showExportFile(element, names) {
        element.innerHTML = '';
        const inner = document.createElement('div');
        names.forEach(name => {
            const item = document.createElement('span');
            item.className = 'file-icon';
            item.innerText = name;
            inner.appendChild(item);
        });
        element.appendChild(inner);
        inner.style.animation = '0.5s linear fade-in forwards';
    }
</script>

<Scroller query="[data-scroll-trigger]" handleScroll={handleScroll}/>

<SectionThumbs/>

<section class="works">
    <Heading title="直播一体机系统 UI" date="2020/06 - 2022/05" tools="Sketch"></Heading>
    <Description>
        <p>卡多希直播一体机是基于 Android AOSP 系统深度定制的大屏幕智能设备。为了让首次接触这类特殊设备的用户可以快速入手，在系统设计规范上根据自身产品特点和品牌风格为主，并参考了 Google Material Design、iPad OS 等平板系统，创建了专属的 UI 组件库。所有组件和基础应界面均针对大屏幕和深色模式做过适配优化，组件可根据不同应用而更改主色。</p>
        <p>在项目工作负责设计系统搭建、内置应用设计和规范文档维护等工作，包括系统图标、字体样式、色彩、基础控件、UI 组件、内置应用设计、系统底册界面，以及用于直播导播、提词器的核心应用设计。重新设计了 700 多个图标，除常规图标外，还增加音视频处理、图形处理、相机、多媒体等方面的图标。</p>
    </Description>
    {#each work_os_system as item}
    <figure>
        <img src="{base}{item.image}" srcset="{base}{item.image} 2x" loading="lazy" alt="">
        <figcaption>{item.text}</figcaption>
    </figure>
    {/each}
</section>

<section class="works gray">
    <Heading title="360OS 系统 UI" date="2017/04 - 2019/10" tools="Sketch" programme="Node.js"></Heading>
    
    <Description>
        <p>360OS 是 360 手机使用的操作系统，基于 Android 深度定制，同时也开放给部分海内外手机制造商使用。</p>
        <p>360OS 3.0 系统图标有意地减少线形、弧线与圆角，使得图标在低端的屏幕上能够清晰显示，同时图标的矢量格式代码更精简，渲染所消耗的性能也更低。</p>
    </Description>

    <figure>
        <img src="{base}/360os_ui/icons.png" srcset="{base}/360os_ui/icons.png 2x" loading="lazy" alt="">
        <figcaption>360OS 部分系统图标</figcaption>
    </figure>

    <Description>
        <p>在图标项目中使用 gulp 自动化工具，可以快速从 Sketch 文档生成各种类型资源，包括多种尺寸 PNG、SVG、图标字体和 Android Vector Drawable 矢量资源。</p>
    </Description>

    <div id="icon-export-demo" class="icon-export-demo">
        <div class="code-window" data-scroll-trigger>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
                <circle cx="6" cy="6" r="6" fill="#FF5F56"></circle>
                <circle cx="26" cy="6" r="6" fill="#FFBD2E" ></circle>
                <circle cx="46" cy="6" r="6" fill="#27C93F"></circle>
            </svg>
            <pre><code>$<span id="icon-export-code"></span></code></pre>
        </div>
        <div id="icon-export-file"></div>
    </div>

    <Description>
        <p>360OS 5.0 部分内置基础应用的界面的迭代设计，使用新的风格重新设计了所有原有界面，同时也优化了许多已存在的设计与交互问题。新的风格更符合当时整体的设计趋势。</p>
    </Description>

    {#each work_360os_ui as item}
    <figure class="colapse">
        <img class="slide-image" src="{base}{item.image}" srcset="{`${base}${item.image} 2x`}" loading="lazy" alt="">
    </figure>
    {/each}
</section>