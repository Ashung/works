<script>
    export let title;
    export let date;
    export let tools;
    export let programme;
    export let license;
    export let url;
    export let sub_heading;
</script>

<div class="works-heading">
    {#if sub_heading}
    <h3 class="works-title works-title-small">{title}</h3>
    {:else}
    <h3 class="works-title">{title}</h3>
    <ul class="works-info">
        {#if date}<li class="info-date">{date}</li>{/if}
        {#if tools}<li class="info-tools">{tools}</li>{/if}
        {#if programme}<li class="info-programme">{programme}</li>{/if}
        {#if license}<li class="info-license">{license}</li>{/if}
        {#if url}<li class="info-url"><a href={url} target="_blank">项目主页</a></li>{/if}
    </ul>
    {/if}
</div>

