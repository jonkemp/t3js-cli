'use strict';

module.exports = function(type) {
    var name,
        component,
        componentTypes = {
            createModule: 'module',
            createService: 'service',
            createBehavior: 'behavior'
        };

    for (component in componentTypes) {
        if (component === type) {
            name = componentTypes[component];
        }
    }

    return name;
};
