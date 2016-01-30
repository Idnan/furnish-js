;
// Inline JS. Easily turn your classes into the style
// v1.0
(function(window, document ) {

    /**
     * CSS property aliases. Defines the mapping with CSS properties
     * @type {Object}
     */
    var propertyAlias = {
        t: 'top',
        b: 'bottom',
        l: 'left',
        r: 'right',

        w: 'width',
        h: 'height',

        p: 'padding',
        m: 'margin',

        br: 'borderRadius',
        fs: 'fontSize',
        fw: 'fontWeight',
        lh: 'lineHeight',

        mt: 'marginTop',
        mb: 'marginBottom',
        ml: 'marginLeft',
        mr: 'marginRight',

        pt: 'paddingTop',
        pb: 'paddingBottom',
        pl: 'paddingLeft',
        pr: 'paddingRight'
    };

    /**
     * Observer to keep an eye on element changes and furnishing elements
     */
    var observer = new MutationObserver(function(mutations, observer) {
        mutations.forEach(function(mutation) {
            var target = mutation.target;
            furnishElement(target);
        });
    });

    /**
     * Checks the passed element for applied classes and checks
     * to see if the element can be furnished i.e. if any of the known classes are available
     * 
     * @param  {object} element The object to be furnisged
     * @return {void}
     */
    function furnishElement(element) {
        var classNames = element && element.className && element.className.split(' ') || [];
        // For each of the class names, see if we can furnish the element by this class
        classNames.forEach(function(className) {
            var style = generateStyle(className);
            style && style.key && (element.style[style.key] = style.value);
        });
    }

    /**
     * Generates the style object from the passed class name

     * @param  {string} className The name of from which style is to be generated
     * @return {object}           An object specifying the CSS property and value
     */
    function generateStyle(className) {
        var pieces = className.match(/(^[a-z]{1,23})([0-9]{1,4})?/),
            cssProperty = pieces && propertyAlias[pieces[1]],
            unit = pieces && pieces[3] || 'px';

        return cssProperty && {
            key: cssProperty,
            value: pieces[2] + unit
        };
    }

    /**
     * Furnish the elements in side the passed element
     * 
     * @param  {null|object} observeElement The dom element to which the style is applied
     * @return {void}
     */
    function apply(observeElement) {

        var observeElement = observeElement || window.document,
            observeElement = observeElement instanceof Array ? observeElement[0] : observeElement;
        
        var elements = observeElement.getElementsByTagName('*');

        for(var i in elements) {
            var element = elements[i];
            if (typeof(element) === "object") {
                furnishElement(element);
                observer.observe(element, {attributes: true });
            }
        }
    }

    return Furnish = {
        apply: apply
    };

})(window, document);