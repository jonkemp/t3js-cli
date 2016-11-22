'use strict';

Box.Application.addModule('<%= componentNameSlug %>', function(context) {

    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------

    // declare the variable here so all methods can access it
    var moduleEl;

    //-----------------------------------------------------------
    // Public API
    //-----------------------------------------------------------

    return {

        init: function() {
            // capture the reference when the module is started
            moduleEl = context.getElement();
        },

        onclick: function(event, element, elementType) {

            // event is a DOM2-compliant event object
            // element is the closest ancestor that has a data-type attribute
            // elementType is the value of element's data-type attribute
        },

        destroy: function() {
            moduleEl = null;    // clear the reference
        }

    };

});
