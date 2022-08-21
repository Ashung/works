<script>
    let min = 100;
    let max = 700;
    let value = 400;
    const weights = {
        thin: 100,
        extra_light: 200,
        light: 300,
        regular: 400,
        medium: 500,
        demi_bold: 600,
        bold: 700
    };
    $:style = `font-variation-settings: 'wght' ${value};`;
    $:rangeStyle = `background-size: ${percent(value)}% 100%;`;
    function setStyle(_value) {
        style = `font-variation-settings: 'wght' ${_value};`;
        value = _value;
    }
    function format(_key) {
        return _key.split('_').map(_s => {
            return _s[0].toUpperCase() + _s.substr(1);
        }).join(' ');
    }
    function percent(_value) {
        return (_value - min) * 100 / (max - min);
    }
</script>

<div class="font-preview">
    <div class="controls">
        {#each Object.keys(weights) as key}
        <button class="tab-button" class:current={value === weights[key]} on:click={() => setStyle(weights[key])}>{format(key)}</button>
        {/each}
    </div>
    <div class="range">
        <input type="range" min={min} max={max} bind:value={value} style={rangeStyle}>
        <code>wght:{value}</code>
    </div>
    <div class="preview" style={style}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<span>013469</span>~!@#$%^&*()_+-=[]|:;"',./?&lt;&gt;&lbrace;&rbrace;
        WATER JAVA LTE flash fish 12:00 A:1
    </div>
</div>

<style lang="postcss">
    @font-face {
        font-family: Cadothy;
        src: url("/font/CadothySansVF.woff2") format("woff2");
    }
    .font-preview {
        margin-top: 80px;
        text-align: center;
        & .controls {
            margin-bottom: 24px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
        }
        & .range {
            margin-bottom: 24px;
            & code {
                margin-top: 16px;
                display: block;
                color: var(--secondary-text-color);
                font-family: Monaco, monospace;
            }
        }
        & .preview {
            font-size: 60px;
            line-height: 1.2;
            font-family: Cadothy;
            word-break: break-all;
            max-width: 1000px;
            margin: auto;
            & span {
                font-feature-settings: 'ss01';
            }
        }
        @media (--mobile) {
            & .preview {
                font-size: 40px;
            }
        }
    }
</style>