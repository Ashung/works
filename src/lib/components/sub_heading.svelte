<script>
    export let title;
</script>
<div class="works-text">
    <h3 class="works-title works-title-small">{title}</h3>
    <div class="works-description">
        <slot></slot>
    </div>
</div>