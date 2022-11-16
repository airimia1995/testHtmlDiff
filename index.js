const htmlDiff = require('htmldiff/src/htmldiff.js');
const diff = require('node-htmldiff');
const htmlDiffJs = require('htmldiff-js');
const fs = require('fs');

const generateDiff = () => {
    const oldHtml = fs.readFileSync('old.html').toString();
    const newHtml = fs.readFileSync('new.html').toString();
    let content = diff(oldHtml, newHtml);
    let content1 = htmlDiff(oldHtml, newHtml);

    fs.writeFileSync('diff.html', content);
    fs.writeFileSync('diff1.html', content1)
};

generateDiff();