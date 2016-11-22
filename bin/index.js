#!/usr/bin/env node

'use strict';

var path = require('path'),
    fs = require('fs'),
    dir = path.join(path.dirname(fs.realpathSync(__filename)), '..'),
    argv = require('minimist')(process.argv.slice(2)),
    pack = require('../package.json');

var commands = argv._;

if (commands.length === 0) {
    if (argv.version) {
        console.log(pack.name + ' version: ' + pack.version);
        process.exit();
    }
}

if (commands.indexOf('init') !== -1) {
    require(path.join(dir, 'lib/init.js'))();
} else {
    require(path.join(dir, 'index.js'))();
}
