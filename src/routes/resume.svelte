<script>
    import '$lib/style/common.postcss';
    import '$lib/style/resume.postcss';
    import Nav from '$lib/components/nav.svelte';
    import { page } from '$app/stores';
</script>

<Nav/>

<div class="container container-resume">
    <section class="profile">
        <h1 class="name">洪斯胜 简历</h1>
        <div class="download">
            <a href={$page.url.origin + "/resume.pdf"} download="高级UI设计师-洪斯胜简历.pdf">下载 PDF 版</a>
        </div>
        <ul class="status">
            <li>应聘职位： 高级 UI 设计师、UI 开发工程师</li>
            <li>工作年限： 10 年以上</li>
            <li>最高学历： 艺术设计本科</li>
        </ul>
        <ul class="contacts">
            <li class="ic-phone">电话： 13666092891</li>
            <li class="ic-mail">邮箱： ashung.hung@foxmail.com</li>
            <li class="ic-wechat">微信： ashung</li>
        </ul>
    </section>

    <section class="summary">
        <h3>个人简介</h3>
        <p>
            多年 Android 平台设备的 UI 设计工作经验，非常熟悉 Android、iOS 等移动端的界面设计规范和流程。尤其在基于 Android 平台的系统界面定制、资源输出、屏幕适配等方面有丰富经验，了解一些 Android 开发方面知识，在工作中可以减少设计师与开发人员的沟通成本，帮助设计方案尽快落地。也能够快速熟悉包括 IoT、车机、工控、嵌入式等设备的 UI 设计工作，能够独立制定完整的设计规范。
        </p>
        <p>
            熟悉中后台、工具类型等网站的 UI 设计，熟悉 HTML5、CSS3、JavaScript 编程，对 SVG、网络图像、网络音视频、网页动画、Node.js 工具、Electron 和服务端等 Web 相关技术也有一定了解，以及一些设计系统规范、常见前端框架也有所了解。有大型网站的 CSS (包括 PostCSS, SASS, LESS 等)开发经验，能够独立定制或开发常见框架的样式。同时也熟悉 Git、Shell，在与开发沟通协作上没有任何障碍。
        </p>
        <p>
            精通 Photoshop、Sketch 等主要界面设计软件，在实际工作中能够为团队开发设计软件插件、批处理脚本、Web 端应用或桌面端的程序等业务相关工具，帮助团队提高工作效率。在 Sketch 和 Figma 的插件开发方面有丰富经验，已发布多个开源插件，并且在业内拥有不错的反响。
        </p>
        <p>
            善于学习和总结经验，乐于分享。具备扎实的艺术理论和设计功底，时常关注业界动态和前沿技术，对用户体验、交互设计、多媒体等方面也有所涉猎。有比较广泛的知识面和学习能力，能够快速进入全新领域。
        </p>
    </section>

    <section class="experience">
        <h3>工作经历</h3>
        <div class="list">
            <p class="date">2020/06 - 2022/07</p>
            <p class="company">深圳卡多希科技有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                <p>任职期间主要负责公司直播设备的系统相关设计工作：</p>
                <ul>
                    <li>主要负责 Android 系统直播一体机和扩展屏幕等设备底层界面、系统 UI 规范、基础应用、直播类应用的 UI 设计。</li>
                    <li>负责公司官方网站从界面设计、前端至后端开发的全部工作，以及部分针对直播设备使用的 H5 页面设计和开发。</li>
                </ul>
            </div>
        </div>

        <div class="list">
            <p class="date">2015/06 - 2019/12</p>
            <p class="company">奇酷软件 (深圳) 有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                <p>因奇虎 360 收购原因转入奇酷软件，任职期间主要负责公司奇酷手机和 360 手机的 360OS 系统相关设计工作：</p>
                <ul>
                    <li>参与了 360OS 多个版本设计方向和风格定位调研分析。具体负责设计了 360OS 3.0 版的系统图标规范设计与内置主题；4.0 版的桌面应用和内置主题图标设计；5.0 版的相机图库及部分基础应用设计。</li>
                    <li>在设计团队中负责指导和帮助设计师熟悉 Sketch 的使用，通过内部网络存储、版本控制、插件等形式改善工作流程。</li>
                    <li>管理和维护外部手机厂商的定制系统资源，制定相关流程、文档和工具。</li>
                </ul>
            </div>
        </div>
        
        <div class="list">
            <p class="date">2014/04 - 2015/06</p>
            <p class="company">宇龙计算机通信科技 (深圳) 有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                <p>主要负责酷派旗下电商品牌大神 Dazen 手机的桌面应用界面设计：</p>
                <ul>
                    <li>主要负责桌面应用的界面设计迭代，主导设计了 Coolpad 手机设计系统 CoolUI 5.0 - 6.0 版本的默认桌面图标。</li>
                    <li>参与 CoolUI 6.0 设计方向创意和部分应用界面设计。</li>
                </ul>
            </div>
        </div>

        <div class="list">
            <p class="date">2013/05 - 2014/04</p>
            <p class="company">深圳朵唯志远科技有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                <p>负责公司女性手机产品部分项目的全机界面设计：</p>
                <ul>
                    <li>主导多个项目的前期风格探索及创意提案，包括锁屏、桌面、主题图标、主屏小部件等设计。</li>
                    <li>部分 Android 系统内置基础应用的界面定制。</li>
                </ul>
            </div>
        </div>
        
        <div class="list">
            <p class="date">2008/01 - 2013/04</p>
            <p class="company">厦门享联科技有限公司</p>
            <p class="title">UI 设计师、UI 工程师</p>
            <div class="content">
                <p>任职期间主要负责公司旗下开源社区程序 BBSMax 的界面设计和 HTML/CSS 相关工作，同时也参与公司旗下其他网站的页面制作。</p>
                <ul>
                    <li>主要负责大型 .net 开源论坛社区程序 BBSMax 的 HTML/CSS 开发和界面设计工作，主导 4.0-5.0 版本的论坛、用户中心和管理员界面和图标设计。</li>
                    <li>参与公司部分网站，包括站长资讯、素材下载、站长工具等网站的前端重构，移动端网页的前端开发和应用界面设计。</li>
                    <li>参与公司游戏平台官网整站和游戏专页的前端开发、静态页面制作。</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="education">
        <h3>教育经历</h3>
        <div class="list">
            <p class="date">2002/09 - 2006/07</p>
            <p class="company">井冈山学院(今井冈山大学)艺术学院</p>
            <p class="title">艺术设计本科</p>
        </div>
    </section>

    <section class="recent-works">
        <h3>近期作品</h3>
        <ul>
            <li><a href="https://hongsisheng.vercel.app">设计作品</a></li>
            <li><a href="https://github.com/Ashung">开源项目</a></li>
        </ul>
    </section>

</div>

