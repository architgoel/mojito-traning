/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('mainpage', function(Y, NAME) {

/**
 * The mainpage module.
 *
 * @module mainpage
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            // ac.models.get('model').getData(function(err, data) {
            //     if (err) {
            //         ac.error(err);
            //         return;
            //     }
            //     ac.assets.addCss('./index.css');
            //     ac.done({
            //         status: 'Mojito is working.',
            //         data: data
            //     });
            // });
            ac.data.set('alertText', 'This stuff dynamically loading from the server');
            ac.done();
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'mojito-data-addon']});
