/* Core js scripts - version 1.0.1
-------------------------------------------------- */

/**
 * Toggle element
 */
(function ($) {
  $('[data-toggle-element___]').on('click', function (e) {
    var target = $(this).attr('data-toggle-element');
    var hasAriaExpanded = $(this).attr('aria-expanded');
    var hasParent = $(this).data('parent');
    // Has aria-expanded attribute - main expand/collapse button
    if (hasAriaExpanded) {
      $(this).attr('aria-expanded', function (_, attr) {
        return attr == 'true' ? false : true;
      });
      // Set parent class
      $(this).closest(hasParent).toggleClass('is-expanded');
    } else {
      // Without aria-expanded attribute - another collapse button
      //we need to set on the main button the aria-expanded to false
      var findAriaExpanded = $(this).closest(hasParent).find('[aria-expanded]');
      $(findAriaExpanded).attr('aria-expanded', function (_, attr) {
        return attr == 'true' ? false : true;
      });
      // Set parent class
      $(this).closest(hasParent).toggleClass('is-expanded');
    }
    $(target).animate({
      height: 'toggle'
    }, 600);
    e.preventDefault();
  });

})(jQuery);

/**
 * Expand/Collapse elemnt
 */
$('[aria-controls]').on('click', function (e) {
  var target = '#' + $(this).attr('aria-controls');
  $(this).attr('aria-expanded', function (_, attr) {
    return attr == 'true' ? false : true;
  });
  $('.hide-me > .toggle-target').hide();
  $(target).attr('aria-hidden', function (_, attr) {
    return attr == 'true' ? false : true;
  });
});
/**
 * Slide an element
 */
/* (function () {
  var toggle = document.getElementById('toggle');

  toggle.addEventListener('click', function () {
    var slider = document.getElementById('slider');
    var isOpen = slider.classList.contains('slider');
    slider.classList.toggle("show");
  });
})(); */