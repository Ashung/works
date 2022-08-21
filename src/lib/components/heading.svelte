<script>
    export let title;
    export let date;
    export let tools;
    export let programme;
    export let license;
    export let url;
</script>

<div class="works-text">
    <h3 class="works-title">{title}</h3>
    <ul class="works-info">
        {#if date}<li class="info-date">{date}</li>{/if}
        {#if tools}<li class="info-tools">{tools}</li>{/if}
        {#if programme}<li class="info-programme">{programme}</li>{/if}
        {#if license}<li class="info-license">{license}</li>{/if}
        {#if url}<li class="info-url"><a href={url} target="_blank">项目主页</a></li>{/if}
    </ul>
    <div class="works-description">
        <slot></slot>
    </div>
</div>

