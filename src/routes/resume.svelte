<script>
    import '$lib/style/common.postcss';
    import '$lib/style/resume.postcss';
    import Nav from '$lib/components/nav.svelte';
</script>

<Nav/>

<div class="container container-resume">
    <section class="profile">
        <h1 class="name">洪斯胜 简历</h1>
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
            多年 Android 平台手机及类似设备的 UI 设计工作经验，非常熟悉 Android、iOS 等移动端的界面设计规范和流程。尤其在基于 Android 平台的系统界面定制、资源输出、屏幕适配等方面有丰富经验，了解一些 Android 开发方面知识，在工作中可以减少设计师与开发人员的沟通成本，帮助设计方案尽快落地。也能够快速熟悉包括 IoT 设备、车机、嵌入式设备等行业的 UI 设计工作。
        </p>
        <p>
            熟悉中后台类型网站以及基于 Web 技术的桌面软件的 UI 设计，熟悉 HTML5、JavaScript 编程以及常见一些前端框架和技术。有大型网站的 CSS 开发经验，能够定制或独立开发中后台框架的样式或组件。对网页动画、Node.js 服务端也有所了解。
        </p>
        <p>
            精通 Photoshop、Sketch 等主要界面设计软件，在实际工作中还能够为设计团队开发设计软件插件、批处理脚本、Web 端应用或桌面端的程序等业务相关工具，帮助团队提高工作效率。目前在 Sketch 和 Figma 这类 UI 设计软件的插件开发方面有丰富经验，已发布多个开源插件，并且在业内拥有不错的反响。
        </p>
        <p>
            善于学习和总结经验，乐于分享。具备扎实的艺术理论和设计功底，经常关注业界动态和前沿技术，对用户体验、开发、多媒体等方面也有所涉猎。拥有比较广泛的知识面和学习能力，能够快速进入全新领域。
        </p>
    </section>

    <section class="experience">
        <h3>工作经历</h3>
        <div class="list">
            <p class="date">2020/06 - 2022/07</p>
            <p class="company">深圳卡多希科技有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                主要负责直播一体机的系统 UI 规范、基础应用、直播类应用、以及桌面端软件的 UI 设计；负责官方网站设计和前后端开发。
            </div>
        </div>

        <div class="list">
            <p class="date">2015/06 - 2019/12</p>
            <p class="company">奇酷软件 (深圳) 有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                因奇虎 360 收购原因转入奇酷软件，任职期间主要负责公司奇酷手机和 360 手机的 360OS 相关工作：包括参与 360OS 1.0 - 5.0 版本的 UI 设计；3.0 版本的系统图标规范设计与内置主题设计；4.0 桌面应用和内置主题图标设计；5.0 相机、图库及部分基础应用设计；管理和维护外部手机厂商定制系统资源。
            </div>
        </div>

        <div class="list">
            <p class="date">2014/04 - 2015/06</p>
            <p class="company">宇龙计算机通信科技 (深圳) 有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                主要负责酷派旗下电商品牌大神 Dazen 手机的桌面界面设计：包括桌面界面设计；主导设计系统 UI CoolUI 5 - 6 的默认桌面图标；参与 CoolUI 6 部分应用界面设计。
            </div>
        </div>

        <div class="list">
            <p class="date">2013/05 - 2014/04</p>
            <p class="company">深圳朵唯志远科技有限公司</p>
            <p class="title">高级 UI 设计师</p>
            <div class="content">
                主导公司产品女性手机部分项目的全机界面设计：包括多个项目的前期风格探索及提案，包括锁屏、主题图标、小部件等设计；系统基础应用的界面设计。
            </div>
        </div>
        
        <div class="list">
            <p class="date">2008/01 - 2013/04</p>
            <p class="company">厦门享联科技有限公司</p>
            <p class="title">UI 设计师、UI 工程师</p>
            <div class="content">
                <p>
                    任职期间主要负责公司旗下开源社区程序 BBSMax 的界面设计和 HTML/CSS 开发；以及公司旗下部分网站（站长之家、素材、工具、下载等网站）的 HTML/CSS 开发。
                </p>
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

    <section class="works">
        <h3>近期作品</h3>
        <ul>
            <li><a href="https://hongsisheng.vercel.app">设计作品</a></li>
            <li><a href="https://github.com/Ashung">开源项目</a></li>
        </ul>
    </section>

</div>