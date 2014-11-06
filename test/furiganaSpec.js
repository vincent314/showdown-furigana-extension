var furigana = require('../lib/furigana');
var Showdown = require('showdown');
var fs = require('fs');
var expect = require('chai').expect();

exports.showdown = {
    render: function (test) {
        //var showdown = new Showdown.converter({extensions: [furigana]});
        var showdown = new Showdown.converter();

        var src = fs.readFileSync('./test/fixtures/furigana.md','utf8');
        var expected = fs.readFileSync('./test/expected/furigana.html','utf8');
        console.log(src);
        var html = showdown.makeHtml(src);
        console.log(html);
        expect(html).toEqual(expected);
        test.done();
    }
};