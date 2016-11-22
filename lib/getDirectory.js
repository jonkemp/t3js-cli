'use strict';

var fs = require('fs-extra'),
    path = require('path'),
    fileExists = require('file-exists');

module.exports = function(config) {
    var t3jsrc = config || {};

    if (typeof config === 'object') {
        t3jsrc = config;
    }

    if (fileExists('.t3jsrc')) {
        t3jsrc = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.t3jsrc')));
    }

    return t3jsrc.directory || path.normalize('scripts');
};
