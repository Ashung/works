const postcssPresetEnv = require('postcss-preset-env');
const plugins = [
    postcssPresetEnv({
        stage: 0,
        features: {
            'custom-properties': false,
        },
        browsers: 'last 2 versions, not IE 10'
    })
];
module.exports = {
    plugins
}