const CracoLess = require('craco-less');
const CracoCSSModules = require('craco-css-modules');


module.exports = {
    plugins: [
        { plugin: CracoLess },
        { plugin: CracoCSSModules }
    ],
}