function suportsPlaceholder() {
    return 'placeholder' in document.createElement('input') &&
            'placeholder' in document.createElement('textarea');
}

jQuery(function($) {
    function suportsPlaceholder() {
        return 'placeholder' in document.createElement('input') &&
        'placeholder' in document.createElement('textarea');
    }
    if(!suportsPlaceholder()) {
        $('html').addClass('no-Placeholder');
    }
});