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