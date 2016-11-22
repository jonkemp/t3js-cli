'use strict';

var inquirer = require('inquirer'),
    _s = require('underscore.string'),
    fs = require('fs-extra'),
    replaceStream = require('replacestream'),
    path = require('path'),
    getDirectory = require('./lib/getDirectory'),
    getTemplateName = require('./lib/getTemplateName');

function buildComponent(answers) {
    var directory = getDirectory(),
        componentNameSlug = _s.slugify(answers.componentName),
        templateName = getTemplateName(answers.component),
        dirname = templateName + 's';

    fs.mkdirsSync(path.join(directory, dirname));

    fs.createReadStream(path.join(__dirname, 'templates/' + templateName + '.js'))
        .pipe(replaceStream('<%= componentNameSlug %>', componentNameSlug))
        .pipe(replaceStream('Box', answers.namespace))
        .pipe(fs.createWriteStream(path.join(process.cwd(), directory, dirname + '/' + componentNameSlug + '.js')));

    console.log('Your ' + componentNameSlug + ' T3 component was generated.');
    console.log();
}

module.exports = function() {
    console.log('It looks like you want to create a T3 component.');

    inquirer.prompt([
        {
            type: 'list',
            name: 'component',
            message: 'Which type of component would you like to create?',
            choices: [{
                name: 'Module',
                value: 'createModule'
            }, {
                name: 'Service',
                value: 'createService'
            }, {
                name: 'Behavior',
                value: 'createBehavior'
            }]
        }, {
            type: 'input',
            name: 'componentName',
            message: 'What is the name of your component?'
        }, {
            type: 'input',
            name: 'namespace',
            message: 'What component namespace would you like to use?',
            default: 'Box'
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
            buildComponent(answers);
        } catch (e) {
            console.log(e);
        }
    });
};
