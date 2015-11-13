var formulas = {
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

var observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
        var target = mutation.target;
        parseElementClasses(target);
    });
});

observer.observe(document, {
  subtree: true, attributes: true
});

function parseElementClasses(element) {
    var classNames = element && element.className && element.className.split(' ') || [];
    classNames.forEach(function(className) {
        var style = useFormula(className);
        style && style.key && (element.style[style.key] = style.value);
    });
}

function useFormula(className) {
    var pieces = className.match(/(^[a-z]{1,23})([0-9]{1,4})?/);
    var formula = pieces && formulas[pieces[1]];
    var unit = pieces && pieces[3] || 'px';

    return formula && {
        key: formula,
        value: pieces[2] + unit
    };
}