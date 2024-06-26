<script>
    import '$lib/style/resume.postcss';
    import { page } from '$app/stores';
    let title = '高级 UI 设计师';
    if ($page.url.pathname === '/resume/front') {
        title = '前端开发工程师';
    }
</script>

<main>
    <div class="container container-resume">
        <section class="profile">
            <h1 class="name">洪斯胜 简历</h1>
            <p class="title">{title}</p>
            <ul class="contacts">
                <li class="ic-phone">电话： 13666092891</li>
                <li class="ic-mail">邮箱： ashung.hung@foxmail.com</li>
                <li class="ic-wechat">微信： ashung</li>
            </ul>
        </section>
    
        <section class="summary">
            <h3>个人简介</h3>
            <slot></slot>
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
                        <li>在公司创立初期从 0 到 1 完整的设计了直播一体机的 UI 规范，包括组件库和文档，并承担大部分设计工作，包括设备底层界面、系统图标、内置基础应用 UI 设计、直播类应用 UI 设计、桌面软件 UI 设计、字体设计和制作。</li>
                        <li>负责公司 SaSS 网站和内容后台系统的 UI 规范和界面设计。</li>
                        <li>负责公司官网从响应式设计、前端至后端开发的全部工作，以及嵌入直播设备的 H5 设计和开发。</li>
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
                        <li>负责 360OS 部分版本的默认主题图标、内置主题和市场主体的设计工作。</li>
                        <li>参与了 360OS 多个版本设计方向和风格定位调研分析。负责某些版本的系统图标规范设计、桌面应用、相机图库及部分基础应用设计
                        <li>在设计团队中负责指导和帮助设计师熟悉工具的使用，通过搭建或开发内部网络存储、版本控制、插件等改善工作流程。</li>
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
                        <li>任职期间负责桌面应用多个版本的界面设计迭代，工作内容包括 Launcher UI、Widget、主题图标，主导设计了 Coolpad 手机设计系统 CoolUI 5.0 - 6.0 版本的默认桌面图标。</li>
                        <li>参与 CoolUI 设计方向创意和部分内置应用界面设计。</li>
                    </ul>
                </div>
            </div>
    
            <div class="list">
                <p class="date">2013/05 - 2014/04</p>
                <p class="company">深圳朵唯志远科技有限公司</p>
                <p class="title">高级 UI 设计师</p>
                <div class="content">
                    <p>负责公司女性手机产品项目的全机界面设计：</p>
                    <ul>
                        <li>主导多个项目的前期风格探索及创意提案，工作内容包括主题图标、锁屏、桌面、主屏小部件等设计。</li>
                        <li>特色应用和部分系统内置基础应用的界面设计。</li>
                    </ul>
                </div>
            </div>
            
            <div class="list">
                <p class="date">2008/01 - 2013/04</p>
                <p class="company">厦门享联科技有限公司</p>
                <p class="title">UI 设计师、前端开发工程师</p>
                <div class="content">
                    <p>任职期间主要负责公司旗下开源社区程序 BBSMax 的界面设计和 HTML/CSS 相关工作，同时也参与公司旗下其他网站的页面制作。</p>
                    <ul>
                        <li>主要负责开源论坛社区程序 BBSMax 的 HTML/CSS 开发和界面设计工作，在版本 4.0-5.0 中负责论坛主题、用户中心、管理员的界面设计和像素图标设计。</li>
                        <li>参与公司部分网站，包括站长资讯、素材下载、站长工具等网站的前端重构，移动端网页的前端开发和应用界面设计。</li>
                        <li>参与公司关联的游戏平台官网整站和游戏专页的前端开发。</li>
                    </ul>
                </div>
            </div>
    
            <div class="list">
                <p class="date">2006/12 - 2008/01</p>
                <p class="company">厦门读客信息科技有限公司</p>
                <p class="title">UI 设计师、前端开发工程师</p>
                <div class="content">
                    <p>负责公司网站、内部后台系统、活动专题的页面设计和静态页面制作。</p>
                </div>
            </div>
        </section>
    
        <section class="education">
            <h3>教育经历</h3>
            <div class="list">
                <p class="date">2002/09 - 2006/07</p>
                <p class="company">井冈山大学 艺术设计本科</p>
            </div>
        </section>
    
        <section class="recent-works">
            <h3>相关链接</h3>
            <ul>
                <li><a href="https://ashung.github.io/works">近期作品</a></li>
                <li><a href="https://github.com/Ashung">Github</a></li>
                <li><a href="https://www.behance.net/ashung">behance</a> </li>
                <li><a href="https://dribbble.com/ashung">dribbble</a></li>
            </ul>
        </section>
    
    </div>    
</main>