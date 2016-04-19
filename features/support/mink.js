var Mink = require('cucumber-mink');

// BrowserStack
var parameters = {
    driver: {
        desiredCapabilities: {
            'browserstack.local': false,
            'browserstack.debug': true,
            browser:              'Safari',
            browser_version:      '8.0',
            os:                   'OS X',
            os_version:           'Yosemite',
            resolution:           '1280x1024',
            build:                'Test'
        },
        host:                'hub.browserstack.com',
        port:                80,
        user:                process.env.BROWSERSTACK_USER,
        key:                 process.env.BROWSERSTACK_KEY,
        logLevel:            'verbose',
        baseUrl:             'https://thomas.rabaix.net/'
    }
};

console.log("mink.js init script");

module.exports = function () {
    Mink.init(this, parameters);
};