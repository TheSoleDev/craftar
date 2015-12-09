cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.catchoom.craftar/www/CraftARError.js",
        "id": "com.catchoom.craftar.CraftARError",
        "clobbers": [
            "window.CraftARError"
        ]
    },
    {
        "file": "plugins/com.catchoom.craftar/www/CraftAR.js",
        "id": "com.catchoom.craftar.CraftAR",
        "clobbers": [
            "window.CraftAR"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "com.catchoom.craftar": "0.5.2"
}
// BOTTOM OF METADATA
});