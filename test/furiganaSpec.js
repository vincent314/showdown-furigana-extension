var furigana = require('../lib/furigana');
var Showdown = require('showdown');
var fs = require('fs');

exports.showdown = {
    render: function (test) {
        var showdown = new Showdown.converter({extensions:[furigana]});

        var src = fs.readFileSync('./test/fixtures/furigana.md','utf8');
        var expected = fs.readFileSync('./test/expected/furigana.html','utf8');
        var html = showdown.makeHtml(src);

        test.equals(html,expected);
        test.done();
    }
};