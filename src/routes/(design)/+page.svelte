<script>
    const skills = [
        'UI 设计', '响应式设计', 'UX', 'Icon 设计', '平面设计', '网页设计', '字体设计', '交互设计', '摄影', 
        'Design System', 'DesignOps', 'H5',
        'Responsive Design', 'Android', 'iOS', 'macOS',
        'Photoshop', 'Illustrator', 'Sketch', 'Figma',
        'HTML', 'CSS', 'JavaScript', 'Node.js', 'TypeScript', 'Vue', 'Svelte', 'Markdown',
        'Shell', 'Git', 'Linux'
    ];
</script>

<section class="about">
    <div class="about-text">
        <p>
            本人在互联网、手机平板、智能设备等行业拥有多年工作经历，主要从事 UI 设计和 Web 前端开发工作。
            熟悉各种主流设计软件、工具和方法，以及 Web、Android、iOS 等平台的设计规范，能够定制完整的设计系统、前端组件和效率工具。
            在主流设计软件的插件和脚本开发方面有一定经验，除此之外也熟悉平面设计、摄影、交互设计、服务端开发等等。
        </p>  
        <p>
            本网站所展示内容为工作期间的主要项目和作品，包含系统 UI、手机系统主题、网页、字体设计、Sketch/Figma 插件等。
        </p>
        <p>
            目前可以接受全职（工作地为深圳）、远程或兼职的 UI 设计、美工和前端开发工作，
            如果您觉得我符合贵司职位要求，可以通过以下方式联系我。 
        </p>
        <ul class="contacts">
            <li class="ic-phone"><span class="label">电话:</span> <a href="tel://13666092891">136 6609 2891</a></li>
            <li class="ic-wechat"><span class="label">微信:</span> <a class="wechat" href={"javascript:void('0');"}>通过电话添加或点此扫码</a> <img class="wechat-qrcode" src="/wechat.jpg" alt=""></li>
            <li class="ic-mail"><span class="label">邮件:</span> <a href="mailto://ashung.hung@foxmail.com">ashung.hung@foxmail.com</a></li>
            <li class="ic-resume"><span class="label">简历:</span> 
                <a href="/resume/洪斯胜_UI设计.pdf" target="_blank">下载 PDF 简历</a>
                <a href="/resume/ui">HTML</a>
            </li>
            <li class="ic-web"><span class="label">网站:</span> 
                开源项目 <a href="https://github.com/Ashung" target="_blank">github</a><br/>
                早期设计作品见 <a href="https://www.behance.net/ashung" target="_blank">behance</a> / <a href="https://dribbble.com/ashung" target="_blank">dribbble</a>
            </li>
        </ul>
    </div>
    <div class="works-nav">
        <h3>近期作品</h3>
        <ul>
            <li>
                <a href="/os-ui">
                    <h4>系统 UI 设计作品</h4>
                    <p>基于 Android 的系统设计、图标设计和应用 UI</p>
                </a>
            </li>
            <li>
                <a href="/web">
                    <h4>Web 设计作品</h4>
                    <p>Web UI 设计、UI 框架组件设计、网站设计</p>
                </a>
            </li>
            <li>
                <a href="/theme">
                    <h4>主题图标设计作品</h4>
                    <p>手机主题图标设计</p>
                </a>
            </li>
            <li>
                <a href="/other">
                    <h4>其他类型作品</h4>
                    <p>桌面端应用 UI 设计、字库设计、工具类开发</p>
                </a>
            </li>
            <li>
                <a href="/sketch-plugin">
                    <h4>Sketch 插件项目</h4>
                    <p>Sketch 插件设计和开发</p>
                </a>
            </li>
            <li>
                <a href="/figma-plugin">
                    <h4>Figma 插件项目</h4>
                    <p>Figma 插件设计和开发</p>
                </a>
            </li>
        </ul>
    </div>
    <div class="skills">
        <h3>工作技能</h3>
        <ul>
            {#each skills as item, index}
            {#if index !== 0}
            <li class="dot">&nbsp;</li>
            {/if}
            <li>{item}</li>
            
            {/each}
        </ul>
    </div>
</section>
