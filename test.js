var assert = require('assert');

// init WebdriverIO
var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'chrome'}})
// init WebdriverCSS
require('webdrivercss').init(client);

client
    .init()
    .url('http://example.com')
    .webdrivercss('startpage',[
        {
            name: 'p',
            elem: 'p'
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.header[0].isWithinMisMatchTolerance);
        assert.ok(res.hero[0].isWithinMisMatchTolerance);
    })
    .end();
