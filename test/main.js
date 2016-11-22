'use strict';

var assert = require('assert'),
    path = require('path'),
    getDirectory = require('../lib/getDirectory'),
    getTemplateName = require('../lib/getTemplateName');

describe('getDirectory()', function() {
    it('should return the default directory', function() {
        var directory = getDirectory();

        assert.equal(directory, path.normalize('scripts'));
    });

    it('should return the expected directory', function() {
        var directory = getDirectory({ directory: 'js' });

        assert.equal(directory, path.normalize('js'));
    });
});

describe('getTemplateName()', function() {
    it('should return the expected template name', function() {
        assert.equal(getTemplateName('createModule'), 'module');
        assert.equal(getTemplateName('createService'), 'service');
        assert.equal(getTemplateName('createBehavior'), 'behavior');
    });
});
