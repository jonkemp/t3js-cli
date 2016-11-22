'use strict';

var inquirer = require('inquirer'),
    fs = require('fs-extra'),
    path = require('path'),
    replaceStream = require('replacestream');

module.exports = function() {
    console.log('Initializing .t3jsrc file...');

    inquirer.prompt([
        {
            type: 'input',
            name: 'directory',
            message: 'Please specify the path for your components:',
            default: 'scripts'
        }, {
            type: 'confirm',
            name: 'moveon',
            message: 'Continue?'
        }
    ]).then(function(answers) {
        if (!answers.moveon) {
            return;
        }

        try {
            fs.createReadStream(path.join(__dirname, '../templates/_t3jsrc'))
                .pipe(replaceStream('scripts', answers.directory))
                .pipe(fs.createWriteStream(path.join(process.cwd(), '.t3jsrc')));

            console.log('Done!');
            console.log();
        } catch (e) {
            console.log(e);
        }
    });
};
