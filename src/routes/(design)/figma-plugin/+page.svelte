<script>
    import Heading from '$lib/components/heading.svelte';
    import Description from '$lib/components/description.svelte';
    import SectionThumbs from '$lib/components/section_thumbs.svelte';
</script>

<SectionThumbs/>

<section class="works project">
    <Heading title="Android Resources Export" date="2019/07 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/c/plugin/735452896889481850/Android-Resources-Export"></Heading>
    <Description>
        <p>Figma 首批上线的插件之一，用于导出多尺寸 PNG，点九资源，响应式图标等资源，解决了 Figma 无法将多种尺寸资源导出到 Android 特定的文件结构，以及处理点九资源多种尺寸的问题。</p>
    </Description>
    <div class="project-image">
        <img src="/projects/android_resources_export.jpg" srcset="/projects/android_resources_export.jpg 2x" loading="lazy" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="Android Vector Drawable" date="2020/02 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/797369763563831541/Android-Vector-Drawable"></Heading>
    <Description>
        <p>实时查看选中图层的 Vector Drawable 代码，以及复制和导出代码功能。</p>
    </Description>
    <div class="project-image">
        <img src="/projects/android_vector_drawable.jpg" srcset="/projects/android_vector_drawable.jpg 2x" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="MixFonts" date="2019/08 - ..." tools="Figma" programme="JavaScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/735711462872799891/MixFonts"></Heading>
    <Description>
        <p>用于中西文混排为文本图层中的中文和西文指定不同的字体，以及为解决中文输入的实时文本编辑。可以保存多种混排预设组合。</p>
    </Description>
    <div class="project-image">
        <img src="/projects/mixfonts.jpg" srcset="/projects/mixfonts.jpg 2x" loading="lazy" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="Frame Resizer" date="2020/02 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/807879270674045537/Frame-Resizer"></Heading>
    <Description>
        <p>Frame 尺寸修改插件，解决了 Figma 默认没有按方向调整尺寸的功能，以及无法在不修改内部图层约束的情况快速调整至特定尺寸而不影响内部图层。其中尺寸预设功能，可以快速批量修改 Frame 尺寸。</p>
    </Description>
    <div class="project-image">
        <img src="/projects/frame_resizer.jpg" srcset="/projects/frame_resizer.jpg 2x" loading="lazy" alt="">
    </div>
</section>

<section class="works project">
    <Heading title="Data from Local" date="2019/09 - ..." tools="Figma" programme="TypeScript, HTML, CSS" license="MIT" url="https://www.figma.com/community/plugin/759249283654441170/Data-From-Local"></Heading>
    <Description>
        <p>使用本地的文本和图片的数据填充插件，将文本文件或多张图片拖放到插件界面就可以为选中图层快速填充内容。</p>
    </Description>
    <div class="project-image">
        <img src="/projects/data_from_local.jpg" srcset="/projects/data_from_local.jpg 2x" loading="lazy" alt="">
    </div>
</section>