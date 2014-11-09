showdown-furigana-extension
===========================

[Furigana](http://en.wikipedia.org/wiki/Furigana) support extension for [showdown](https://github.com/showdownjs/showdown).


Usage
------

Install [Showdown](https://github.com/showdownjs/showdown).

Install extension node module : `npm install showdown-furigana-extension --save`

    var furigana = require('showdown-furigana-extension');

    var showdown = new Showdown.converter({extensions:[furigana]});
    var html = showdown.makeHtml(src);

How to write furigana with showdown-furigana-extension
-------------

Writing furigana above any kanji in HTML5 requires 4 steps :

1. write the Kanji
2. open a parenthesis, the long one you can find in your Japanese IME (Input Method Editor).
3. type the hiragana — one or more — you want to turn into furigana. **Hiragana only!**
4. close your parenthesis – once more, a long one.

For example, typing `福（ふく）` in your markdown document will produce this in HTML5 :

    <ruby><rb>福</rb><rp>（</rp><rt>ふく</rt><rp>）</rp></ruby>

And should look like this in your final document : <ruby><rb>福</rb><rp>（</rp><rt>ふく</rt><rp>）</rp></ruby>.

<strong><ruby><rp>Warning : If you can read this, </rp><rt></rt><rp>your browser does not support furigana!</rp></ruby></strong>

If, instead of this, you see hiragana between parentheses, it means your browser (ie. Firefox) does not support the *ruby* tag. To solve this problem, you can install an extension such as **HTML Ruby**.

If you get small hiragana above your kanji, \o/ you are done.