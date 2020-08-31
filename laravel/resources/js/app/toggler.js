/* Toggle class is-on on given target
-------------------------------------------------- */

(function ($) {

    $('.toggler').on('click', function (e) {
        var selector = $(this);

        var target = '#' + selector.attr('aria-controls');
        var hasAriaExpanded = $(this).attr('aria-expanded');
        var targetHasHidden = $(target).attr('hidden');
        // Set active clas
        $(target).toggleClass('is-on');
        // Set hidden true/false on target
        if (targetHasHidden) {
            $(this).removeAttr('hidden');
        }

        // Has aria-expanded attribute - main expand/collapse button
        if (hasAriaExpanded && hasAriaExpanded.length) {
            $(this).attr('aria-expanded', function (_, attr) {
                return attr == 'true' ? false : true;
            });
        }

        e.preventDefault();
    });

    $('body').click(function (e) {
        $(e.target).closest('.is-on').removeClass('is-on');
    });
})(jQuery);
